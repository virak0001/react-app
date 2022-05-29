import { Fragment, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import SignIn from "../Loggin";
import { useNavigate  } from 'react-router-dom';
import API from 'api';
async function register(credentials: any) {
    return API.post('auth/signup', credentials)
}
const SignUp = () => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
      const user = await register({
        username,
        password,
        email,
      });
      if(user.data) {
        return navigate('/sign-in')
      }
    }
    return (
        <Fragment>
            <div className="bg-indigo-50">
                <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                    <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                        <div>
                            <h2 className="text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                        </div>
                        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                            <input type="hidden" name="remember" defaultValue="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <br />
                                <div>
                                    <label htmlFor="username" className="sr-only">Username</label>
                                    <input onChange={e => setUserName(e.target.value as any)} id="username" name="username" type="text" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
                                </div>
                                <br />
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input onChange={e => setEmail(e.target.value as any)} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                                </div>
                                <br />
                                <br />
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input onChange={e => setPassword(e.target.value as any)} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                </div>
                            </div>
                            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                                Submit
                            </button>
                            <div className="flex">
                                <div className="flex items-center">
                                    <button className="mt-2 w-full inline-flex justify-center rounded-md border-none shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-white-500 sm:mt-0 focus:outline-none sm:ml-0 sm:w-auto sm:text-sm" ><BsFacebook className="mt-1" /> &nbsp;Facebook</button>
                                </div>
                                <div className="text-sm flex items-center">
                                    <button className="mt-2 w-full inline-flex justify-center rounded-md border-none shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-black hover:bg-white-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" ><FcGoogle className="mt-1" />&nbsp;Google</button>
                                </div>
                                <div className="text-sm">
                                    <button className="ml-2 mt-2"><a href="sign-in" className="font-medium text-indigo-600 hover:text-indigo-500"><u>Back to Home</u></a></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default SignUp

