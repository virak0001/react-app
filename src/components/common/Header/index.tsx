import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToken from "useToken";
import userService from 'api';
const Header = () => {
    const logo = require('../../../assets/images/logo.jpg')
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { accessToken } = useToken();
    let navigate = useNavigate();
    function logout() {
        localStorage.removeItem('token')
        userService.post('logout')
        navigate('/sign-in')
        window.location.reload()
    }
    useEffect(() => {
       if(accessToken) {
           setIsLoggedIn(true)
       }
    }, [accessToken]);
    
    return (
        <>
            <div className="relative">
                <div className="bg-white mx-auto px-2 sm:px-6 border-2 pl-5">
                    <div className="flex justify-between m-auto items-center py-2 md:justify-start md:space-x-10 text-black">
                        <div className="flex justify-start lg:w-0 flex-1" onClick={() => {navigate(`/`)}}>
                            <img src={logo} alt='cannot found' className="h-20 w-27" />
                        </div>
                        <div className="-mr-2 -my-2 lg:hidden">
                            <button type="button" className="rounded-md p-2 mg:right inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden lg:flex space-x-10">
                            <a href="tours" className="text-base font-medium"> Tours </a>
                            <a href="explore" className="text-base font-medium"> Explore </a>
                            <a href="about-us" className="text-base font-medium"> About Us </a>
                            <a href="contact-us" className="text-base font-medium"> Contact </a>
                            { isLoggedIn? <a href="users" className="text-base font-medium"> User </a> : `` }
                        </nav>
                        <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                            { !isLoggedIn? <><a href="sign-in" className="whitespace-nowrap text-base font-medium"> Sign in </a><a href="sign-up" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a></>
                            : <p onClick={logout} className="whitespace-nowrap text-base font-medium cursor-pointer"> Logout </p> }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
