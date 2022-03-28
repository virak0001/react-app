import React from "react";
// export default function Tours() {
    const Tours = () => {
    // const sea =  require('../../assets/images/sea.jpg')
    // const sea = require('../../assets/images/yaklorm.png');
    return (
        <>
            <div className="bg-gray-100 ">
            <div className="w-full​ flex flex-col justify-center">
                    <br />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9​">Beautiful Place in Cambodia</h1>​<br />
                    <p className="font-normal text-base leading-6 text-gray-600 ">
                    Wondering where to go in Cambodia that is popular yet peaceful. Consider the Siem Reap river and the rice paddies make this town much more than just a stopover to witness the Angkor temples. Siem Reap has vibrant night markets, silk farms, traditional craft shops, fun road tours through rice paddies, bird sanctuaries, fishing villages and boat tours on Tonle Sap Lake
                         </p>
                </div>

                <div className="mx-auto container py-8">
                    <div className="flex flex-wrap items-center lg:justify-between justify-center">
                        {/* Card 1 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://alldaychic.com/wp-content/uploads/2013/06/Path-To-the-Island.jpg" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Ta Tai</h2> 
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Ta Tai waterfall is a semi-natural site located in Ta Tai village about 20 kilometers east of Koh Kong provincial</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://bizimages.withfloats.com/actual/5ad1ada7fcd2020b4c4bed54.jpg" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Royal Palace</h2> 
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The Royal Palace of Cambodia is a complex of buildings which serves as the royal residence of the King of Cambodia</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 3  */}
                        <div className="mx-2 w-72 lg:mb-0 mb-8">
                            <div>
                                <img src="https://media.timeout.com/images/105263091/image.jpg" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Preah Vihear</h2> 
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">The Preah Vihear temple is a masterpiece of Khmer creative genius, with a landscape illustrating a significant stage in human history</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 4  */}
                        <div className="w-72 mx-2 lg:mb-0 mb-8">
                            <div>
                                <img src="https://www.checkoutsam.com/wp-content/uploads/2018/05/koh-rong-cambodia-beaches.jpg" className="w-full h-44" />
                            </div>
                            <div className="bg-white">
                                <div className="p-4">
                                    <div className="flex items-center">
                                        <h2 className="text-lg font-semibold">Koh Rong</h2>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">Koh Rong can compete   turquoise-green waters make this one of the most beautiful islands</p>
                                </div>
                            </div>
                        </div>
                        {/* Card 4 Ends */}
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tours;