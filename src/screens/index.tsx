import React, { Fragment } from "react";
import './index.css'
import Slideshow from "../components/Slide";
import Explore from "./explore";
import ContactUs from "./contact-us";
const posts = [
    {
        title: 'Siem Reap',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/pursat.png')
    },
    {
        title: 'Komport',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/komport.png')
    },
    {
        title: 'Kep',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/kep.png')
    },
    {
        title: 'Siem Reap',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/pursat.png')
    },
    {
        title: 'Komport',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/komport.png')
    },
    {
        title: 'Kep',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/kep.png')
    },
    {
        title: 'Siem Reap',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/pursat.png')
    },
    {
        title: 'Komport',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/komport.png')
    },
    {
        title: 'Kep',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/kep.png')
    },
    {
        title: 'Siem Reap',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/pursat.png')
    },
    {
        title: 'Komport',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/komport.png')
    },
    {
        title: 'Kep',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/kep.png')
    },
    {
        title: 'Siem Reap',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/siemreap.png')
    },
    {
        title: 'Pursat',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/pursat.png')
    },
    {
        title: 'Komport',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/komport.png')
    },
    {
        title: 'Kep',
        description: 'AUSTRALIA TOURS OUR TRIPS TO AUSTRALIA MEAN OPEN SPACES AND EPIC TRAVEL',
        image: require('../assets/images/province/kep.png')
    },
]

const logo = require('../assets/images/logo.jpg')

export default class IndexPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Slideshow />
                <div>
                    <img src={logo} alt="Cannot found!" className="mx-auto" />
                    <div className="w-5/6 mx-auto">Cambodia culture (including many others). There, it was argued that by removing the traditional culture of slavery, the indigenous peoples of Bolivia became better able to communicate without having to communicate with the west. As a consequence of this practice, Bolivia became culturally and linguistically more integrated with Western people, as part of an "all or nothing" mentality, since this culture is in fact "good" only through a few exceptions. It is, of course, the case that the traditional culture of Bolivian history provides a good example. For example, there are thousands of pages of recorded Bolivian history, many of them written before the Bolivian revolution of 1911-12.

                        In addition, Bolivia is home to a much larger degree of Native American culture than any other country in the world. The Bactua language, a local language that came first to the Americas in the late 16th century, was spoken in Bolivia, most notably in the Andes. Many Bolivian and Canadian cultures, from English to ancient Indian language to Spanish, have been spoken by indigenous peoples in Bolivia. It is interesting to note, at the same time, that this was not always the case: in all other countries of the Americas, the languages were never fully recognized, never accepted by the authorities of their respective territory, and never became culturally integrated with the peoples who lived there, but they all share a common culture.

                        With this in mind, it is crucial to understand</div>
                    <div className="mt-10 font-semibold">FEATURED DESTINATIONS</div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-1">
                        {posts.map((item, index) => {
                            return (
                                <div className="w-full h-60 css_style rounded"  key={index} >
                                    <img className="w-full h-full object-cover card_style rounded" src={item.image} alt="Loading..." />
                                    <div className="text-white text____style">
                                        <p className="title__text">{item.title}</p>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <p className="text-3xl mt-10">Exploring new experiencs</p>
                <Explore />
                <p className="text-3xl mt-10">Contact us</p>
                <ContactUs />
            </Fragment>
        )
    }
}
