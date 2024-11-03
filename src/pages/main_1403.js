import { useState } from "react";
import "./main_1403.css";

import Staff from "../Components/Staff";

import faili from "../assets/faili.jpg";
import peymani from "../assets/peymani.jpg";

import staff_amirhossein_safdarian from "../assets/1403/amirhossein_safdarian.jpg";
import staff_milad_mohammadi from "../assets/1403/milad_mohammadi.jpeg";
import staff_ali_khorramfar from "../assets/1403/ali_khorramfar.jpg";
import staff_ali_ramezani from "../assets/1403/ali_ramezani.jpg";
import staff_amirhossein_bonakdar from "../assets/1403/amirhossein_bonakdar.jpg";
import staff_mohammad_gorji from "../assets/1403/mohammad_gorji.jpg";
import staff_parham_sazdar from "../assets/1403/parham_sazdar.jpg";
import staff_parmis_bathayan from "../assets/1403/parmis_bathayan.jpg";
import staff_pouya_gohari from "../assets/1403/pouya_gohari.jpg";
import staff_mohammad_amin_ghanizadeh from "../assets/1403/mohammad_amin_ghanizadeh.jpg";
import staff_ali_fartout from "../assets/1403/ali_fartout.jpg";

import linkedinLogo from "../assets/logo-linkedin.svg";
import linkSVG from "../assets/link.svg";
import mailOutlineLogo from "../assets/mail-open-outline.svg";
import utLogo from "../assets/ut-logo.png";
import menuOutline from "../assets/menu-outline.svg";
import nlpBanner from "../assets/NLP-banner.jpg";
import { Link } from "react-router-dom";

const CoursePage1403 = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const staffList = [
    {
      "name": "AmirHossein Safdarian",
      "image": staff_amirhossein_safdarian,
      "subject": "",
      "duty": "CA5, Workshop 3",
      "linkedin": "https://www.linkedin.com/in/amirhossein-safdarian/",
      "email": "mailto:safdarian2000@gmail.com",
      "website": "",
      "github": "https://github.com/safdarian"
    },
    {
      "name": "Milad Mohammadi",
      "image": staff_milad_mohammadi,
      "subject": "",
      "duty": "CA6, Workshop 3",
      "linkedin": "https://www.linkedin.com/in/mohammadi-milad-mim/",
      "email": "mailto:miladmohammadi@ut.ac.ir",
      "website": "https://miladmohammadi.xyz",
      "github": "https://github.com/mohammadi-milad-mim"
    },
    {
      "name": "Ali Khorramfar",
      "image": staff_ali_khorramfar,
      "subject": "",
      "duty": "CA2, Quiz 2",
      "linkedin": "https://www.linkedin.com/in/ali-khoramfar/",
      "email": "mailto:Alikhorramfar@gmail.com",
      "website": "",
      "github": ""
    },
    {

      "name": "AmirHossein Bonakdar",
      "image": staff_amirhossein_bonakdar,
      "subject": "",
      "duty": "CA2, Quiz 2",
      "linkedin": "https://ir.linkedin.com/in/amirhossein-bonakdar-a138a7156",
      "email": "mailto:amir7bonakdar@gmail.com",
      "website": "",
      "github": ""
    },
    {

      "name": "Ali Ramezani",
      "image": staff_ali_ramezani,
      "subject": "",
      "duty": "CA1, Quiz 1, CA3, Quiz 3, Workshop 1",
      "linkedin": "https://www.linkedin.com/in/ali-ramezani-352a0b128/",
      "email": "mailto:ali.ramezani.96@ut.ac.ir",
      "website": "",
      "github": ""
    },
    {

      "name": "Mohammad Amin Ghanizadeh",
      "image": staff_mohammad_amin_ghanizadeh,
      "subject": "",
      "duty": "CA1, Quiz 1, CA3, Quiz 3",
      "linkedin": "https://www.linkedin.com/in/mohammad-amin-ghanizadeh-9b18791a5/",
      "email": "mailto:ghanizadeh.amin@ut.ac.ir",
      "website": "",
      "github": ""
    },
    {

      "name": "Mohammad Gorji",
      "image": staff_mohammad_gorji,
      "subject": "",
      "duty": "CA4, Quiz 4, Workshop 2",
      "linkedin": "https://www.linkedin.com/in/mohammad-gorji-465749275",
      "email": "mailto:mohamadgorjicode@gmail.com",
      "website": "",
      "github": ""
    },
    {
      
      "name": "Ali Fartout",
      "image": staff_ali_fartout,
      "subject": "",
      "duty": "CA4, Quiz 4",
      "linkedin": "https://www.linkedin.com/in/ali-fartout-552428170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "email": "mailto:ali.fartout@ut.ac.ir",
      "website": "",
      "github": ""
    },
    {

      "name": "Parham Sazdar",
      "image": staff_parham_sazdar,
      "subject": "",
      "duty": "CA3, Quiz 3, Workshop 1",
      "linkedin": "https://www.linkedin.com/in/parham-sazdar",
      "email": "mailto:p.sazdar@gmail.com",
      "website": "",
      "github": ""
    },
    {
      "name": "Parmis Bathayan",
      "image": staff_parmis_bathayan,
      "subject": "",
      "duty": "Quiz 5, Quiz 6",
      "linkedin": "https://www.linkedin.com/in/parmis-bathayan-15bb43323/",
      "email": "mailto:parmisbathaeiyan@gmail.com",
      "website": "",
      "github": "https://github.com/parmisbathaeiyan"
    },
    {

      "name": "Pouya Gohari",
      "image": staff_pouya_gohari,
      "subject": "",
      "duty": "Quiz 5, Quiz 6",
      "linkedin": "https://linkedin.com/in/pouya-gohari-a2124a255",
      "email": "mailto:pouya.hmgohari@gmail.com",
      "website": "",
      "github": "https://github.com/PouyaGohari"
    }
  ]
  const CAList = [
    {
    "name": "Computer Assignment 1",
    "subject": "Tokenization, Language Modeling With N-Grams",
    "url": "https://drive.google.com/file/d/1nQJij6KWAi2ogX4lgc3YMcJgQu1PG1eE/view?usp=sharing"
    }
  ]
  return (
    <>
      <header className="py-2 px-4 shadow-lg bg-primary-600 flex text-white justify-between items-center">
        <div className="left flex items-center gap-2">
          <img src={utLogo} alt="UT Logo" className="w-20 shadow-lg" />
          <div>
            <h1>
              Natural Language Processing <br />
            </h1>
            <p className="text-xs font-thin">
              Faculty of Electrical & <br /> Computer Engineering, <br />{" "}
              University of Tehran
            </p>
          </div>
        </div>
        <img
          src={menuOutline}
          className="fill-white w-16"
          onClick={() => setMobileNavOpen(true)}
          alt="Menu"
        />
        <ul className="flex justify-between hidden">
          <li>Teaching Staff</li>
          <li>Logistic</li>
          <li>Content</li>
          <li>Assignments</li>
        </ul>
        {mobileNavOpen && (
          <nav className="min-h-screen bg-white w-10/12 max-w-[32rem] fixed right-0 top-0 z-[100] shadow-2xl border-l border-primary-700/10">
            <h2 className="bg-primary-50 rounded-xl m-4 shadow-sm text-primary-500 text-center py-4 px-2 font-semibold">
              Natural Language Processing Course Web Page <br /> Fall 2024
            </h2>
            <ul className="divide-y-2 px-8 justify-between flex flex-col text-primary-600 font-semibold w-full text-center text-lg">
              <li className="py-4">
                <a href="#staff">Teaching Staff</a>
              </li>
              <li className="py-4">
                <a href="#logistics">Logistic</a>
              </li>
              <li className="py-4">
                <a href="#content">Content</a>
              </li>
              <li className="py-4">
                <a href="#assignments">Assignments</a>
              </li>
              <li className="py-4">
                <a href="#past">Past Course Archives</a>
              </li>
              
            </ul>
          </nav>
        )}
      </header>
      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setMobileNavOpen(false)}
        ></div>
      )}
      
      <section
        id="header"
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${nlpBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">NLP - Fall 2024</h1>
        </div>
      </section>

      <section id="intro" className="px-6 py-8 container">
        Natural Language Processing (NLP) stands as a pivotal discipline within
        the domain of artificial intelligence (AI), facilitating the
        comprehension and generation of human language. Recent strides in deep
        learning methodologies have significantly augmented the capabilities of
        NLP systems, driving breakthroughs across various linguistic tasks.
      </section>

      <section id="staff" className="bg-primary-50 px-6 py-8">
        <div className="container flex flex-col lg:items-start lg:justify-center lg:flex-row gap-10 items-center">
          <div className="left flex-col justify-center items-center gap-20">
            {/* Instructor */}
            
            <article className="flex flex-col items-center" style={{paddingRight:20}}>
              <h2 className="font-bold sm:text-xl">Instructor</h2>
              <img
                src={faili}
                alt="Dr. Hesham Faili"
                className="border-4 border-primary-400 w-36 sm:w-52 mt-5 lg:mt-9 object-cover rounded-full"
              />
              <p className="mt-1 sm:text-lg text-nowrap">Dr. Hesham Faili</p>
              <div className="sm:[&>a>img]:h-8 [&>a>img]:h-6 items-center flex gap-2 mt-1">
                <a href="https://www.linkedin.com/in/heshaam-faili-7b9b2468/?originalSubdomain=ir">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="sm:!h-7 !h-5"
                  />
                </a>
                <a href="mailto:hfaili@ut.ac.ir">
                  <img src={mailOutlineLogo} alt="Mail" />
                </a>
                <a href="https://ece.ut.ac.ir/en/~hfaili">
                  <img src={linkSVG} alt="Personal Page" />
                </a>
              </div>
            </article>

            {/* Chief Teaching Assistant */}
            <article className="flex flex-col items-center mt-10">
              <h2 className="font-bold sm:text-xl text-nowrap">
                Chief Teaching Assistant
              </h2>
              <img
                src={peymani}
                alt="Samaneh Peymani Rad"
                className="border-4 border-primary-400 w-36 sm:w-52 mt-5 object-cover rounded-full"
              />
              <p className="mt-1 sm:text-lg text-nowrap">Samaneh Peymani Rad</p>
              <div className="sm:[&>a>img]:h-8 [&>a>img]:h-6 items-center flex gap-2 mt-1">
                <a href="https://www.linkedin.com/in/samaneh-peymani-rad-40736a144">
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="sm:!h-7 !h-5"
                  />
                </a>
                <a href="mailto:samanehrad94@gmail.com">
                  <img src={mailOutlineLogo} alt="Mail" />
                </a>
              </div>
            </article>
          </div>

          <div className="right flex flex-col items-center gap-3">
            <h2 className="font-bold text-xl">Teaching Staff</h2>
            <div className="grid [&>article>img]:border-2 [&>article>img]:border-primary-500 grid-cols-2 text-center -mx-10 sm:mx-0 justify-center lg:items-start lg:justify-center lg:grid md:grid-cols-3 gap-1">
              {/* Staff */}
              {staffList.map((staff) => (<Staff 
                  name={staff.name}
                  image={staff.image}
                  subject={staff.subject}
                  duty={staff.duty}
                  linkedin={staff.linkedin}
                  email={staff.email}
                  homepage={staff.homepage}
                  github={staff.github}/>))}
            </div>
          </div>
        </div>
      </section>

      <section id="logistics" className="px-6 py-8">
        <div className="container">
          <h1 className="font-bold text-xl">Logistics</h1>
          <p className="mt-4">
          🏫
          Class Location and Timing: Room 219, Tehran University's College of Engineering. Saturdays and Mondays, 9:00 AM to 10:30 AM Iran Standard Time. <br />
          
          📅
          You can download the course schedule file from the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://drive.google.com/drive/folders/1xutGEyU6L4bJLKXpjudBPyOFPX1BbonM?usp=sharing"
            >
              Download Here
            </a>
            <br />
          
          🎥
          All teaching videos are available on the following link: {" "}
          <a 
            style={{color: "#518ccf"}} 
            href="https://www.aparat.com/UT_NLP/"
          >
              Aparat Channel
          </a>
          <br />
          
          📜
          The course policies document is available on the following link:{" "}
          <a 
            style={{ color: "#518ccf" }} 
            href="https://drive.google.com/drive/folders/1ZG8H_a0LGIpBuJ1xd4QyiHSjAy7SEeLr?usp=sharing"
          >
            Download Here
          </a>{" "}
          <br/>
          
          💻
          Course workshop recordings are available on the following link:{" "}
          <a 
            style={{ color: "#518ccf" }} 
            href="https://www.youtube.com/@NLP-UT"
          >
            YouTube Channel
          </a>{" "}
          <br/>
          
          </p>
        </div>
      </section>

      <section id="content" className="px-6 py-8 bg-primary-50">
        <div className="container">
          <h1 className="font-bold text-xl">Content</h1>
          <p class="mt-4">
          This course begins with foundational concepts in NLP and gradually advances to more sophisticated models, comprehensively covering a range of NLP tasks, including machine translation, sentiment analysis, text generation, entity recognition, and text classification. Additionally, it delves into the topic of dialogue systems and chatbots, exploring their design principles and practical implementations. Moreover, the course offers a rigorous exploration of advanced neural network architectures tailored specifically for NLP, empowering participants with a profound understanding of cutting-edge techniques and their applications in real-world scenarios.
        
        Throughout the course, students will develop proficiency in various NLP tasks through their participation in continuous assessment activities (CAs). Beginning with fundamental concepts such as data tokenization and basic natural language processing model training, they will progressively advance to explore more complex neural network architectures like RNNs, LSTMs, and GRUs, alongside pertinent methodologies. As they progress, their CAs will emphasize the practical application of their knowledge to contemporary models such as BERT and LLMs. Moreover, students will enhance their skills through hands-on exercises and projects, specifically geared towards machine translation and dialogue systems. This approach ensures that students not only grasp theoretical concepts but also gain practical experience in implementing NLP techniques in real-world scenarios.
        
        </p>
        <p>
          Throughout the course, students will actively participate in workshops. These workshops are designed to bolster their skills and proficiency in NLP through practical engagement . Following the completion of each workshop, video recordings will be published for public access.
        </p>
        </div>
      </section>
      
      <section id="assignments" className="px-6 py-8">
        <div className="container">
          <h1 className="font-bold text-xl">Assignments</h1>
          {CAList.map((ca) => (
            <p class="mt-4" style={{ color: "#518ccf" }}>
              <Link to={ca.url}>
                {ca.name} - {ca.subject}
              </Link>
            </p>
          ))}
        </div>
      </section>

      <section id="past" className="px-6 py-8  bg-primary-50">
        <div className="container">
          <h1 className="font-bold text-xl">Past Course Archives</h1>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="/spring-2024" >Spring 2024 Course</Link>
          </p>
        </div>
        <h2 className="font-semibold text-lg mt-6">Past Quizzes</h2>
    <ul className="mt-4 space-y-2">
      <li>
        <a href="..\assets\quiz\quiz1-14011220solutions.pdf" style={{ color: "#518ccf" }}>Quiz 1 - Spring 2023</a>
      </li>
      <li>
        <a href="..\assets\quiz\quiz2-answers-1402-01-21.pdf" style={{ color: "#518ccf" }}>Quiz 2 - Spring 2023</a>
      </li>
      <li>
        <a href="..\assets\quiz\quiz3_Solution.pdf" style={{ color: "#518ccf" }}>Quiz 3 - Spring 2023</a>
      </li>
      <li>
        <a href="..\assets\quiz\Quiz4 14020230-with solution.pdf" style={{ color: "#518ccf" }}>Quiz 4 - Spring 2023</a>
      </li>
      <li>
        <a href="..\assets\quiz\Quiz5 Syntax 14020308-with solution.docx" style={{ color: "#518ccf" }}>Quiz 5 - Spring 2023</a>
      </li>
    </ul>
      </section>

      <footer className="mt-5 text-center py-3 container">
        Coded by{" "}
        <a href="https://www.linkedin.com/in/amirhossein-safdarian/">AmirHossein Safdarian</a>
      </footer>
    </>
  );
};

export default CoursePage1403;
