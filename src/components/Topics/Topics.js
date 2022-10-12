import React, { useContext } from 'react';
import Header from '../Header/Header';
import { statisticsContext } from '../Root/Root';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quizTopics = useContext(statisticsContext);

    const QuizizzBDTopics = quizTopics.data;

    return (
        <div>
            <Header />
            <div className="grid md:grid-cols-4">
                {QuizizzBDTopics.map((QuizizzBD) => (
                    <Topic QuizizzBD={QuizizzBD} key={QuizizzBD.id}></Topic>
                ))}
            </div>
        </div>
    );
};

export default Topics;
