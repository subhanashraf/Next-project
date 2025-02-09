import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // 🆔 Personal Information
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed password
  fatherName: { type: String, required: true },
  motherName: { type: String },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dateOfBirth: { type: Date },
  maritalStatus: { type: String, enum: ["Single", "Married", "Divorced", "Widowed"] },

  // 📞 Contact Details
  phone: { type: String, unique: true },
  alternatePhone: { type: String },
  address: { type: String, required: true },
  city: { type: String },
  state: { type: String },
  country: { type: String },
  zipCode: { type: String },

  // 🔒 Security & Authentication
  ipAddress: { type: String }, // Store last login IP address
  deviceName: { type: String }, // Store last login device name
  otp: { type: String }, // OTP for authentication
  otpExpires: { type: Date }, // Expiration time for OTP
  resetToken: { type: String }, // Token for password reset
  resetTokenExpires: { type: Date }, // Expiration time for password reset token
  twoFactorEnabled: { type: Boolean, default: false }, // Enable 2FA
  twoFactorSecret: { type: String }, // Store 2FA secret key (TOTP)
  securityQuestion: { type: String }, // Security question for password recovery
  securityAnswer: { type: String }, // Hashed answer to security question
  failedLoginAttempts: { type: Number, default: 0 }, // Number of failed attempts
  accountLocked: { type: Boolean, default: false }, // Lock account after failed attempts
  lastPasswordChange: { type: Date }, // Last time password was changed
  passwordHistory: [{ type: String }], // Store previous password hashes
  accountVerified: { type: Boolean, default: false }, // Email verification status
  verificationToken: { type: String }, // Token for email verification
  verificationTokenExpires: { type: Date }, // Expiration time for verification token

  // ⚙️ Account Details
  role: { type: String, enum: ["User", "Admin", "Moderator"], default: "User" },
  status: { type: String, enum: ["Active", "Inactive", "Banned"], default: "Active" },
  profilePicture: { type: String }, // URL for profile image
  coverPhoto: { type: String }, // URL for cover photo
  bio: { type: String, maxlength: 500 },

  // 🕵️ Login & Activity
  lastLogin: { type: Date },
  loginHistory: [{ ip: String, device: String, timestamp: Date }],
  sessionTokens: [{ token: String, createdAt: Date }], // Store active sessions
  isOnline: { type: Boolean, default: false }, // Track online status
  lastLogout: { type: Date }, // Store last logout timestamp

  // 📲 Device Tracking
  trustedDevices: [{ deviceName: String, ip: String, addedAt: Date }], // Store trusted devices

  // 🌍 Social Media & Extra
  facebookProfile: { type: String },
  twitterProfile: { type: String },
  linkedInProfile: { type: String },
  githubProfile: { type: String },
  website: { type: String },

  // 🛠️ Miscellaneous
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to update 'updatedAt' before saving
UserSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
