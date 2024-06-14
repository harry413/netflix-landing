
import { MdKeyboardArrowRight } from "react-icons/md";
import '../index.css'
const Header = () => {
    return (
        <div className='header bg-no-repeat'>
            <nav
                className=" top-0 z-10  w-full max-w-full px-4 py-2 text-white bg-blend-screen  shadow-md h-max  lg:px-8 lg:py-4 ">
                <div className="flex items-center justify-between text-gray-900 ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="9.72em" height="5em" viewBox="0 0 512 138" className='w-[6.2em] md:w-[9.72em]'>
                        <path fill="#db202c" d="M340.657 0v100.203q18.54.861 36.98 2.09v21.245a1822 1822 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789 1789 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1816 1816 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848 1848 0 0 1 38.331-2.62v21.247a1816 1816 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96q-11.823 1.216-23.603 2.584L21.56 59.824v74.802q-10.8 1.406-21.56 2.936V.012h20.491zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"></path>
                        </svg>
                    <div className="flex items-center gap-1">
                        <button
                        className=" rounded-md bg-[#E50914] py-1 px-4 md:px-4 md:py-2 text-center  font-sans text-md font-semibold  text-white  hover:shadow-lg hover:bg-red-600 active:opacity-[0.85]  "
                        type="button">
                        <span>Sign In</span>
                        </button>
                    </div>
                    </div>
                </nav>
                <div className='flex flex-col items-center justify-center pb-20 md:py-20 w-full h-dvh px-10'>
                        <div className='flex flex-col items-center justify-center pt-20  gap-4'>
                        <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-black py-2'>Unlimited movies, TV shows and more</h1>
                        <h5 className='text-white text-2xl'>Watch anywhere. Cancel anytime.</h5>
                        <p className='text-white text-2xl'>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-4 gap-2 w-full '>
                            <input placeholder='Email address' type='email'  className='py-2 pl-4 pr-20 md:pr-28 border-2 lg:w-1/2 border-slate-700 bg-inherit rounded backdrop-blur-sm backdrop-opacity-50 backdrop-invert bg-black/50 ' />
                            <button
                            className="flex rounded bg-[#E50914] py-2 px-6 md:px-6 md:py-2 text-center text-sm font-sans md:text-xl font-semibold  text-white  hover:shadow-lg hover:bg-red-600 "
                            type="button">
                            <span>Get Started</span><span className='text-2xl md:text-3xl items-center font-light'><MdKeyboardArrowRight/></span>
                            </button>
                        </div>
                </div>
        </div>
    )
}


export default Header;