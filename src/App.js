import './App.css';
import SignUpLogin from './Component/SignUpLogin';
function App() {
  return(
    <>
    <div className='App'>
      <SignUpLogin />
    </div>
    </>
  )
}

export default App;



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