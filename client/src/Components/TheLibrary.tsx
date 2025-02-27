// import { useLocation, useNavigate, Routes, Route } from 'react';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import MyBooks from './Pages/MyBooks';
// import Login from './Pages/Login';
import Footer from './Footer';
import Header from './Header';
import { Page } from './PageTypes';
import { useNavigate } from 'react-router-dom';

export default function TheLibrary(): JSX.Element {
    const [currentPage, setCurrentPage] = useState<Page>('Home');
    const navigate = useNavigate();
    const handlePageChange = (page: Page): void => {
        setCurrentPage(page);
        navigate(`/${page.toLowerCase().replace(/ /g, '-')}`);
    };
    return (
        <>
        <Header currentPage={currentPage} handlePageChange={handlePageChange}  />   
            <main>
                <div className="height">
                <Routes>
                <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/mybooks" element={<MyBooks />} />
                    <Route path="/about" element={<About />} />
                       
                </Routes>
             </div>   
            </main>
        <Footer />
        </>
    );
}





// export default function TheLibrary(): JSX.Element {
   

//     const location = useLocation();
//     const navigate = useNavigate();
//     console.log(location)
//   const [currentPage, setCurrentPage] = useState<Page>('Home');
// // //   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

// // //   useEffect(() => {
// // //     const authStatus = Auth.loggedIn();
// // //     console.log(authStatus);
// // //     if (authStatus) {
// // //       setIsAuthenticated(true);
// // //     } else {
// // //       setIsAuthenticated(false);
// // //       if (location.pathname !== '/login') {
// // //         navigate('/login');
// // //       }
// // //     }
// // //   }, [navigate, location.pathname]);

  
//     const handlePageChange = (page: Page): void => {
//         setCurrentPage(page);
//         navigate(`/${page.toLowerCase().replace(/ /g, '-')}`);
//     };
    
//     return (
//         <>
        
//         <main >
           
//                 { <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
                    
                   
                    
//                 </Routes> }
               
//             </main>
            
//         </>
//     );
// }
