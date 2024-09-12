import { useState } from "react";
import "./main_1402.css";

import Staff from "../Components/Staff";

import faili from "../assets/faili.jpg";
import peymani from "../assets/peymani.jpg";
import staff_rahimzadeh from "../assets/1402/rahimzadeh.jpg";
import staff_momeni from "../assets/1402/momeni-nezhad.jpg";
import staff_baledi from "../assets/1402/baledi.jpg";
import staff_namazifard from "../assets/1402/namazi-fard.jpeg";
import staff_ashouri from "../assets/1402/ashouri.jpg";
import staff_bicharanlu from "../assets/1402/bicharanlu.png";
import staff_bagherinia from "../assets/1402/bagherinia.jpg";
import staff_masoudi from "../assets/1402/masoudi.jpg";
import staff_karimi from "../assets/1402/karimi.jpeg";
import linkedinLogo from "../assets/logo-linkedin.svg";
import linkSVG from "../assets/link.svg";
import mailOutlineLogo from "../assets/mail-open-outline.svg";
import utLogo from "../assets/ut-logo.png";
import menuOutline from "../assets/menu-outline.svg";
import { Link } from "react-router-dom";

const CoursePage1402 = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const staffList = [
    {
      "name": "Vahid Rahimzadeh",
      "image": staff_rahimzadeh,
      "subject": "Chatbots & Dialogue Systems",
      "duty": "CA6, Quiz 6, Workshop 3",
      "linkedin": "https://www.linkedin.com/in/vavre/",
      "email": "mailto:vahyd@live.com"
    },
    {
      "name": "MohammadJavad Momeni",
      "image": staff_momeni,
      "subject": "Transformer, Pre-training, Post-training, LLMs",
      "duty": "CA4, Quiz 4, Workshop 1",
      "linkedin": "https://www.linkedin.com/in/mohammad-javad-momeni-219498249/",
      "email": "mailto:momeni.nezhad@ut.ac.ir"
    },
    {
      "name": "Danial Baledi",
      "image": staff_baledi,
      "subject": "Transformer, Pre-training, Post-training, LLMs",
      "duty": "CA4, Quiz 4, Workshop 2",
      "linkedin": "https://www.linkedin.com/in/danial-baledi-b72ab0288/",
      "email": "mailto:Baledi.danial@gmail.com"
    },
    {
      "name": "Danial Namazi Fard",
      "image": staff_namazifard,
      "subject": "Sentiment, Embedding, Naive Bayes",
      "duty": "CA2, Quiz 2",
      "linkedin": "https://www.linkedin.com/in/namazifard/",
      "email": "",
      "github": "https://github.com/namazifard"
    },
    {
      "name": "Nastaran Ashouri",
      "image": staff_ashouri,
      "subject": "Sentiment, Embedding, Naive Bayes",
      "duty": "CA2, Quiz 2",
      "linkedin": "https://www.linkedin.com/in/nastaran-ashoori-44385a155",
      "email": "mailto:nastaran.ashoori@ut.ac.ir"
    },
    {
      "name": "Parhan Bicharanlu",
      "image": staff_bicharanlu,
      "subject": "Neural Language Models(RNN,LSTM,GRU)",
      "duty": "CA3, Quiz 2",
      "linkedin": "https://www.linkedin.com/in/parham-bicharanlu-46440b163/",
      "email": "mailto:parhambicharanlu1378@gmail.com"
    },
    {
      "name": "Marzieh Bagheri Nia",
      "image": staff_bagherinia,
      "subject": "Tokenization, Language Modeling with N-Grams",
      "duty": "CA1, Quiz 1",
      "linkedin": "https://www.linkedin.com/in/marzieh-bagherinia-51087a292/",
      "email": ""
    },
    {
      "name": "Mostafa Masoudi",
      "image": staff_masoudi,
      "subject": "Neural Machine Translation",
      "duty": "CA5, Quiz 5",
      "linkedin": "https://www.linkedin.com/in/mostafa-masoudi-551650242",
      "email": "mailto:mstfmasoudii@gmail.com"
    },
    {
      "name": "Sepehr Karimi",
      "image": staff_karimi,
      "subject": "Chatbots & Dialogue Systems",
      "duty": "CA6, Quiz 6",
      "linkedin": "https://www.linkedin.com/in/sepehrkarimia",
      "email": "mailto:sepehrkarimi@ut.ac.ir",
      "homepage": "https://sepehr-karimi.github.io"
    }
  ]
  const CAList = [
      {
      "name": "Computer Assignment 1",
      "subject": "Tokenization, Language Modeling With N-Grams",
      "url": "https://drive.google.com/file/d/1SDK4znZ8CW_NT90pGAtG0d5R6XWs6G4b/view?usp=sharing"
      },
      {
          "name": "Computer Assignment 2",
          "subject": "Sentiment Analysis, Embedding, Naive Bayes",
          "url": "https://drive.google.com/file/d/1Uhq7iJdTay9zXI2G0wTH_JHecvm-4eFK/view?usp=sharing"
      },
      {
          "name": "Computer Assignment 3",
          "subject": "Neural Language Models (LSTM, GRU)",
          "url": "https://drive.google.com/file/d/1wDstVAWu2RUXj0W8d4k6rgL6L5a9RSN0/view?usp=sharing"
      },
      {
          "name": "Computer Assignment 4",
          "subject": "Fine-Tuning Language Models",
          "url": "https://drive.google.com/file/d/10eKFXCoZUI3Rna7gqS7xDq_DQ6hM2deM/view?usp=sharing"
      },
      {
          "name": "Computer Assignment 5",
          "subject": "Machine Translation",
          "url": "https://drive.google.com/file/d/1QXxc-Z9L-anzd59sXlM-nnK2SdrCw3bP/view?usp=sharing"
      },
      {
          "name": "Computer Assignment 6",
          "subject": "LLM Based Chatbot",
          "url": "https://drive.google.com/file/d/1chhkJrU6PBrmI06MIyuLjXrIYt7094Th/view?usp=sharing"
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
        </ul>
        {mobileNavOpen && (
          <nav className="min-h-screen bg-white w-10/12 max-w-[32rem] fixed right-0 top-0 z-[100] shadow-2xl border-l border-primary-700/10">
            <h2 className="bg-primary-50 rounded-xl m-4 shadow-sm text-primary-500 text-center py-4 px-2 font-semibold">
              Natural Language Processing Course Web Page <br /> Spring 2024
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
                <a href="#quizzes">Quizzes</a>
              </li>
              <li className="py-4">
                <a href="#assignments">Assignments</a>
              </li>
              <li className="py-4">
                <a href="#workshops">Workshops</a>
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
            
            <article className="flex flex-col items-center">
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
          Class Location and Timing: Room 203, Tehran University's College of Engineering. Saturdays and Mondays, 9:00 AM to 10:30 AM Iran Standard Time. <br />
          You can download the course schedule file from the following link: <a style={{color: "#518ccf"}} href="https://docs.google.com/spreadsheets/d/1dQ6Z_h0tcEFypEPrQ9GXmkRi0x3atLuF/edit?usp=drive_link&ouid=108103140371182078251&rtpof=true&sd=true">Download Here</a><br />
        All teaching videos are available on the following link: <a style={{color: "#518ccf"}} href="https://www.aparat.com/UT_NLP/">Download Here</a> <br />
        
        The course policies document are available on the following link: <a style={{color: "#518ccf"}} href="https://drive.google.com/file/d/13UiIrrWhCZhiHbjDdisOBRPEK8afMJn-/view?usp=sharing">Download Here</a> <br />
        CA report template is available on the following link: <a style={{color: "#518ccf"}} href="https://drive.google.com/drive/folders/1_xiQbapLKaHvqjH0fyu8dOn2HR0cEpHG?usp=sharing">Download Here</a> <br />  
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
        <section id="quizzes" className="px-6 py-8">
        <div className="container">
        <h1 className="font-bold text-xl">Quizzes</h1>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://drive.google.com/file/d/1rk2mHcxObSl9iP3llyZDGTUKCWXiUmU7/view?usp=sharing" >Quiz 1</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://drive.google.com/file/d/1_xm8vus_xfhzXqxEOHelLq3XvfXLvr7C/view?usp=sharing" >Quiz 2</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://drive.google.com/file/d/1A1Vlmx6wSOtEirhH_b5VVx1ngvTtLD9k/view?usp=sharing" >Quiz 3-4</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://drive.google.com/file/d/1Si9CQkJALK6Hs6mYXaRO09Ob0iwIz70M/view?usp=sharing" >Quiz 5</Link>
          </p>
          <br/>
        </div>
        </section>
        <section id="assignments" className="px-6 py-8 bg-primary-50">
        <div className="container">
        <h1 className="font-bold text-xl">Assignments</h1>
          {CAList.map((ca) => (
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to={ca.url} >{ca.name} - {ca.subject}</Link>
          </p>))}
        </div>
        </section>
        <section id="workshops" className="px-6 py-8">
        <div className="container">
        <h1 className="font-bold text-xl">Workshops</h1>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://www.youtube.com/watch?v=-A0y4oZw0GQ" >Workshop 1 - Empowering NLP with PyTorch</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://www.youtube.com/watch?v=478oBBebGV0" >Workshop 2 - Exploring quantization techniques and QLoRA</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://www.youtube.com/watch?v=x3Y96HkithQ" >Workshop 3 - LLM Based Chatbot with LangGraph - LangGraph (Part 1)</Link>
          </p>
          <p class="mt-4" style={{color: "#518ccf"}}>
            <Link to="https://www.youtube.com/watch?v=hXWjRE9whJM" >Workshop 3 - LLM Based Chatbot with LangGraph - LangGraph (Part 2)</Link>
          </p>
        </div>
        </section>
      <Link to="/">
      <button 
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          padding: '10px 20px',
          backgroundColor: '#007bff', 
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 1000
        }}
        // onClick={() => props.setYearFunction("1403")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-left"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </button>
      </Link>

      <footer className="mt-5 text-center py-3 container">
        Coded with ❤️ in an afternoon by{" "}
        <a href="https://www.linkedin.com/in/vavre/">VavRe</a>
      </footer>
    </>
  );
};

export default CoursePage1402;
