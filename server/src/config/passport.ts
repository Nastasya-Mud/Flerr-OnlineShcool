import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { User } from '../models/User';

passport.serializeUser((user: any, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists
        let user = await User.findOne({ email: profile.emails?.[0]?.value });

        if (user) {
          // User exists, return user
          return done(null, user);
        }

        // Check if this should be the first admin user
        const existingUsers = await User.countDocuments();
        const isFirstUser = existingUsers === 0;

        // Create new user
        user = new User({
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
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

export default passport;
