import React from 'react'

const Footer = () => {
  return (
   <footer className="bg-black">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <ul className="text-white dark:text-gray-400 font-sm">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">FAQ</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Investor Relations</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Speed Test</a>
                </li>
            </ul>
        </div>
        <div>
            
            <ul className="text-white dark:text-gray-400 font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Help Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Jobs</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Cookies Preference</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Legal Notice</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white dark:text-gray-400 font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Acount</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Ways To Watch</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Corparate Information</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Only On Netflix</a>
                </li>
            </ul>
        </div>
        <div>
            <ul className="text-white dark:text-gray-400 font-sm">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Media Center</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Term Of Use</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">About Us</a>
                </li>
            </ul>
        </div>
    </div>
    </div>
</footer>
  )
}

export default Footer