import React from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FiTarget } from "react-icons/fi";
import { GiCrystalBars } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import Mygift from "../../Components/Gift/Gift";

const About = () => {
  return (
    <>
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-4xl mb-4 font-light text-gray-900">
              Welcome to <span className="text-green-500">Luxe Loom</span>
            </h1>
            <p className="mb-8 leading-relaxed">
              {" "}
              Luxe Loom redefines the online shopping experience for luxury home
              decor and furnishings.
            </p>
            <p className="mb-8 leading-relaxed">
              At Luxe Loom, we understand that our clientele seeks more than
              just products; they seek an experience, a lifestyle. That's why
              every item on our site is handpicked for its exceptional quality,
              exquisite design, and unparalleled craftsmanship. From luxurious
              fashion pieces to artisanal home decor, we offer a carefully
              curated selection that epitomizes elegance and refinement.
            </p>{" "}
            <p className="mb-8 leading-relaxed">
              Our website epitomizes sophistication, blending cutting-edge
              technologies and design principles to offer you a seamless and
              gratifying browsing and purchasing journey.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">
                Explore Now
              </button>
            </div>
          </div>
          <div>
            {" "}
            <Mygift />
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              Discover Our Values
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              At Luxe Loom, we transcend mere transactions; we build
              relationships. Here's what sets us apart:
            </p>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white shadow-lg rounded-lg">
                  <FiTarget className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Our Mission
                  </h2>
                  <p className="leading-relaxed text-base">
                    We are committed to delivering high-quality products and
                    exceptional customer service to our valued customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white shadow-lg rounded-lg">
                  <GiCrystalBars className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Our Vision
                  </h2>
                  <p className="leading-relaxed text-base">
                    We aim to be your trusted online destination for all your
                    shopping needs, offering an extensive range of products and
                    exceptional service.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white shadow-lg rounded-lg">
                  <AiOutlineTeam className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Our Values
                  </h2>
                  <p className="leading-relaxed text-base">
                    Integrity, quality, and customer satisfaction are the
                    cornerstones of Luxe Loom's ethos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mt-16">
            <div className="lg:w-1/2 md:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white shadow-lg rounded-lg">
                  <MdEmail className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Contact Us
                  </h2>
                  <p className="leading-relaxed text-base">
                    Questions or feedback? Reach out to us via email at
                    support@luxeloom.com or give us a call at 1-800-123-4567.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white shadow-lg rounded-lg">
                  <BsTelephone className="w-12 h-12 mb-4 text-pink-500" />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Why Luxe Loom?
                  </h2>
                  <p className="leading-relaxed text-base">
                    We meticulously curate our collection to ensure top-notch
                    quality products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
