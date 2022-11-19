import React from "react";
import "flowbite";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4=",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbG9yfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
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
