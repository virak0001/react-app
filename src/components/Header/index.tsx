import React from "react"
import Solution from "../info/Solution"
import { FaMapMarkerAlt } from "react-icons/fa"
type Form = {
    isSolution: Boolean
}
export default class Header extends React.Component<{}, Form> {
    constructor(props: any) {
        super(props);
        this.openSolution = this.openSolution.bind(this)
        this.state = { isSolution: false }
    }
    openSolution() {
        this.setState(state => ({
            isSolution: !state.isSolution
        }));
    }
    render() {
        return (
            <React.Fragment>
                <div className="relative">
                    <div className="bg-white mx-auto px-2 sm:px-6 border-2 pl-5">
                        <div className="flex justify-between m-auto items-center py-2 md:justify-start md:space-x-10 text-black lg:w-full xl:w-7/12">
                            <div className="flex justify-start lg:w-0 flex-1">
                                <FaMapMarkerAlt className="mt-1"/>
                                <strong className="ml-3 font-sans">Khmer Culture</strong>
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
                                <div className="relative">
                                    <div onClick={this.openSolution} className="group inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-expanded="false">
                                        <span>Home</span>
                                        <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    { this.state.isSolution? <Solution /> : ''}

                                </div>

                                <a href="#" className="text-base font-medium  hover:text-gray-900"> Tours </a>
                                <a href="#" className="text-base font-medium  hover:text-gray-900"> Explore </a>
                                <a href="#" className="text-base font-medium  hover:text-gray-900"> About Us </a>
                                <a href="#" className="text-base font-medium  hover:text-gray-900"> Contact </a>
                            </nav>
                            <div className="hidden lg:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="#" className="whitespace-nowrap text-base font-medium  hover:text-gray-900"> Sign in </a>
                                <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        )
    }
}