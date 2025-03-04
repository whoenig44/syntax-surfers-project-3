import mongoose, { Schema, Document, Types } from 'mongoose';

// Define an interface for the user-book relationship
export interface IUserBooks extends Document {
    userId: Types.ObjectId;
    bookId: Types.ObjectId;
    checkedOut: boolean;
    checkoutDate?: Date;
    returnDate?: Date;
  }
  
  // Define the schema
  const userBooksSchema: Schema = new Schema({
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    bookId: { type: Types.ObjectId, ref: 'Book', required: true },
    checkedOut: { type: Boolean, default: true },
    checkoutDate: { type: Date, default: Date.now },
    returnDate: { type: Date }, // Nullable, set when returned
  });
  
  // Create the model
  export const UserBooks = mongoose.model<IUserBooks>('UserBooks', userBooksSchema)






