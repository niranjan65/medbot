import { useState } from "react";
import doctorImage from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import { DoctorAbout } from "./DoctorAbout";
import { Feedback } from "./Feedback";
import { useParams } from "react-router-dom";
import { doctors } from "../../assets/data/doctors";
export const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const {id} = useParams();
  console.log(doctors)
  const doctor = doctors.filter((el)=> el.id==id);
  console.log(doctor[0].photo)
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctor[0].photo} alt="" className="w-full" />
              </figure>

              <div>
                <span className="bg-[#CCFOF3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]">
                  {doctor[0].specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {doctor[0].name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" />
                    {doctor[0].avgRating}
                  </span>
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:leading-7 font-semibold text-headingColor">
                    ({doctor[0].totalRating})
                  </span>
                </div>
                <p className="text__para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                  A surgeon specialist doctor is a highly trained and skilled
                  medical professional who specializes in performing precise
                  surgical procedures in their specific field of expertise. They
                  diagnose, treat, and manage various medical conditions through
                  surgery, playing a crucial role in healthcare.
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab == "about" && "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab == "feedback" &&
                  "border-b border-solid border-primaryColor"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedbacks
              </button>
            </div>

            <div className="mt-[50px]">
              {tab == "about" && <DoctorAbout />}
              {tab == "feedback" && <Feedback />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
