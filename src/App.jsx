import { useState } from "react";
import Question from "./components/Question";

function App() {
  const [openQuestions, setOpenQuestions] = useState(1);
  console.log(openQuestions);
  const handleToggleQuestion = (changer) => {
    setOpenQuestions((prevCount) => (changer ? prevCount - 1 : prevCount + 1));
    console.log(openQuestions);
  };
  return (
    <main className="min-h-screen relative grid grid-rows-[240px_auto] lg:grid-rows-[320px_auto]">
      <div className="bg-[url(/background-pattern-mobile.svg)] lg:bg-[url(/background-pattern-desktop.svg)] 2xl:bg-cover"></div>
      <div
        className="bg-[hsl(275,100%,97%)] h-auto"
        style={{
          paddingBottom:
            openQuestions == 4
              ? "890px"
              : openQuestions == 3
              ? "800px"
              : openQuestions == 2
              ? "660px"
              : openQuestions == 1
              ? "500px"
              : "",
        }}
      ></div>
      <section className="font-['Work_Sans'] absolute top-0 translate-y-40 lg:translate-y-44 mx-4 px-4 xs:mx-6 xs:px-6 pt-6 lg:pt-12 pb-5 bg-white rounded-lg lg:rounded-2xl lg:w-[600px] lg:mx-[212px] lg:px-10 1.5xl:mx-[420px] 2xl:mx-[660px]">
        <h1 className="font-bold text-[hsl(292,42%,14%)] text-3xl lg:text-6xl text-start flex gap-6 items-center">
          <img className="w-6 lg:w-9" src="/icon-star.svg" alt="" />
          FAQs
        </h1>
        <Question
          ask="What is Frontend Mentor, and how will it help me?"
          res="Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building."
          active
          handleToggleQuestion={handleToggleQuestion}
        />
        <Question
          ask="Is Frontend Mentor free?"
          res="Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
  option providing access to a range of projects suitable for all skill levels."
          handleToggleQuestion={handleToggleQuestion}
        />
        <Question
          ask="Can I use Frontend Mentor projects in my portfolio?"
          res="Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!"
          handleToggleQuestion={handleToggleQuestion}
        />
        <Question
          ask="How can I get help if I'm stuck on a challenge?"
          res="The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members."
          handleToggleQuestion={handleToggleQuestion}
        />
      </section>
    </main>
  );
}

export default App;
