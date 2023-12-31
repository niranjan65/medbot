
import heroImg03 from "../assets/images/Doctor.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link, NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { About } from "../components/About/About";
import { Services } from "../components/Services/Services";
import { Feature } from "../components/Feature/Feature";
import { OurDoctors } from "../components/OurDoctors/OurDoctors";
import {BsChatText} from 'react-icons/bs'
import Treatment from "./Treatment";
import Choose from "./Choose";
import Faq from "./Faq";
import Testimonial from "./Testimonial";

export const Home = () => {
  return (
    <div>
      {/**hero section start */}

      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col flex-col-reverse lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text_para">
                  Welcome to our website, where we make booking doctors easy and
                  hassle-free. Take control of your health by scheduling
                  appointments with top-notch healthcare professionals in just a
                  few clicks. With our user-friendly platform and real-time
                  availability updates, finding the right doctor has never been
                  simpler. Experience the convenience of accessing quality
                  healthcare at your fingertips and embark on your journey to a
                  healthier, happier life today.{" "}
                </p>
                <NavLink to="https://0471-2405-201-8022-715e-855d-2758-6818-e56.ngrok-free.app/"><button className="btn">Request an Appointment</button></NavLink>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-primaryColor">
                    30+
                  </h2>
                  <p className="text_para">Years of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-primaryColor">
                    15+
                  </h2>
                  <p className="text_para">Clinic Locations</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-primaryColor">
                    100%
                  </h2>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/**hero Content */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg03} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/**hero section end */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text_para text-center">
                  World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the Clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text_para text-center">
                  World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the Clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <NavLink to="https://128c-2409-40e0-100d-581f-d1f3-4cb4-34d9-698.ngrok-free.app"><h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2></NavLink>
                <p className="text_para text-center">
                  World-class care for everyone. our health System offers
                  unmatched, expert health care. From the lab to the Clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Treatment/>
      <About />
      <Services/>
      <Choose/>
      <Feature/>
      <OurDoctors/>
      <Faq/>
      <Testimonial/>
      <div className="fixed btn bottom-4 right-8 lg:bottom-[20px] lg:right-[20px] cursor-pointer flex gap-2 items-center z-10">
        <BsChatText/>
        <a href="https://128c-2409-40e0-100d-581f-d1f3-4cb4-34d9-698.ngrok-free.app"><button className="">Chat with us</button></a>
      </div>
    </div>
  );
};
