import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'; // Ensure correct path
import Home from './Component/Home/Home';
import SignUpLogin from './Component/Signup-in/SignUpLogin'; // Ensure correct path
import './App.css'; // Ensure this file is present or remove if not needed
import ScholarshipDashboard from './Component/Schaolarship/ScholarshipDashboard';
// import StudentInformationForm from './Component/Applied/ScholarshipForm';
import AboutUsPage from './Component/About us/AboutUsPage';
import ScholarshipForm from './Component/Applied/ScholarshipForm';
const App = () => {
  return (
    <>
    {/* <SignUpLogin/> */}
    <Navbar />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in/up" element={<SignUpLogin />} />
      <Route path="/ScholarshipForm" element={<ScholarshipForm />} />
      <Route path="/dashboard" element={<ScholarshipDashboard />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/Apply" element={<ScholarshipForm />} />
    </Routes>
    </>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Component/Navbar/Navbar'; // Ensure correct path
// import Home from './Component/Home/Home';
// import SignUpLogin from './Component/Signup-in/SignUpLogin'; // Ensure correct path
// import ScholarshipDashboard from './Component/Schaolarship/ScholarshipDashboard'; // Ensure correct path
// import './App.css'; // Ensure this file is present or remove if not needed

// const App = () => {
//   return (
//     <>
//       <Router>
//         <Navbar />  
//         <Routes>
//           <Route path="/" element={<div>
//             home
//           </div>} />
//           <Route path="/sign" element={<SignUpLogin />} />
//           <Route path="/Dashboard" element={<ScholarshipDashboard />} />
//           {/* Add other routes here as needed */}
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;




//import Form from './pages/Form';

//<Form />


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Contact from './pages/Contact';
// import Navbar from './pages/Navbar';
// import { useState, createContext } from'react';
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
// export const AppContext = createContext();

// const client = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//     },
//   },
// });
// const [username, setUsername] = useState("Piyush");
// return (
//   <>
//   <div className='App'>
//     <QueryClientProvider client={client}>
//     <AppContext.Provider value={{username, setUsername}}>
//     <Router>          
//       Navbar
//       <Navbar />
//       <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/profile" element={<Profile  />}/>
//       <Route path="/contact" element={<Contact />}/>
//       <Route path="*" element={<h1>Page Not Found</h1>}/>
//       </Routes>
//     </Router>
//     </AppContext.Provider>
//     </QueryClientProvider>
//   </div>
//   </>
// );
// }