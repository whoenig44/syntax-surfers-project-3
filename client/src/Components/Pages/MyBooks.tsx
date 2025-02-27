import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER_BOOKS } from '../../graphql/Queries';
import { RETURN_BOOK } from '../../graphql/Mutations';
import { getUserFromToken } from '../../utils/auth';


const user = getUserFromToken();
console.log(user?.id); //Gives you the user ID

const MyBooks = () => {
  const [userId, setUserId] = useState<string>(''); //Set the userId here
  useEffect(() => {
    const user = getUserFromToken();
    if (user?.id) {
      setUserId(user.id);
    }
  }, []);  //Empty dependency array means this runs once when the component mounts  
  
  const { loading, error, data } = useQuery(GET_USER_BOOKS, {
    variables: { userId },
    skip: !userId, //Skip query until userId is available
  });
    
  const [returnBook] = useMutation(RETURN_BOOK);

  const handleReturnBook = async (bookId: string) => {
    try {
      const { data } = await returnBook({
        variables: { userId, bookId },
      });
      console.log('Book returned', data.returnBook);
    } catch (error) {
      console.error('Error returning book', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


return (
  <div>
    <h1>My Books</h1>
    <ul>
      {data.userBooks.map((book: any) => (
        <li key={book._id}>
          <span>Book ID: {book.bookId.title}</span> - 
            {book.checkedOut ? "Checked out" : "Returned"}
            {book.checkedOut && (
              <button onClick={() => handleReturnBook(book.bookId._id)}>
                Return Book
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyBooks;