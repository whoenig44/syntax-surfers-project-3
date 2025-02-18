// import { useLocation, useNavigate, Routes, Route } from 'react';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
// import About from './pages/About';
// import Login from './pages/Login';
// import Footer from './Footer';
import Header from './Header';

export default function TheLibrary(): JSX.Element {
    return (
        <>
        <Header />
            <main>
                <Home />
            </main>
        </>
    );
}





// export default function TheLibrary(): JSX.Element {
   

//     const location = useLocation();
//     const navigate = useNavigate();
//     console.log(location)
//   const [currentPage, setCurrentPage] = useState<Page>('Home');
// //   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

// //   useEffect(() => {
// //     const authStatus = Auth.loggedIn();
// //     console.log(authStatus);
// //     if (authStatus) {
// //       setIsAuthenticated(true);
// //     } else {
// //       setIsAuthenticated(false);
// //       if (location.pathname !== '/login') {
// //         navigate('/login');
// //       }
// //     }
// //   }, [navigate, location.pathname]);

  
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
