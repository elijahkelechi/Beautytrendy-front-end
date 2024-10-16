import React from "react";

const About = () => {
  return (
    <div className="bg-stone-50 pt-28 -z-10   md:pt-24">
      {/* <section className="abtHeading w-full bg-rose-50">
        <h1 className="md:font-semibold font-mono md:text-3xl  px-24 md:px-44  leading-tight text-center font-semibold text-pink-900 tracking-wider">
          Why We<span className="block">Love Sonna</span>
        </h1>
      </section> */}

      <section className="relative img-content px-0">
        <div>
          <img
            alt="abt image"
            src="https://res.cloudinary.com/drg9uyqf9/image/upload/v1727797903/sonnatrendy%20product%20images/tmp-5-1727797903080_csufum.jpg"
            className="image w-full h-auto"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="md:mb-4 lg:mb-48 text-center text-stone-50 bg-black bg-opacity-50 p-2 md:w-full md:py-14 lg:w-full lg: lg:pt-4 md:pt-2 md:rounded-lg">
            <div className=" lg:mb-4 lg:mt-1">
              <h1 className="text-2xl font-bold leading-tight mt-4">
                SonnaTrendy <span className="block">Online Store</span>
              </h1>
              <p className="text-center mt-4 text-lg leading-normal hidden md:block">
                Learn more about our brand and mission. We are passionate about
                providing quality products.
              </p>
              <p className="mt-4 text-lg leading-normal md:hidden">
                Learn more about our brand and mission. We are passionate about
                providing quality products.
              </p>
            </div>
            <h1 className="hidden md:block bg-info w-full text-primary-content text-center text-xl font-bold leading-tight mt-4">
              We are the best
            </h1>

            <div className="hidden md:flex place-content-center mt-4 w-full">
              <div>
                <h1 className="hidden md:block text-center text-xl font-bold leading-tight mt-4">
                  Offers & Delivery
                </h1>
                <p className="mt-2 text-center text-lg leading-normal w-96">
                  Unlock radiant skin with our beauty cream! Hydrate,
                  rejuvenate, and achieve a glowing complexion. Perfect for all
                  skin types!
                </p>
              </div>
              <div>
                <h1 className="hidden md:block text-center text-xl font-bold leading-tight mt-4">
                  Meet Sonna
                </h1>
                <video
                  src="https://res.cloudinary.com/drg9uyqf9/video/upload/v1728104949/product%20videos/tmp-2-1728104939428_v9tbc1.mov"
                  controls
                  className="border-stone-400 border-2 rounded-sm w-96 mt-4 "
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="phone-display-only written-content px-2 md:hidden mt-2">
        <div>
          <h1 className="bg-info text-primary-content text-center text-xl font-bold leading-tight">
            Meet Sonna!
          </h1>

          <p className="mt-2 text-center text-primary-content text-lg leading-normal md:hidden">
            To Unlock radiant skin with our beauty cream! Hydrate, rejuvenate,
            and achieve a glowing complexion. Perfect for all skin types!
          </p>
          <video
            src="https://res.cloudinary.com/drg9uyqf9/video/upload/v1727841854/product%20videos/tmp-2-1727841844847_ohcgp6.mov"
            loop
            controls
            className="border-stone-400 border-2 rounded-sm bg-gray-900 w-full"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-center text-primary-content text-xl font-bold leading-tight">
            Offers and Delivery
          </h1>
        </div>
        <h1 className="text-center mt-2 text-primary-content text-sm font-bold leading-tight">
          At Sonna Trendy, we provide luxurious body creams to elevate your
          self-care routine.
        </h1>
        <div className="mt-3">
          <h1 className=" mt-2 text-primary-content text-sm font-bold leading-tight">
            Special Offers:
          </h1>
          <ul>
            <li>
              Welcome Discount: Get 15% off your first order with SonnaTrendy
            </li>
            <li>
              Bundle & Save: Enjoy up to 20% off when you buy multiple products.
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <h1 className=" mt-2 text-primary-content text-sm font-bold leading-tight">
            Delivery Information:
          </h1>
          <ul>
            <li>Free delivery on orders over NGN 5,000.</li>
            <li>
              Standard delivery in 3-5 business days, with expedited options
              available at
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
