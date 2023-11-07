import { useState } from "react";
import AddQuestion from "./AddQuestionForm";
import Button from "./Button";
import ShowQuestions from "./ShowQuestions";

const Question = () => {
    const [displayAddQuestion, setDisplayAddQuestion] = useState(false);
    const [displayShowQuestions, setDisplayShowQuestions] = useState(true);

    const handleAddQuestionClick = () => {
        setDisplayAddQuestion(true);
        setDisplayShowQuestions(false);
    };

    const handleShowQuestionsClick = () => {
        setDisplayAddQuestion(false);
        setDisplayShowQuestions(true);
    };

    return (
        <div>
            <Button
                bgColor="bg-yellow-300"
                textColor="text-black"
                onClick={handleAddQuestionClick}
                onHover="hover:bg-yellow-600"
            >
                Add New Question
            </Button>
            <Button
                bgColor="bg-yellow-300"
                textColor="text-black"
                className="mx-2"
                onClick={handleShowQuestionsClick}
                onHover="hover:bg-yellow-600"
            >
                Show Questions Table
            </Button>

            <div className="flex justify-center items-center flex-col my-10 px-10">
                {displayAddQuestion && <AddQuestion />}
                {displayShowQuestions && <ShowQuestions />}
            </div>
        </div>
    );
};

export default Question;
