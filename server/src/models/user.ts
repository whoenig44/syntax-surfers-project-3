import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Define the interface for the User document
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  checkedOutBooks: mongoose.Types.ObjectId[]; //Books the user has checked out
  generateAuthToken(): string;
  matchPassword(password: string): Promise<boolean>;
  setPassword(password: string): Promise<void>;
}

// Define the schema for the User model
const userSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  checkedOutBooks: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
  },  
{ timestamps: true }
);

// Method to hash and compare passwords
userSchema.methods.setPassword = async function (password: string) {
  const saltRounds = 10;
  this.password = await bcrypt.hash(password, saltRounds);
};

userSchema.methods.matchPassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
};

// Generate JWT for user authentication
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { id: this._id, username: this.username, email: this.email },
    process.env.JWT_SECRET || 'yourSecretKey', // Replace with your secret key
    { expiresIn: '1h' } // Set the token expiration (optional)
  );
  return token;
};

// Before saving the user, hash the password if it is being changed or set
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  await this.setPassword(this.password);
  next();
});

// Create the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
