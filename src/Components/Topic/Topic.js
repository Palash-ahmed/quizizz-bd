import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ QuizizzBD }) => {
    const { id, name, logo, total } = QuizizzBD;
    return (
        <div>
            <div className="flex h-screen items-center justify-center px-5">
                <div className="max-w-sm overflow-hidden rounded-xl bg-gray-300 hover:shadow-xl">
                    <img src={logo} alt="Programming-quiz" className="h-auto w-full" />
                    <div className="p-5">
                        <h1 className="text-2xl font-semibold text-green-700">
                            {name}
                        </h1>
                        <p className="text-medium mb-5 mt-3 text-red-500">
                            Total Quiz: {total}
                        </p>
                        <Link to={`quiz/${id}`}>
                            <button className="w-full rounded-md bg-blue-700  py-2 text-white font-semibold hover:bg-blue-500 hover:shadow-md duration-75">
                                Start Quiz
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Topic;
