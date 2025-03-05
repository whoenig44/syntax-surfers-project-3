// import { gql, useMutation } from '@apollo/client';


// export const CHECK_OUT_BOOK = gql`
//   mutation checkOutBook($userId: ID!, $bookId: ID!) {
//     checkOutBook(userId: $userId, bookId: $bookId) {
//       _id
//       userId
//       bookId
//       checkedOut
//       checkoutDate
//     }
//   }
// `;

// export const useCheckOutBook = () => {
//   const [checkOutBook, { loading, error, data }] = useMutation(CHECK_OUT_BOOK);

//   const handleCheckOutBook = async (userId: string, bookId: string) => {
//     try {
//       const { data } = await checkOutBook({
//         variables: { userId, bookId },
//       });
//       console.log('Book checked out:', data.checkOutBook);
//     } catch (err) {
//       console.error('Error checking out book:', err);
//     }
//   };

//   return { loading, error, handleCheckOutBook };
// };
// export const RETURN_BOOK = gql`
//   mutation returnBook($userId: ID!, $bookId: ID!) {
//     returnBook(userId: $userId, bookId: $bookId) {
//       _id
//       userId
//       bookId
//       checkedOut
//       checkoutDate
//       returnDate
//     }
//   }
// `;
// // Custom hook to handle the returnBook mutation
// export const useReturnBook = () => {
//   const [returnBook, { loading, error, data:mutationData }] = useMutation(RETURN_BOOK);

//   // Function to handle returning the book
//   const handleReturnBook = async (userId: string, bookId: string) => {
//     try {
//       const { data } = await returnBook({
//         variables: { userId, bookId },
//       });
//       console.log('Book returned:', data.returnBook);
//     } catch (err) {
//       console.error('Error returning book:', err);
//     }
//   };

//   return { loading, error, mutationData, handleReturnBook };
// };