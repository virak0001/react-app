import React from "react";
import IMAGES from "../../contrants/slide";
import './index.css'

const Slideshow = () => {
    const delay = 20000;
    // const afterDelay = delay + 3000
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
                ),
            delay,
        );

        // setTimeout(() => addClass(), delay)
        // setTimeout(() => removeClass(), afterDelay)
    });
    // function addClass() {
    //     var element = document.getElementById("fade");
    //     element?.classList.add("fade");
    // }
    // function removeClass() {
    //     var element = document.getElementById("fade");
    //     element?.classList.remove("fade");
    // }
    return (
        <div className="overflow-hidden">
            <div className="inline-block w-full h-full">
                <div
                    className="inline-block w-full h-full relative"
                >
                    <div className="absolute w-full z-50 mt-24">
                        <div className="w-4/5 mx-auto">
                            <p className="text-5xl">{IMAGES[index].title}</p>
                            <p>{IMAGES[index].description}</p>
                        </div>
                    </div>
                    <div className="absolute w-full z-50  mt-24">
                        <div className="w-4/5">
                            <p>{IMAGES[index].description}</p>
                        </div>
                    </div>
                    <img className="w-full" src={IMAGES[index].url} alt="Not found" />
                </div>
            </div>
        </div>
    );
}

export default Slideshow

