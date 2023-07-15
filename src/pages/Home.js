import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import htm from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import js from "../assets/tech/js.png";
import c from "../assets/tech/c.png";
import cpp from "../assets/tech/cpp.png";
import gs from "../assets/tech/googleappscript.png";
import py from "../assets/tech/py.png";
import react from "../assets/tech/react.png";
import node from "../assets/tech/node.png";
import express from "../assets/tech/express.png";
import mongo from "../assets/tech/mongo.png";
import aws from "../assets/tech/aws.png";
import digital from "../assets/tech/digital.png";
import electron from "../assets/tech/electron.png";
import saas from "../assets/tech/saas.png";
import tailwind from "../assets/tech/tailwind.png";
import git from "../assets/tech/git.png";
import figma from "../assets/tech/figma.png";
import saron from "../assets/project/saron.gif";
import trouv from "../assets/project/trouvailler.gif";
import alekhya from "../assets/project/alekhya.gif";
import gdsc from "../assets/gdsc.png";
import gdsc1 from "../assets/volunteer/1.webp";
import gdsc2 from "../assets/volunteer/2.webp";
import gdsc3 from "../assets/volunteer/3.webp";
import gdsc4 from "../assets/volunteer/4.webp";
import gdsc5 from "../assets/volunteer/5.webp";
import gdsc6 from "../assets/volunteer/6.webp";
import tinker from "../assets/tinker.png";
import th1 from "../assets/volunteer/tinker/th1.webp";
import th2 from "../assets/volunteer/tinker/th2.webp";
import th3 from "../assets/volunteer/tinker/th3.webp";
import th4 from "../assets/volunteer/tinker/th4.webp";
import th5 from "../assets/volunteer/tinker/th5.webp";
import mu from "../assets/download.png";
import g1 from "../assets/volunteer/g1.webp";
import g2 from "../assets/volunteer/g2.webp";
import g3 from "../assets/volunteer/g3.webp";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    autoplaySpeed: 3000,

    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="z-[1] relative home h-[100vh]">
      <div className="pt-4 md:pt-12 px-4 md:px-40 flex gap-[10px] md:gap-[2rem] items-center">
<h1 className="text-xl font-semibold text-[#7629ff] hidden md:blcok">Connect me over</h1>

<LinkedInIcon className="icon"/>
<GitHubIcon className="icon"/>
<InstagramIcon className="icon"/>
<EmailIcon className="icon"/>
</div>
      <div className="px-8 md:px-40 pt-52 md:pt-60">
      
        <h1 className="font-light md:text-4xl mb-1 md:mb-4 text-[#7629ff]">Hey !</h1>
        <h1 className="font-bold text-3xl md:text-6xl mb-8 text-[#7629ff]">I,m Jaison</h1>
        <p className="text-sm md:text-xl text-[#868686] w-[90%] md:w-[40%]">
          Driven software developer with a passion for innovation and a
          commitment to creating outstanding solutions.
        </p>
        <div className="hidden md:flex gap-8 flex-wrap my-12">
          <button className="btn">About me</button>
          <button className="btn">Projects</button>

          <button className="btn">Skills</button>
        </div>
        <div className="hidden md:flex gap-8 my-12">
          <button className="btn">Volunteering</button>
          <button className="btn">Resume</button>
        </div>
        <div className="flex md:hidden gap-2 flex-wrap my-8">
        <button className="btn">About me</button>
          <button className="btn">Projects</button>

          <button className="btn">Skills</button>
          <button className="btn">Volunteering</button>
          <button className="btn">Resume</button>
        </div>

        <h1 className="font-bold text-3xl md:text-4xl mt-20 md:mt-40 text-[#7629ff]">I work with</h1>
        <div className="flex flex-wrap justify-start w-[100%] md:w-[90%] gap-[2%] md:gap-[8%] tech mt-12 md:my-20">
          <img src={react} alt="" />
          <img src={node} alt="" />
          <img src={express} alt="" />
          <img src={mongo} alt="" />
          <img src={htm} alt="" />
          <img src={css} alt="" />
          <img src={js} alt="" />
          <img src={c} alt="" />
          <img src={cpp} alt="" />
          <img src={py} alt="" />
          <img src={gs} alt="" />

          <img src={aws} alt="" />
          <img src={digital} alt="" />
          <img src={electron} alt="" />
          <img src={tailwind} alt="" />

          <img src={saas} alt="" />
          <img src={git} alt="" />
          <img src={figma} alt="" />
        </div>

        <h1 className="font-bold text-3xl md:text-4xl mt-4 md:mt-40 text-[#7629ff]">Projects</h1>

        <div>
          <div className="flex my-8 md:my-20 flex-col md:flex-row">
            <div className="w-[100%] md:w-[40%]">
              <img src={trouv} className=" shadow-1 " alt="" />
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
              <h1 className=" text-xl md:text-4xl font-semibold text-[#9900ff]">
                Trouvailler Travel Agency Website
              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#4e4e4e]">
                This is a full stack website made for a travel agency to sell
                their travel packages and book hotels. This project also
                includes the built of custom CMS portals for the admin and local
                vendors.
              </p>
              <p className=" md:text-lg mt-4 text-[#4e4e4e]">
                <span className="text-[#9900ff] font-bold">Tech stack :</span>{" "}
                Mern stack, Digital Ocean and Nginx
              </p>
              <p className="mt-4 md:text-2xl font-medium text-[#9900ff]">
                Features
              </p>
              <div className="text-[#4e4e4e] text-sm md:text-lg px-8">
                <ul className="" style={{ listStyleType: "disc" }}>
                  <li>Can upload and update travel packages by admin</li>
                  <li>Option to add properties by vendors</li>
                  <li>Authentication with google auth</li>
                  <li>
                    Bidding system in which users can place bids for their
                    requirement and option for vendors to accept the bid and
                    make deals.
                  </li>
                </ul>
              </div>
              <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="https://trouvailler.com">
                  <u>Trouvailler.com</u>
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="flex my-12 md:my-20 flex-col md:flex-row">
          <div className="w-[100%] md:w-[40%]">
              <img src={alekhya} className=" shadow-1 " alt="" />
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
            <h1 className=" text-xl md:text-4xl font-semibold text-[#9900ff]">
                Alekhya - Website for College arts club
              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#4e4e4e]">
                A simple website built for college arts club. Main aim was to
                showcase the creativity of students in our college.
              </p>
              <p className=" md:text-lg mt-4 text-[#4e4e4e]">
                <span className="text-[#9900ff] font-bold">Tech stack :</span>{" "}
                HTML, CSS and JavaScript
              </p>
              <p className="mt-4 md:text-2xl font-medium text-[#9900ff]">
                Features
              </p>
              <div className="text-[#4e4e4e] text-sm md:text-lg px-8">
                <ul className="" style={{ listStyleType: "disc" }}>
                  <li>Artworks by students can be showcased</li>
                  <li>Option to contact the artist for paid work</li>
                </ul>
              </div>
              <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="http://bit.ly/3pPDCiP">
                  <u>bit.ly/3pPDCiP</u>
                </a>
              </p>
            </div>
          </div>
          <hr />
          <div className="flex my-12 md:my-20 flex-col md:flex-row">
          <div className="w-[100%] md:w-[40%]">
              <img src={saron} className=" shadow-1 " alt="" />
            </div>
            <div className="md:pl-20 w-[100%] mt-12 md:mt-0 md:w-[60%]">
            <h1 className=" text-xl md:text-4xl font-semibold text-[#9900ff]">
                Website for Saron Innovature Labs
              </h1>
              <p className="mt-4 md:mt-12 text-sm md:text-lg font-medium text-[#4e4e4e]">
                This is a website built for a company Saron Innovature Labs. I
                worked on the front end development of this project using the
                ReactJs.
              </p>
              <p className=" md:text-lg mt-4 text-[#4e4e4e]">
                <span className="text-[#9900ff] font-bold">Tech stack :</span>{" "}
                ReactJS
              </p>
              <p className="text-sm md:text-lg mt-4 font-bold text-[#4e4e4e]">
                <span className=" text-[#9900ff] font-medium">
                  Visit here :
                </span>{" "}
                <a href="https://saron.in">
                  <u>Saron.in</u>
                </a>
              </p>
            </div>
          </div>
        </div>

        <h1 className="font-bold text-3xl md:text-4xl md:mt-40 text-[#7629ff]">
          Volunteering
        </h1>
        <div className="my-12 md:my-20">
          <div className="md:mb-28">
            <div className="flex flex-col md:flex-row justify-between md:items-center">
              <h1 className="text-lg md:text-2xl font-semibold text-[#9900ff]">
                Google Developer Student Clubs Lead
              </h1>
              <img src={gdsc} className="w-[80%]" alt="" />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#4e4e4e]">
                I have been selected as the GDSC Lead for the year 2021-22, and
                with this opportunity, I am determined to establish a thriving
                GDSC Chapter in my college. Through this role, I have been
                fortunate to connect with numerous Googlers, learning from their
                expertise and gaining valuable insights. Additionally, I have
                had the privilege of participating in events and workshops
                organized in collaboration with Google Developers. Together with
                my dedicated team, we have successfully conducted a series of
                technical events and workshops, creating an engaging environment
                for students to learn and grow.
              </p>
            </div>
            <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={gdsc1} alt="" />
                  <img src={gdsc2} alt="" />

                  <img src={gdsc3} alt="" />
                  <img src={gdsc4} alt="" />

                  <img src={gdsc5} alt="" />
                  <img src={gdsc6} alt="" />
                </Slider>
              </div>
            </div>
          </div>

          <hr />

          <div className="my-12 md:my-28">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="text-lg md:text-2xl font-semibold text-[#9900ff]">
                TinkerHub Campus Lead
              </h1>
              <img src={tinker} className="w-[30%] mt-4 md:mt-0" alt="" />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#4e4e4e]">
                During the academic year of 2020-21, I had the privilege of
                serving as the campus lead for the TinkerHub chapter at our
                college. This experience marked the beginning of my journey into
                volunteering and connecting with a wonderful community. As a
                team, we organized numerous tech events and workshops, providing
                valuable opportunities for students to enhance their skills and
                knowledge. It was particularly enriching to connect with
                industry professionals, learning from their expertise and
                gaining insights into the real-world applications of technology.
                In addition to our internal activities, we also took the
                initiative to conduct inter-college events, fostering a spirit
                of healthy competition and collaboration among students from
                various institutions.
              </p>
            </div>
            <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={th1} alt="" />
                  <img src={th2} alt="" />

                  <img src={th3} alt="" />
                  <img src={th4} alt="" />

                  <img src={th5} alt="" />
                </Slider>
              </div>
            </div>
          </div>

          <hr />

          <div className="my-12 md:my-28">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
          <h1 className="text-lg md:text-2xl font-semibold text-[#9900ff]">
                Campus ambassador and district coordinator of GTech muLearn{" "}
              </h1>
              <img src={mu} className="w-[50%] mt-4 md:mt-0" alt="" />
            </div>
            <div>
              <p className="text-sm md:text-lg mt-8 md:mt-16 text-[#4e4e4e]">
                During my tenure as a Campus Ambassador and District Coordinator
                for Gtech Mularn, a vibrant community that strives to bridge the
                gap between students and the industry, I had the incredible
                privilege of spearheading various events aimed at nurturing
                technical expertise and equipping students with the skills
                necessary for a successful transition into the professional
                realm. These events provided invaluable opportunities for
                students to connect with experienced mentors from diverse
                industries, enabling them to gain invaluable insights and learn
                directly from those who have already established themselves in
                their respective fields. Through our concerted efforts, we
                fostered an environment conducive to personal growth,
              </p>
            </div>
            <div className="my-12">
              <div>
                <Slider {...settings}>
                  <img className="" src={g1} alt="" />
                  <img src={g2} alt="" />

                  <img src={g3} alt="" />
                 
                </Slider>
              </div>
            </div>
          </div>




          <hr />



          <h1 className="font-bold text-4xl mt-12 md:mt-40 text-[#7629ff]">
          About me
        </h1>
<p className="text-sm md:text-xl mt-16 text-[#4e4e4e]"> A highly motivated software developer, actively seeking growth-oriented opportunities in the field of programming and software development. Proficient in full stack development, I have hands-on experience with the MERN (MongoDB, Express, React, Node.js) stack, leveraging my skills in front-end and back-end development to create robust and scalable applications.
</p><p className="text-sm md:text-xl mt-4 text-[#4e4e4e]">
I have practical experience as a MERN stack developer intern for six months, gaining hands-on expertise in front-end and back-end development, database management, and deployment. Additionally, I have worked part-time as a developer for three months, refining my technical skills and collaborating on various projects. I have also completed freelance projects, enhancing my problem-solving abilities, creativity, and adaptability.
</p><p className="text-sm md:text-xl mt-4 text-[#4e4e4e]">

I am dedicated to continuous learning and staying at the forefront of emerging technologies in order to enhance my skills and keep up with industry trends. With a strong desire for personal and professional growth, I am constantly seeking new challenges that will allow me to push the boundaries of my abilities.</p>
<h1 className="font-bold text-base md:text-2xl  mt-12 text-[#7629ff]">Here's my Resume</h1>
<button className="btn my-8 md:mb-28">Resume</button>

<hr />
<div className=" pt-8 pb-8 md:pt-12 md:pb-28 flex gap-[2rem] justify-center md:justify-start items-center">
<h1 className="hidden md:blcok text-xl font-semibold text-[#7629ff]">Connect me over</h1>

<LinkedInIcon className="icon icon-b"/>
<GitHubIcon className="icon icon-b"/>
<InstagramIcon className="icon icon-b"/>
<EmailIcon className="icon icon-b"/>
</div>

        </div>
      </div>
    </div>
  );
}

export default Home;
