import React from "react"
import { FaFacebookMessenger, FaPhone } from "react-icons/fa"
export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-slate-100 flex p-2 w-full">
                    <div className="mx-auto">
                        <div className="flex font-medium text-wrapper">
                            <div className="flex ml-3">
                                <FaPhone className="mt-1" />
                                <p className="ml-1">+855 99393798</p>
                            </div>
                            <div className="flex ml-3">
                                <FaFacebookMessenger className="mt-1" />
                                <p className="ml-1"> travel@basecamps.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex mt-0.5">
                            <div className="ml-3">
                                <img className="h-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg2.svg" alt="Twitter" />
                            </div>
                            <div className="ml-3">
                                <img className="h-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg3.svg" alt="Instagram" />
                            </div>
                            <div className="ml-3">
                                <img className="h-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg4.svg" alt="Dribble" />
                            </div>
                            <div className="ml-3">
                                <img className="h-5" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg5.svg" alt="Github" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}