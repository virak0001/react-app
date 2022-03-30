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
                            <div className="w-full flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <p className="md:text-3xl text-xl font-bold text-gray-700">Get In Touch with Us</p>
                                <div className="md:flex  items-center mt-5">
                                    <div className="md:w-72 flex flex-col">
                                        <label className="text-left font-semibold leading-none text-gray-800">Username</label>
                                        <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-400" placeholder="Username" />
                                    </div>
                                    <div className="md:w-72 flex flex-col  md:ml-6 md:mt-0 mt-2">
                                        <label className="text-left font-semibold leading-none text-black">Email Address</label>
                                        <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-2 bg-white border rounded border-gray-400" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-5">
                                    <label className="text-left md:w-72  font-semibold leading-none text-black">Message</label>
                                    <textarea name="textbox" id="text" className="w-full h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-400 resize-none"></textarea>
                                </div>
                                <div className="flex items-center justify-center w-full">
                                    <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-indigo-700 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
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

