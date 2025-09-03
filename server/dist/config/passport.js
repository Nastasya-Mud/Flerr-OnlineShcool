"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const User_1 = require("../models/User");
passport_1.default.serializeUser((user, done) => {
    done(null, user._id);
});
passport_1.default.deserializeUser(async (id, done) => {
    try {
        const user = await User_1.User.findById(id);
        done(null, user);
    }
    catch (error) {
        done(error, null);
    }
});
passport_1.default.use(new passport_google_oauth20_1.Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists
        let user = await User_1.User.findOne({ email: profile.emails?.[0]?.value });
        if (user) {
            // User exists, return user
            return done(null, user);
        }
        // Check if this should be the first admin user
        const existingUsers = await User_1.User.countDocuments();
        const isFirstUser = existingUsers === 0;
        // Create new user
        user = new User_1.User({
            email: profile.emails?.[0]?.value,
            firstName: profile.name?.givenName || 'User',
            lastName: profile.name?.familyName || '',
            avatar: profile.photos?.[0]?.value,
            role: isFirstUser ? 'admin' : 'student',
            // No password for Google OAuth users
            password: Math.random().toString(36).slice(-8), // Random password (won't be used)
        });
        await user.save();
        return done(null, user);
    }
    catch (error) {
        return done(error, null);
    }
}));
exports.default = passport_1.default;
//# sourceMappingURL=passport.js.map