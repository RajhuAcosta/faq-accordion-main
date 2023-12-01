import { useState } from "react";
import IconMinus from "./Svg";

const Question = ({ ask, res, active, handleToggleQuestion }) => {
  const [question, setQuestion] = useState(active);
  const handleQuestion = () => {
    setQuestion(!question);
    if (question) {
      handleToggleQuestion(true);
    } else {
      handleToggleQuestion(false);
    }
  };
  return (
    <article>
      <h3
        onClick={handleQuestion}
        className="text-[hsl(292,42%,14%)] font-bold text-start lg:text-lg flex items-center justify-between my-6 lg:my-10 cursor-pointer"
      >
        {ask}
        {question ? (
          <div onClick={handleQuestion}>
            <IconMinus />
          </div>
        ) : (
          <img
            onClick={handleQuestion}
            className="pl-5 cursor-pointer"
            src="/icon-plus.svg"
            alt=""
          />
        )}
      </h3>
      <p
        className={`text-[hsl(292,16%,49%)] text-[14px] lg:text-base transition-all duration-300 ease-in-out overflow-hidden ${
          question ? "max-h-[126px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {res}
      </p>
    </article>
  );
};
export default Question;
