import { Fragment } from "react";
const ContactUs = () => {
    return (
        <Fragment>
            <div className="py-4 lg:py-8  relative">
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container">
                        <div className="md:w-72 relative bg-gray-100 lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold tracking-wider text-gray-800">We’re Here</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">We believe arts are at the heart of a vital society.</h2>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Address</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">BP 511, Phum Tropeang Chhuk (Borey Sorla) Sangtak, Street 371, Phnom Penh</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Contact</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+855 23 4567890 (Phone)</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">+855 10 4567890 (Phone)</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-indigo-700 font-semibold">Email</h2>
                                            <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider mt-2">group3@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2  xl:pt-10 lg:pl-24">
                            <div className="w-full flex items-center justify-center my-12">
                                <div className="absolute top-10 bg-white shadow rounded py-12 lg:px-28 px-8">
                                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">Get In Touch With Us</p>
                                    <div className="md:flex items-center mt-8">
                                        <div className="md:w-72 flex text-left flex-col">
                                            <label className="text-base font-semibold leading-none text-gray-800">Name</label>
                                            <input type="name" className="text-base text-left leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400" placeholder="Name" />
                                        </div>
                                        <div className="md:w-72 flex text-left flex-col md:ml-6 md:mt-0 mt-4">
                                            <label className="text-base font-semibold leading-none text-gray-800">Email Address</label>
                                            <input type="email" className="text-base text-left leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full flex flex-col mt-5">
                                            <label className="text-base text-left font-semibold leading-none text-gray-800">Message</label>
                                            <textarea role="textbox" className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-400 resize-none" placeholder="Please input your Message" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center w-full">
                                        <button className="mt-5 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}
export default ContactUs

