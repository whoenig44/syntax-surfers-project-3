import bcrypt from 'bcryptjs';
import  User  from '../models/user.js';
import { Book } from '../models/bookModel.js';
import { UserBooks } from '../models/userBooksModel.js';
import { books } from './seedData.js';
//import fs from 'fs';

// Sample user data (with plain-text passwords, to be hashed)
const users = [
  { id: 1, username: "john_doe", email: "john_doe@example.com", password: "password123" },
  { id: 2, username: "jane_smith", email: "jane_smith@example.com", password: "12345password" },
  { id: 3, username: "michael_lee", email: "michael_lee@example.com", password: "michael2023" },
  { id: 4, username: "emily_williams", email: "emily_williams@example.com", password: "emilySecure1" },
  { id: 5, username: "matthew_brown", email: "matthew_brown@example.com", password: "brownMat1" },
  { id: 6, username: "olivia_johnson", email: "olivia_johnson@example.com", password: "Olivia123" },
  { id: 7, username: "lucas_martinez", email: "lucas_martinez@example.com", password: "Lucas!2023" },
  { id: 8, username: "ava_davis", email: "ava_davis@example.com", password: "Ava!123" },
  { id: 9, username: "ethan_garcia", email: "ethan_garcia@example.com", password: "Ethan1234" },
  { id: 10, username: "sofia_moore", email: "sofia_moore@example.com", password: "Sofia@2023" },
  { id: 11, username: "jackson_taylor", email: "jackson_taylor@example.com", password: "jackson_taylor1" },
  { id: 12, username: "mason_anderson", email: "mason_anderson@example.com", password: "MasonSecure12" },
  { id: 13, username: "amelia_harris", email: "amelia_harris@example.com", password: "Amelia#123" },
  { id: 14, username: "lucy_king", email: "lucy_king@example.com", password: "Lucy2023king" },
  { id: 15, username: "noah_clark", email: "noah_clark@example.com", password: "NoahClark2023" }
];

//Sample user-book relationships
const userBooks = [
    { username: "john_doe", bookTitle: "The Pragmatic Programmer", checkedOut: true },
    { username: "jane_smith", bookTitle: "Clean Code", checkedOut: true }
  ];

// Hash passwords and seed users
export const seedUsers = async () => {
  try {
    for (let user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);  // Hash the password
      const newUser = new User({
        username: user.username,
        email: user.email,
        password: hashedPassword,
      });
      await newUser.save();
      console.log(`User ${user.username} created`);
    }
    console.log("All users seeded successfully");
  } catch (err) {
    console.error("Error seeding users:", err);
  }
};

// Seed books
export const seedBooks = async () => {
    try {
      await Book.insertMany(books);
      console.log("Books seeded successfully");
    } catch (err) {
      console.error("Error seeding books:", err);
    }
  };
  
  // Seed user-book relationships
  const seedUserBooks = async () => {
    try {
      for (let ub of userBooks) {
        const user = await User.findOne({ username: ub.username });
        const book = await Book.findOne({ title: ub.bookTitle });
  
        if (user && book) {
          const newUserBook = new UserBooks({
            userId: user._id,
            bookId: book._id,
            checkedOut: ub.checkedOut,
          });
          await newUserBook.save();
          console.log(`${ub.username} checked out "${ub.bookTitle}"`);
        }
      }
    } catch (err) {
      console.error("Error seeding user-books:", err);
    }
  };
  
  // Seed all data
  const seedDatabase = async () => {
    try {
      await seedUsers();
      await seedBooks();
      await seedUserBooks();
      console.log("Database seeding complete!");
    } catch (err) {
      console.error("Error seeding database:", err);
    }
  };
  
  seedDatabase();

