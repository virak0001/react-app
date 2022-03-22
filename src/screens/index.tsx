import React, { Fragment } from "react";
import Slideshow from "../components/Slide";
const posts = [
    {
        title: 'Siem Reap',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat'
    },
    {
        title: 'Komport'
    },
    {
        title: 'Kep',
        image: require('../assets/images/province/kep.png')
    },
]

export default class IndexPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Slideshow />
                <div className="w-11/12 mx-auto">
                    <strong>Where you are going?</strong>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {posts.map((item, index) => {
                            return ( 
                            <div className="w-full border rounded-lg h-60 relative" key={index}>
                                <strong>{item.title}</strong>
                                <img className="w-full h-52" src={item.image} alt="Loading..." />
                            </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        )
    }
}
