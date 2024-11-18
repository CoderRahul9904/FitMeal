import mongoose, { Document, Schema, Model } from 'mongoose';

// Interface for the User Document
export interface IUser extends Document {
  name: string;
  email: string;
  password: string; // Hashed password
  role: 'user' | 'admin'; // User roles
  isActive: boolean; // Status of the user account
  createdAt: Date; // Automatically generated
  updatedAt: Date; // Automatically generated
}

// Define the User Schema
const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email address',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters long'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // Automatically manages createdAt and updatedAt fields
  }
);

// Export the User Model
export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);

export default User;
