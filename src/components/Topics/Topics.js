import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import './Topics.css'

const Topics = () => {
    const quizizz = useLoaderData().data
    console.log(quizizz);
    return (
        <div className='topics-container'>
            {
                quizizz.map(topic => <Card
                    key = {topic.id}
                    topic = {topic}
                ></Card>)
            }
        </div>
    );
};

export default Topics;