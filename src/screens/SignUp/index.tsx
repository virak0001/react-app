/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-undef */
import { Fragment } from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc"
const SignUp = () => {
    return (
        <Fragment>
            {/* <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12"> */}
            <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                {/* <div className=" flex items-center justify-center py-6 px-4 sm:px-4 lg:px-6"> */}
                {/* <div className="max-w-md w-full space-y-4"> */}
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                </div>
                <form className="mt-6 space-y-4" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="firstname" className="sr-only">Firstname</label>
                            <input id="firstname" name="firstname" type="text" autoComplete="firstname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Firstname" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="lastname" className="sr-only">Lastname</label>
                            <input id="lastname" name="lastname" type="text" autoComplete="lastname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lastname" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="c-password" className="sr-only">Confirm Passord</label>
                            <input id="c-password" name="c-password" type="text" autoComplete="c-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                        Submit
                    </button>

                    {/* <div className="flex justify-between">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-0 sm:w-auto sm:text-sm">Submit</button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-0 sm:w-auto sm:text-sm">Cancel</button>
                        </div> */}
                    <div className="flex ml-10">
                        <div className="flex items-center">
                            <button className="mt-2 w-full inline-flex justify-center rounded-md border-none shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-white-500 sm:mt-0 focus:outline-none sm:ml-0 sm:w-auto sm:text-sm" ><BsFacebook className="mt-1" /> &nbsp;Facebook</button>
                        </div>
                        <div className="text-sm flex items-center">
                            <button className="mt-2 w-full inline-flex justify-center rounded-md border-none shadow-sm px-4 py-2 bg-gray-200 text-base font-medium text-black hover:bg-white-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" ><FcGoogle className="mt-1" />&nbsp;Google</button>
                        </div>
                        <div className="text-sm">
                            <button className="ml-3 mt-2"><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"><u>Back to Home Page</u></a></button>
                        </div>
                    </div>
                </form>
                {/* </div> */}
                {/* </div> */}
            </div>
            {/* </div> */}
            {/* 
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" >
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
                    <span className="hidden sm:inline-block sm:h-screen" aria-hidden="true">​</span>
                    <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-4 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="max-w-md w-full space-y-8">
                                    <div>
                                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
                                    </div>
                                    <form className="mt-6 space-y-4" action="#" method="POST">
                                        <input type="hidden" name="remember" defaultValue="true" />
                                        <div className="rounded-md shadow-sm -space-y-px">
                                            <div>
                                                <label htmlFor="firstname" className="sr-only">Firstname</label>
                                                <input id="firstname" name="firstname" type="text" autoComplete="firstname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Firstname" />
                                            </div>
                                            <br />
                                            <div>
                                                <label htmlFor="lastname" className="sr-only">Lastname</label>
                                                <input id="lastname" name="lastname" type="text" autoComplete="lastname" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Lastname" />
                                            </div>
                                            <br />
                                            <div>
                                                <label htmlFor="email" className="sr-only">Email</label>
                                                <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email" />
                                            </div>
                                            <br />
                                            <div>
                                                <label htmlFor="c-password" className="sr-only">Confirm Passord</label>
                                                <input id="c-password" name="c-password" type="text" autoComplete="c-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
                                            </div>
                                            <br />
                                            <div>
                                                <label htmlFor="password" className="sr-only">Password</label>
                                                <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
                                            </div>
                                        </div>
                                        <div>
                                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm">Submit</button>
                                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:ml-5 sm:w-auto sm:text-sm">Cancel</button>
                                        </div>
                                        <div className="flex justify-between">
                                            <div className="flex items-center">
                                                <button><BsFacebook /></button>
                                            </div>
                                            <div className="text-sm">
                                                <BsGoogle />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </Fragment>
    )
}
export default SignUp

