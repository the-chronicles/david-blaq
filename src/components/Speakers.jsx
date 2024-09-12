import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const speakers = [
  {
    img: "/spk2.png", // Replace with actual image path
  },
  {
    img: "/spk1.png", // Replace with actual image path
  },
  //     name: "David Blaq",
  //     role: "Film Maker",
  //     specialization: "Live Production",
  //     img: "path_to_david_blaq_image", // Replace with actual image path
  //   },
];

function Speakers() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="speakers" className="h-full bg-black overflow-hidden">
      {/* <div className="carousel-container"> */}
      <div className="h-full overflow-hidden">
        <Slider {...settings}>
          {speakers.map((speaker, index) => (
            <div key={index} className="h-full">
              <img
                src={speaker.img}
                alt={speaker.name}
                className="speaker-img"
              />
              {/* <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <p>{speaker.role}</p>
                <span>{speaker.specialization}</span>
              </div> */}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 1 }}
      onClick={onClick}
    />
  );
};

export default Speakers;
