import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "@/db/config/connect";
import User from "@/db/model/User";
const bcrypt = require("bcrypt");

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        await connect();
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }

        // const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        // if (!isValidPassword) {
        //   throw new Error("Invalid password");
        // }

        return { id: user._id.toString(), name: user.name, email: user.email, role: user.role }; // ✅ Fix here
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }:any) {
      if (user) {
        token.id = user.id;
        token.role = user.role; // ✅ Fix here
      }
      console.log("Generated Token:", token); // ✅ Debugging line
      return token;
    },
    async session({ session, token }:any) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role; // ✅ Fix here
      }
      return session;
    },
    async redirect({ url, baseUrl }:any) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET // ✅ Ensure this is set
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
