import React from "react";
import './index.css'
import bg1 from '../../assets/images/index/bg.png'
import bg2 from '../../assets/images/index/bg1.png'
import bg3 from '../../assets/images/index/bg2.png'
const Slideshow = () => {
    const delay = 20000;
    const afterDelay = delay + 3000
    const [index, setIndex] = React.useState(0);
    const impages = [bg1, bg2, bg3]
    React.useEffect(() => {
        setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === impages.length - 1 ? 0 : prevIndex + 1
                ),
            delay,
        );

        setTimeout(() => addClass(), delay)
        setTimeout(() => removeClass(), afterDelay)
    });
    function addClass() {
        var element = document.getElementById("fade");
        element?.classList.add("fade");
    }
    function removeClass() {
        var element = document.getElementById("fade");
        element?.classList.remove("fade");
    }
    return (
        <div className="overflow-hidden">
            <div className="inline-block w-full h-96">
                <div
                    className="inline-block w-full h-full relative"
                >
                    <div className="flex">
                    <button type="button" className="absolute top-2/4 z-50 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <button type="button" className="absolute top-2/4 z-50 text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    </div>
                    <img id="fade" className="w-full hover:opacity-70" src={impages[index]} alt="Not found" />
                </div>
            </div>
        </div>
    );
}

export default Slideshow
