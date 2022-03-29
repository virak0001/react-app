import React, { Fragment } from "react";
const AboutUs = () => {

    const virak =  require('../../assets/images/index/virak.png')
    const sokhorn =  require('../../assets/images/index/sokhorn.jpg')
    const chanly =  require('../../assets/images/index/ly.jpg')
    return (
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                    Today, tourism and manufacturing are booming. Cambodia is becoming one of the travel destinations in Asia and the garment industry represents the largest portion of Cambodia's manufacturing sector, accounting for 80% of the country's exports.
Yet in the countryside poverty is still widespread. the Cambodians being very proud and hardworking, do whatever it takes to make ends meet. But many families in the rural areas earn less than $2 per day and cannot afford to build their own drinking water wells or even to buy uniforms to send their children to school. 
                         </p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8  ">
                    <div className="grid md:grid-cols-3 sm:grid-cols- grid-cols-1 lg:gap-6 shadow-lg rounded-md">
                        <div className="p-4 pb-6 flex justify-center flex-col  gap-3 ">
                             <img className=" block" src={virak} alt="Image Not Found" />
                                    <p className="font-medium text-xl leading-5 text-gray-800 mt-4">RAN VIRAK</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col gap-3 ">
                            <img className="block" src={sokhorn} alt="Image Not Found" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">NHOR SOKHORN</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col gap-3 ">
                            <img className="block" src={chanly} alt="Image Not Found" />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">TOUCH CHANLY</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;
