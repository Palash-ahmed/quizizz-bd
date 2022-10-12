import React from 'react';
import Options from '../QuizOptions/QuizOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const QuizizzBD = ({ QuizizzBDData }) => {
        const { question, options, correctAnswer } = QuizizzBDData;
    
        const rightAnswer = () => {
           
            toast.success(`${correctAnswer}`, {onClose:500})
      
           
        };
    
        const clickForAnswer = (id) => {
            if (id === correctAnswer) {
                toast.success('Correct Answer',{onClose:200});
                
             
            }
            else {
               
                toast.error('Wrong Answer',{onClose:200});
            }
    
        }
    return (
        <div className="bg-green-400 w-3/4 mx-auto rounded-xl mb-10">
            <div className="text-center text-xl border-orange-500 relative rounded-xl py-5 font-bold bg-red-400 my-5">
                <h1 className="w-3/4 mx-auto">Quiz : {question}</h1>
                <div className="absolute top-5 right-5">
                    <button onClick={rightAnswer}>
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

            <div className="grid gap-4 md:grid-cols-1 w-1/2 mx-auto justify-items-center pb-8">
                {options.map((option) => (
                    <Options
                        option={option}
                        clickForAnswer={clickForAnswer}>

                        </Options>
                ))}
            </div>
        </div>
    );
};

export default QuizizzBD;
