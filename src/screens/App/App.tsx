import React from 'react';
import './App.css';
import Layout from '../Default';
import background from "../../assets/images/index/bg1.png"
import background1 from "../../assets/images/index/bg.png"
import background2 from "../../assets/images/index/bg2.png"
import SimpleImageSlider from "react-simple-image-slider";
  const images = [
    { url: background },
    { url: background1 },
    { url: background2 },
  ];
function App() {
  return (
    <div className="App">
      <Layout>
      <SimpleImageSlider
        width={"100%"}
        height={"50%"}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
        autoPlayDelay={10}
      />
      </Layout>
    </div>
  );
}

export default App;
