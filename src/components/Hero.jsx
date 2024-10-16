import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeroMessage from "./HeroMessage";
import MobileMessage from "./MobileMessage";
import TopInfo from "./TopInfo";

const Hero = () => {
  // Images for the carousels
  const images1 = [
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727958948/carousel-images/tmp-2-1727959007779_g5xoil.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959308/carousel-images/tmp-3-1727959363515_bhcjg9.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016014/carousel-images/tmp-1-1728016014231_dr898f.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016148/carousel-images/tmp-2-1728016146840_b6ikd4.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016216/carousel-images/tmp-3-1728016215749_urfnyj.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016376/carousel-images/tmp-5-1728016375547_ccf3kz.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016298/carousel-images/tmp-4-1728016297858_phxav5.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959410/carousel-images/tmp-6-1727959471802_iyolrc.jpg",
  ];

  const images2 = [
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959710/carousel-images/tmp-7-1727959769839_yjnel2.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959831/carousel-images/tmp-10-1727959893362_mprgxu.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016492/carousel-images/tmp-6-1728016491623_yk1jgn.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016548/carousel-images/tmp-7-1728016548670_c0hhkq.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016656/carousel-images/tmp-11-1728016655986_uqjgqp.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016591/carousel-images/tmp-8-1728016590545_flgc4d.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016727/carousel-images/tmp-12-1728016727299_fex4kt.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959771/carousel-images/tmp-9-1727959828301_lvwk8w.jpg",
  ];

  const images3 = [
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016993/carousel-images/tmp-17-1728016993127_fl3b6s.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016935/carousel-images/tmp-16-1728016934905_ylctrn.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016878/carousel-images/tmp-15-1728016878189_ll3dh8.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016835/carousel-images/tmp-14-1728016835000_e3l3gs.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1728016785/carousel-images/tmp-13-1728016784994_gr6rrb.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959874/carousel-images/tmp-11-1727959934522_l1g8um.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727959960/carousel-images/tmp-12-1727960021444_aaljln.jpg",
    "https://res.cloudinary.com/drg9uyqf9/image/upload/v1727960022/carousel-images/tmp-13-1727960081159_ywognm.jpg",
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true, // For fading effect
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => handleSlideChange(newIndex),
  };

  // Create refs for each slider
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  // State to track the current slide index
  const [activeSlide, setActiveSlide] = useState(0);

  // Update all sliders when one slider changes
  const handleSlideChange = (index) => {
    setActiveSlide(index);
    slider1Ref.current.slickGoTo(index);
    slider2Ref.current.slickGoTo(index);
    slider3Ref.current.slickGoTo(index);
  };

  return (
    <div className="mt-0  overflow-hidden">
      <TopInfo />
      <div
        className=" md:pb-8 md:pt-4 lg:h-[25rem] md:h-[22rem]"
        style={{
          background: `linear-gradient(135deg, rgba(253, 186, 223, 0.8), rgba(187, 222, 251, 0.8), rgba(236, 239, 255, 0.8))`, // Change these to your selected colors
          backgroundSize: "400% 400%",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <span
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/drg9uyqf9/image/upload/v1727965391/carousel-images/tmp-1-1727965453168_h7x9nb.jpg')", // Replace with your texture image URL
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.2, // Adjust opacity for texture visibility
            zIndex: -1,
          }}
        ></span>
        <div className="grid md:grid-cols-2 lg:grid-cols-12 py-2">
          <div className="lg:col-span-6 mt-4 mb-2 lg:mt-[1rem] lg:h-[4rem] px-2 md:px-4 md:py-4 md:ml-2 grid grid-cols-3 gap-2 bg-gradient-to-l from-rose-300 to-rose-400 w-full p-1 shadow-lg flex-grow rounded-sm ">
            {/* First carousel */}
            <div className="w-full h-auto px-1 pb-6 bg-purple-200 rounded-sm place-content-center">
              <Slider ref={slider1Ref} {...settings}>
                {images1.map((image, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center">
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-28 lg:h-[16rem] md:h-40"
                      />
                      <span className="leading-tight text-purple-500 text-xs font-bold text-center mt-2">
                        Best Offers
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Second carousel */}
            <div className="w-full h-auto px-1 pb-6 bg-orange-200 rounded-sm place-content-center">
              <Slider ref={slider2Ref} {...settings}>
                {images2.map((image, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center">
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-28 md:h-40 lg:h-[16rem]"
                      />
                      <span className="text-orange-500 leading-tight text-xs font-bold text-center mt-2">
                        Most Loved
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Third carousel */}
            <div className="w-full h-auto px-1 pb-6 bg-gray-200 rounded-sm place-content-center">
              <Slider ref={slider3Ref} {...settings}>
                {images3.map((image, index) => (
                  <div key={index}>
                    <div className="flex flex-col items-center">
                      <img
                        src={image}
                        alt={`Slide ${index}`}
                        className="w-full h-28 md:h-40 lg:h-[16rem]"
                      />
                      <span className="text-gray-500 leading-tight text-xs font-bold text-center mt-2">
                        Best Selling
                      </span>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="md:mt-[2rem] lg:mt-[4rem] lg:col-span-6">
            <HeroMessage />
          </div>
        </div>

        <div className=" md:hidden pt-1 grid-cols-none shadow-lg px-2 text-center rounded-md">
          <h1
            className="rounded-sm p-2 text-primary-content font-bold "
            style={{
              background: `linear-gradient(135deg, rgba(253, 186, 223, 0.8), rgba(187, 222, 251, 0.8), rgba(236, 239, 255, 0.8))`, // Change these to your selected colors
              backgroundSize: "400% 400%",
              position: "relative",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            <div className="mb-4">
              <MobileMessage />
            </div>

            <span
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/drg9uyqf9/image/upload/v1727965391/carousel-images/tmp-1-1727965453168_h7x9nb.jpg')", // Replace with your texture image URL
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.2, // Adjust opacity for texture visibility
                zIndex: -1,
              }}
            ></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
