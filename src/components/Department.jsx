import React from 'react';
import collegeVideo from '../assets/main/collegedrone.mp4';
import { IoArrowBack } from "react-icons/io5";
import { useState } from 'react';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Department = ({ department, onBack }) => {
  const [activeSection, setActiveSection] = useState('about');

  if (!department) return <div>Loading...</div>;
1

  return (
    <div >
      <div className="bg_video bg_vide_2">
        <video autoPlay muted loop playsInline>
          <source src={collegeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      <section className="department_content_section">
        <div className="department_left">
          <img src={department.logo} alt="" className='department_logo' />
          <h2 className='asso_text'>
            association
          </h2>
          <img src={department.association} alt="" className='association_logo' />
          <h3 className='association_title'>
            {
              department.associationName
            }
          </h3>
        </div>
        <div className="department_right">
          <div className='dept_name'>
            <h2>
              {department.name}
            </h2>
          </div>
          <div className="top_bar_btns">
  <button onClick={() => setActiveSection('about')}>About</button>
  <button onClick={() => setActiveSection('achievements')}>Achievements</button>
  <button onClick={() => setActiveSection('activities')}>Activities</button>
  <button onClick={() => setActiveSection('faculties')}>Faculties</button>
</div>

{/* About Section */}
{activeSection === 'about' && (
  <div className="about_content content_section">
    <p>
    {
      department.description
    }
    </p>
    <div className='intro_images'>
      {department.introImage?.map((img, id) => (
        <img key={id} src={img} alt={`Intro ${id + 1}`} className="intro_image" />
      ))}
    </div>
  </div>
)}

{/* Achievements Section */}
{activeSection === 'achievements' && (
  <div className="achivements_section content_slider">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    }}
  >
    {department.achievements?.map((con, id) => (
      <SwiperSlide key={id}>
        <div className="achievement_card main_card">
          {con.img && (
            <img src={con.img} alt={`Achievement ${id + 1}`} className="achievement_img slider_img" />
          )}
          <p className="achievement_text">{con.name}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


)}

{/* Activities Section */}
{activeSection === 'activities' && (
  <div className="activites_section content_slider">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    }}
  >
    {department.activites?.map((con, id) => (
      <SwiperSlide key={id}>
        <div className="achievement_card main_card">
          {con.img && (
            <img src={con.img} alt={`activities ${id + 1}`} className="activites_img slider_img" />
          )}
          <p className=" card_text">{con.name}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
)}

{/* Faculties Section */}
{activeSection === 'faculties' && (
  <div className="faculties_section content_slider">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    loop={true}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {department.faculties?.map((con, id) => (
      <SwiperSlide key={id}>
        <div className="faculty_card ">
          {con.image && (
            <img src={con.image} alt={`faculties ${id + 1}`} className="faculties_img slider_img" />
          )}
         <div className='faculty_card_text'>
         <p className=" card_text">{con.name}</p>
          <p className=" card_text">{con.qualification}</p>
          <p className=" card_text">{con.position}</p>
         </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
)}


        </div>


      </section>
      <div className="back_icon" onClick={onBack}>
        <IoArrowBack />
      </div>
    </div>
  );
};

export default Department;
