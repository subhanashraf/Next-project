import { connect } from "@/db/config/connect";
import User from "@/db/model/User";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
import { NextResponse } from "next/server";

// 🆕 Create User (POST)
export async function POST(req:Request) {
  await connect();
  try {
    const { name, email, password, phone, address, fatherName, motherName, age, gender, dateOfBirth, maritalStatus, alternatePhone, city, state, country, zipCode, ipAddress, deviceName, role, facebookProfile, twitterProfile, linkedInProfile, githubProfile, website } = await req.json();

    // 🔍 Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // 🔐 Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 🆕 Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword, // Save hashed password
      phone,
      address,
      fatherName,
      motherName,
      age,
      gender,
      dateOfBirth,
      maritalStatus,
      alternatePhone,
      city,
      state,
      country,
      zipCode,
      ipAddress,
      deviceName,
      role,
      facebookProfile,
      twitterProfile,
      linkedInProfile,
      githubProfile,
      website,
    });
    await newUser.save();

    // 🔑 Generate JWT Token
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role }, 
      "subhan", // Store JWT_SECRET in .env.local
      { expiresIn: "7d" } // Token valid for 7 days
    );

    return NextResponse.json(
      {
        message: "User created successfully",
        user: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
        token, // Send JWT token
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
