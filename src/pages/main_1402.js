import { useState } from "react";
import "./main_1402.css";

import Staff from "../Components/Staff";

import faili from "../assets/faili.jpg";
import peymani from "../assets/peymani.jpg";
import linkedinLogo from "../assets/logo-linkedin.svg";
import linkSVG from "../assets/link.svg";
import mailOutlineLogo from "../assets/mail-open-outline.svg";
import utLogo from "../assets/ut-logo.png";
import menuOutline from "../assets/menu-outline.svg";
import { Link } from "react-router-dom";
import nlpBanner from "../assets/NLP-banner.jpg";
import course1402Data from "../data/course1402.json";
import staffImages1402 from "../data/staffImages1402";

const CoursePage1402 = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const staffList = course1402Data.staff.map((staff) => ({
    ...staff,
    image: staffImages1402[staff.imageKey],
  }));
  const CAList = course1402Data.assignments;
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
          className="fill-white w-16  cursor-pointer"
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

      <section
        id="header"
        className="relative bg-cover bg-center h-64"
        style={{ backgroundImage: `url(${nlpBanner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex items-center justify-center h-full">
          <h1 className="text-white text-4xl font-bold">NLP - Spring 2024</h1>
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

            {/* Head TA */}
            <article className="flex flex-col items-center mt-10">
              <h2 className="font-bold sm:text-xl text-nowrap">
                Head TA
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
              {staffList.map((staff) => (
                <Staff
                  key={staff.name}
                  name={staff.name}
                  image={staff.image}
                  subject={staff.subject}
                  duty={staff.duty}
                  linkedin={staff.linkedin}
                  email={staff.email}
                  homepage={staff.homepage}
                  github={staff.github}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="logistics" className="px-6 py-8">
        <div className="container">
          <h1 className="font-bold text-xl">Logistics</h1>
          <p className="mt-4">
            Class Location and Timing: Room 203, Tehran University's College of
            Engineering. Saturdays and Mondays, 9:00 AM to 10:30 AM Iran
            Standard Time. <br />
            You can download the course schedule file from the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://docs.google.com/spreadsheets/d/1dQ6Z_h0tcEFypEPrQ9GXmkRi0x3atLuF/edit?usp=drive_link&ouid=108103140371182078251&rtpof=true&sd=true"
            >
              Download Here
            </a>
            <br />
            All teaching videos are available on the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://www.aparat.com/UT_NLP/"
            >
              Download Here
            </a>{" "}
            <br />
            All course slides are available on the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://drive.google.com/drive/folders/18u9GbN3FsFY8glHMi4rJMtyMGaupFCR6?usp=sharing"
            >
              Download Here
            </a>{" "}

            <br />
            The course policies document is available on the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://drive.google.com/file/d/13UiIrrWhCZhiHbjDdisOBRPEK8afMJn-/view?usp=sharing"
            >
              Download Here
            </a>{" "}
            <br />
            CA report template is available on the following link:{" "}
            <a
              style={{ color: "#518ccf" }}
              href="https://drive.google.com/drive/folders/1_xiQbapLKaHvqjH0fyu8dOn2HR0cEpHG?usp=sharing"
            >
              Download Here
            </a>{" "}
            <br />
          </p>
        </div>
      </section>

      <section id="content" className="px-6 py-8 bg-primary-50">
        <div className="container">
          <h1 className="font-bold text-xl">Content</h1>
          <p class="mt-4">
            This course begins with foundational concepts in NLP and gradually
            advances to more sophisticated models, comprehensively covering a
            range of NLP tasks, including machine translation, sentiment
            analysis, text generation, entity recognition, and text
            classification. Additionally, it delves into the topic of dialogue
            systems and chatbots, exploring their design principles and
            practical implementations. Moreover, the course offers a rigorous
            exploration of advanced neural network architectures tailored
            specifically for NLP, empowering participants with a profound
            understanding of cutting-edge techniques and their applications in
            real-world scenarios. Throughout the course, students will develop
            proficiency in various NLP tasks through their participation in
            continuous assessment activities (CAs). Beginning with fundamental
            concepts such as data tokenization and basic natural language
            processing model training, they will progressively advance to
            explore more complex neural network architectures like RNNs, LSTMs,
            and GRUs, alongside pertinent methodologies. As they progress, their
            CAs will emphasize the practical application of their knowledge to
            contemporary models such as BERT and LLMs. Moreover, students will
            enhance their skills through hands-on exercises and projects,
            specifically geared towards machine translation and dialogue
            systems. This approach ensures that students not only grasp
            theoretical concepts but also gain practical experience in
            implementing NLP techniques in real-world scenarios.
          </p>
          <p>
            Throughout the course, students will actively participate in
            workshops. These workshops are designed to bolster their skills and
            proficiency in NLP through practical engagement . Following the
            completion of each workshop, video recordings will be published for
            public access.
          </p>
        </div>
      </section>
      <section id="quizzes" className="px-6 py-8">
        <div className="container">
          <h1 className="font-bold text-xl">Quizzes</h1>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://drive.google.com/file/d/1rk2mHcxObSl9iP3llyZDGTUKCWXiUmU7/view?usp=sharing">
              Quiz 1
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://drive.google.com/file/d/1_xm8vus_xfhzXqxEOHelLq3XvfXLvr7C/view?usp=sharing">
              Quiz 2
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://drive.google.com/file/d/1A1Vlmx6wSOtEirhH_b5VVx1ngvTtLD9k/view?usp=sharing">
              Quiz 3-4
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://drive.google.com/file/d/1Si9CQkJALK6Hs6mYXaRO09Ob0iwIz70M/view?usp=sharing">
              Quiz 5
            </Link>
          </p>
          <br />
        </div>
      </section>
      <section id="assignments" className="px-6 py-8 bg-primary-50">
        <div className="container">
          <h1 className="font-bold text-xl">Assignments</h1>
          {CAList.map((ca) => (
            <p class="mt-4" style={{ color: "#518ccf" }} key={ca.name}>
              <Link to={ca.url}>
                {ca.name} - {ca.subject}
              </Link>
            </p>
          ))}
        </div>
      </section>
      <section id="workshops" className="px-6 py-8">
        <div className="container">
          <h1 className="font-bold text-xl">Workshops</h1>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://www.youtube.com/watch?v=-A0y4oZw0GQ">
              Workshop 1 - Empowering NLP with PyTorch
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://www.youtube.com/watch?v=478oBBebGV0">
              Workshop 2 - Exploring quantization techniques and QLoRA
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://www.youtube.com/watch?v=x3Y96HkithQ">
              Workshop 3 - LLM Based Chatbot with LangGraph - LangGraph (Part 1)
            </Link>
          </p>
          <p class="mt-4" style={{ color: "#518ccf" }}>
            <Link to="https://www.youtube.com/watch?v=hXWjRE9whJM">
              Workshop 3 - LLM Based Chatbot with LangGraph - LangGraph (Part 2)
            </Link>
          </p>
        </div>
      </section>
      <Link to="/">
        <button
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            zIndex: 1000,
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
