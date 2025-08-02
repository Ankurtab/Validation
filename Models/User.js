// models/User.js
const mongoose = require("mongoose");

const loginHistorySchema = new mongoose.Schema({
  ip: String,
  browser: String,
  os: String,
  platform: String,
  loginAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
  phoneVerified: { type: Boolean, default: false },
  emailOtp: String,
  smsOtp: String,
  emailOtpExpires: Date,
  smsOtpExpires: Date,
  logins: [loginHistorySchema],
  createdAt: { type: Date, default: Date.now, expires: 300 } // Auto-delete after 5 min
});

// Only auto-delete if user is not verified
userSchema.pre('save', function (next) {
  if (this.emailVerified && this.phoneVerified) {
    this.createdAt = undefined; // disables TTL for verified users
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
