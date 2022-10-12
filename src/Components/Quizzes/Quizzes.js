import React from 'react';
import Options from '../Options/Options';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizzes = ({ quizzesData }) => {
    const correctState = (correctData) => {
        if (correctData === correctAnswer) {
            toast( <h1>Correct Answer</h1>,
           {position: toast.POSITION.TOP_CENTER})
        } else {
            toast(<h1>Incorrect Answer</h1>,
           {position: toast.POSITION.TOP_CENTER})
        }
    };
    const { correctAnswer, options, question } = quizzesData;

    const notify = () => {
        <h1>Text: `Correct Ans Is: ${correctAnswer}`,</h1>
    };
    return (
        <div className="bg-slate-200 w-3/4 mx-auto rounded-xl mb-10">
            <div className="text-center border-orange-500 relative rounded-xl py-5 font-semibold bg-slate-300 my-5">
                <h1 className="w-3/4 mx-auto">Quiz : {question}</h1>
                <div className="absolute top-5 right-5">
                    <button onClick={notify}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </button>
                    <ToastContainer />
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 w-11/12 mx-auto justify-items-center">
                {options.map((option) => (
                    <Options
                        option={option}
                        correctState={correctState}></Options>
                ))}
            </div>
        </div>
    );
};

export default Quizzes;
