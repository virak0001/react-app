import React from "react"
export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-slate-100 flex absolute p-5 inset-x-0 bottom-0 w-full">
                    <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                        <p className="focus:outline-none">2020 The North. All Rights Reserved</p>
                    </div>
                    <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-between ">
                            <li className="text-gray-800 hover:text-gray-900 mb-4 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Terms of service</a>
                            </li>
                            <li className="text-gray-800 hover:text-gray-900 mb-4 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li className="text-gray-800 hover:text-gray-900 mb-4 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Security</a>
                            </li>
                            <li className="text-gray-800 hover:text-gray-900 mb-4 sm:mb-0">
                                <a className="focus:outline-none focus:underline" href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-11/12 xl:w-1/6 lg:w-1/6 sm:w-11/12 mx-auto lg:mx-0 xl:mx-0 mb-6 lg:mb-0 xl:mb-0 mt-8 lg:mt-8 xl:mt-0">
                        <div className="flex justify-start sm:justify-start xl:justify-end space-x-6 pr-2 xl:pr-0 lg:pr-0 md:pr-0 sm:pr-0">
                            <div>
                                <a aria-label="Twitter" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg2.svg" alt="Twitter" />
                                </a>
                            </div>
                            <div>
                                <a aria-label="Instagram" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg3.svg" alt="Instagram" />
                                </a>
                            </div>
                            <div>
                                <a aria-label="Dribble" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg4.svg" alt="Dribble" />
                                </a>
                            </div>
                            <div>
                                <a aria-label="Github" role="link" href="javascript:void(0)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg5.svg" alt="Github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}