import './index.css'

const Slideshow = () => {
    const image = require('../../assets/images/index/homepage.webp')
    return (
        <div className="overflow-hidden">
            <div className="inline-block w-full h-full">
                <div
                    className="inline-block w-full h-full relative"
                >
                    <div className="absolute w-full z-50 mt-24 text-white font-medium">
                        <div className="w-4/5 mx-auto">
                            <p className="text-7xl">AUTHENTIC TRAVEL</p>
                            <p className="mt-5 text-5xl">Global Basecamps is a specialized tour operator that provides unique access to destinations worldwide.</p>
                        </div>
                    </div>
                    <img className="w-full" src={image} alt="Not found" />
                </div>
            </div>
        </div>
    );
}

export default Slideshow

