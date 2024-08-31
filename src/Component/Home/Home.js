// import { useNavigate } from 'react-router-dom';

// const Home = ()=>{
//     const navigate = useNavigate();

//   const handleApplyClick = () => {
//     navigate('/dashboard');
//   };
//     return(
//         <>
//         <div>
//             <div className="flex">
//                 <div>
//                     <h2>View Dashboard</h2>
//                     <button onClick={handleApplyClick}>Click here</button>
//                 </div>
//                 <div>
//                     <img src="https://via.placeholder.com/150" alt="Image 1"/>
//                  </div>
//              </div>
//         </div>
//         </>
//     );
// }

// export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

      const handleApplyClickForm = () => {
        navigate('/ScholarshipForm');
      };
      const navigate2 = useNavigate();

      const handleApplyClickDashboard = () => {
        navigate2('/Dashboard');
      };
    return (
        <div 
            className="bg-cover bg-center min-h-screen w-[96rem]" 
            style={{ backgroundImage: "url('your-background-image.jpg')" }}
        >
            {/* Background Gradient */}
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 bg-opacity-80">
                <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-sm uppercase tracking-widest text-gray-200">Welcome to Scholarship Hub</h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mt-4 animate-fadeIn">Your Future, Our Commitment</h2>
                    <p className="mt-4 max-w-lg mx-auto text-lg md:text-xl lg:text-2xl text-gray-100">
                        We provide opportunities for bright minds to achieve their dreams. Apply for scholarships and unlock your potential.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                    <button 
    onClick={handleApplyClickForm}
    className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300"
    style={{ width: 'fit-content' }}
>
    Apply Now
</button>

<button  
    className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-black transition duration-300"
    style={{ width: 'fit-content' }}
    onClick={handleApplyClickDashboard}
>
    View Dashboard
</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
