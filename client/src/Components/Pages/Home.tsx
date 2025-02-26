
import SearchForm from '../SearchForm';
import libraryImage from '../../assets/LibraryBackdrop.jpg';




export default function Home() {
    return (
       <>
      <h2>Welcome to The Library!</h2>
      <p>Search for a book by author's name, title, or category.</p>
      <p>When you find a book you like, you can choose to check it out.</p>
      <p>Click the My Books tab to see which books you currently have checked out.</p>
       
        <SearchForm/>
        <img src={libraryImage} alt="Library image" style={{height: "375px"}} />           
            
            
        
       </>
    );
};
