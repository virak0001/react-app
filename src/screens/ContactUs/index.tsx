/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react/jsx-no-undef */
import { Fragment } from "react";
const ContactUs = () => {
    return (
        <Fragment>
            {/* <div className="w-full flex items-center justify-center my-12">
                    <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
                        <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Get In Touch with Us</p>
                        <div className="md:flex items-center mt-12">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="md:w-72 flex flex-col">
                                <label className="text-base font-semibold leading-none text-gray-800">Company name</label>
                                <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                            </div>
                            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">Country</label>
                                <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                            </div>
                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="text-base font-semibold leading-none text-gray-800">Message</label>
                                <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                            </div>
                        </div>
                        <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                        <div className="flex items-center justify-center w-full">
                            <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                        </div>
                    </div>
                </div> */}
            {/* <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="w-full flex items-center  justify-center my-12">
                        <div className="absolute top-40 bg-gray-100 shadow rounded py-12 lg:px-28 px-8">
                            <p className="md:text-3xl text-xl font-bold text-gray-700">Get In Touch with Us</p>
                            <div className="md:flex items-center mt-5">
                                <div className="md:w-72 flex flex-col">
                                    <label className="text-left font-semibold leading-none text-gray-800">Username</label>
                                    <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-200" placeholder="Username" />
                                </div>
                                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-2">
                                    <label className="text-left font-semibold leading-none text-black">Email Address</label>
                                    <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-200" placeholder="Email" />
                                </div>
                            </div>
                            <div>
                                <div className="w-full flex flex-col mt-6">
                                    <label className="font-semibold text-left text-gray-800">Message</label>
                                    <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-200 resize-none" defaultValue={""} placeholder="Please Input Message" />
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="w-full flex items-center  justify-center my-12">
                        <div className="absolute top-40 bg-gray-100 shadow rounded py-12 lg:px-28 px-8">
                            <div className="w-11/12 mx-auto mt-5 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-12 px-28 bg-white dark:bg-gray-800 rounded-md">
                                <div>
                                    <p className="text-lg text-gray-800 dark:text-gray-100 font-semibold pb-3">Automatically Update My Subscription</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 pb-3 font-normal">You can cancel the subscription at any time However, when the license subscription will be cancelled, you will no longer be able to receive emails or updates.</p>
                                    <div className="w-12 h-6 cursor-pointer rounded-full relative shadow-sm">
                                        <input type="checkbox" name="toggle" id="toggle1" className="focus:outline-none checkbox w-4 h-4 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                                        <label htmlFor="toggle1" className="toggle-label bg-gray-200 block w-12 h-6 overflow-hidden rounded-full bg-gray-300 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="py-4 lg:py-8  relative">
                <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-2/5 lg:h-full w-full lg:w-1/2 absolute inset-0 object-cover object-center xl:block hidden" alt="map" />
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                            <img src="https://cdn.tuk.dev/assets/templates/radian/Back_Image.png" className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden" alt="map" />
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">Office #13, NSTP, NUST University H-12 Sector, Islamabad</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 051 4567890 (Phone)</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+92 123 4567890 (Cell)</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">

                                <p className="md:text-3xl text-xl font-bold text-gray-700">Get In Touch with Us</p>
                                <div className="md:flex items-center mt-5">
                                    <div className="md:w-72 flex flex-col">
                                        <label className="text-left font-semibold leading-none text-gray-800">Username</label>
                                        <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-400" placeholder="Username" />
                                    </div>
                                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-2">
                                        <label className="text-left font-semibold leading-none text-black">Email Address</label>
                                        <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-400" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="w-full mr-4">
                                    <div className="w-full flex flex-col mt-6">
                                        <label className="font-semibold text-left text-gray-800">Message</label>
                                        <textarea tabIndex={0} aria-label="leave a message" role="textbox" className="w-full h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-400 resize-none" defaultValue={""} placeholder="Please Input Message" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default ContactUs

