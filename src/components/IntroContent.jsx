import {React,useState,useEffect} from 'react'
import collegeVideo from '../assets/main/collegedrone.mp4';
import { IoArrowBack } from "react-icons/io5";
import { motion } from 'framer-motion';

//swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {memorialEvents,placements,culturals,Sports,dept,patrons} from "./constantsIntro"
import college_logo from '../assets/main/college_logo_white.png';
import kamarajar_logo from '../assets/main/kamarajar_logo.webp';


const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
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
        <div className="college_logo_content">
          <img src={college_logo} alt="" />
        </div>
        <div className="tmhnu_logo_content">
          <img src={kamarajar_logo} alt="" />
        </div>
            <div className="main_intro_top">
            {
              activeSection === "events" && (
                <>
                <div className='intro_content_head'>
          <h2>
          Memorable events
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
            {
              activeSection==="chief"&&(
                <>
                <div className='intro_content_head'>
          <h2>
          chief patrons
          </h2>
        </div>
        <div className="patrons_lists">
          {
            patrons.map((item,id)=>(
              <div className="patrons_list" key={id}>
                <div>
                  <img src={item.img} alt="" />
                </div>
                <div className="patrons_content">
                  <h2>
                    {item.name}
                  </h2>
                  <p>
                  {
                    item.Designation
                  }
                  </p>
                  <p>
                    {
item.Qualification
                    }
                  </p>
                  <p>
                    {
                      item.Department
                    }
                  </p>
                </div>
              </div>
            ))
          }
        </div>
           
                </>
              )
            }
            </div>
            {/* bottom */}
            <div className='main_intro_bottom'>
            <motion.div
        className="college_main_btns"
        variants={containerVariants}
        initial="hidden"
        animate="show"
       
      >
        {[
          { label: 'chief patrons', value: 'chief' },
          { label: 'Placements', value: 'placements' },
          { label: 'Sports', value: 'sports' },
          { label: 'Culturals', value: 'culturals' },
          { label: 'Events', value: 'events' },
          { label: 'S & H Department', value: 'dept' },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="college_main_btn"
            onClick={() => setActiveSection(item.value)}
            variants={itemVariants}
          >
            <h2>{item.label}</h2>
          </motion.div>
        ))}
      </motion.div>
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
