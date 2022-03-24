import React from "react"
export default class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="bg-slate-100 flex fixed p-1 inset-x-0 bottom-0 w-full">
                    <div className="mx-auto">
                        <p className="focus:outline-none">2020 The North. All Rights Reserved</p>
                    </div>
                    <div className="mx-auto">
                        <div className="flex">
                            <div className="flex-1">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg2.svg" alt="Twitter" />
                            </div>
                            <div className="flex-1 ml-3">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg3.svg" alt="Instagram" />
                            </div>
                            <div className="flex-1 ml-3">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg4.svg" alt="Dribble" />
                            </div>
                            <div className="flex-1 ml-3">
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/footer_with_sitemap-svg5.svg" alt="Github" />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}