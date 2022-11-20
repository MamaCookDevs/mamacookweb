import React from "react";
import "flowbite";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const slideImages = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mama-cook-c8fe0.appspot.com/o/Images%2FQuatar%20Promo.png?alt=media&token=8cd4192f-e960-49a9-918f-8ade88805383",
    caption: "",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/mama-cook-c8fe0.appspot.com/o/Images%2FMamaCook%20Promo%201.png?alt=media&token=c1c9f203-737e-47c8-8042-f03dd52ca53c",
    caption: "Slide 2",
  },
  {
    url: "https://wallpaperaccess.com/full/1155011.jpg",
    caption: "Slide 3",
  },
];

const Carousel = () => {
  return (
    <div className="slide-container h-420 w-full object-cover m-16">
      <Slide
        autoplay={true}
        slidesToScroll={1}
        duration={3000}
        indicators={true}
        arrows={false}
      >
        {slideImages.map((slideImage, index) => (
          <div className="each-slide h-420 justify-center" key={index}>
            <div
              className="h-full bg-cover flex items-end justify-center"
              style={{ backgroundImage: `url(${slideImage.url})` }}
            >
              <span className="flex mb-20 text-white text-2xl">
                {slideImage.caption}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Carousel;
