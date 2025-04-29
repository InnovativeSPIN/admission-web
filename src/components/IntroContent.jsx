import {React,useState} from 'react'
import collegeVideo from '../assets/main/collegedrone.mp4';
import { IoArrowBack } from "react-icons/io5";
//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {memorialEvents,placements,culturals,Sports,dept} from "./constantsIntro"

const IntroContent = ({ onBack }) => {
    const [activeSection, setActiveSection] = useState('events');
  return (
    <>
      <div className="bg_video bg_vide_2">
        <video autoPlay muted loop playsInline>
          <source src={collegeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <section className="main_intro">
      
        <div className='main_intro_content'>
            <div className="main_intro_top">
            {
              activeSection === "events" && (
                <>
                <div className='intro_content_head'>
          <h2>
          memorial events
          </h2>
        </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               autoplay={{ delay: 3000 }}
               loop={true}
               breakpoints={{
                 640: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 3 },
               }}
             >
               {memorialEvents.map((con, id) => (
                 <SwiperSlide key={id}>
                   <div className="college_achievement_card ">
                     {con.img && (
                       <img src={con.img} alt={`college_Achievement ${id + 1}`} className="college_achievement_img slider_img" />
                     )}
                     <p className="college_achievement_text">{con.name}</p>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
             </>
              )

              
            }
            {
              activeSection === "dept" && (
                <>
                <div className='intro_content_head'>
          <h2>
          Science and Humanities
          </h2>
        </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               autoplay={{ delay: 3000 }}
               loop={true}
               breakpoints={{
                 640: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 3 },
               }}
             >
               {dept.map((con, id) => (
                 <SwiperSlide key={id}>
                   <div className="college_achievement_card ">
                     {con.img && (
                       <img src={con.img} alt={`college_Achievement ${id + 1}`} className="college_achievement_img slider_img" />
                     )}
                     <p className="college_achievement_text">{con.name}</p>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
             </>
              )

              
            }
            {
              activeSection === "culturals" && (
                <>
                <div className='intro_content_head'>
          <h2>
          culturals
          </h2>
        </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               autoplay={{ delay: 3000 }}
               loop={true}
               breakpoints={{
                 640: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 3 },
               }}
             >
               {culturals.map((con, id) => (
                 <SwiperSlide key={id}>
                   <div className="college_achievement_card ">
                     {con.img && (
                       <img src={con.img} alt={`college_Achievement ${id + 1}`} className="college_achievement_img slider_img" />
                     )}
                     <p className="college_achievement_text">{con.name}</p>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
             </>
              )

              
            }
            {
              activeSection === "sports" && (
                <>
                <div className='intro_content_head'>
          <h2>
          sports
          </h2>
        </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               autoplay={{ delay: 3000 }}
               loop={true}
               breakpoints={{
                 640: { slidesPerView: 1 },
                 768: { slidesPerView: 2 },
                 1024: { slidesPerView: 3 },
               }}
             >
               {Sports.map((con, id) => (
                 <SwiperSlide key={id}>
                   <div className="college_achievement_card ">
                     {con.img && (
                       <img src={con.img} alt={`college_Achievement ${id + 1}`} className="college_achievement_img slider_img" />
                     )}
                     <p className="college_achievement_text">{con.name}</p>
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
             </>
              )

              
            }
            {
              activeSection==="placements"&&(
                <>
                <div className='intro_content_head'>
          <h2>
          Placed Students 2024-2025
          </h2>
        </div>
           <Swiper
               modules={[Navigation, Pagination, Autoplay]}
               spaceBetween={20}
               slidesPerView={1}
               autoplay={{ delay: 3000 }}
               loop={true}
               breakpoints={{
                 640: { slidesPerView: 1 },
                 768: { slidesPerView: 1 },
                 1024: { slidesPerView: 1 },
               }}
             >
               {placements.map((con, id) => (
                 <SwiperSlide key={id}>
                   <div className="placement_card ">
                     {con.src && (
                       <img src={con.src} alt={`placement ${id + 1}`} className="placement_img " />
                     )}
                   </div>
                 </SwiperSlide>
               ))}
             </Swiper>
                </>
              )
            }

                     



            </div>
            {/* bottom */}
            <div className='main_intro_bottom'>
            <div className="college_main_btns">
              <div className="college_main_btn" onClick={() => setActiveSection('placements')}>
                <h2>
                Placements
                </h2>
              </div>
              <div className="college_main_btn" onClick={() => setActiveSection('sports')} >
                <h2>
                Sports
                </h2>
              </div>
              <div className="college_main_btn" onClick={() => setActiveSection('culturals')}>
                <h2>
                culturals
                </h2>
              </div>
              <div className="college_main_btn" onClick={() => setActiveSection('events')}>
                <h2>
                Events
                </h2>
              </div>
              <div className="college_main_btn" onClick={() => setActiveSection('dept')} >
                <h2>
                S & H Department
                </h2>
              </div>
              
            </div>
            </div>

           


        </div>
      </section>
      <div className="back_icon" onClick={onBack}>
        <IoArrowBack />
      </div>
    </>
  )
}

export default IntroContent
