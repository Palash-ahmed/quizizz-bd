import React from 'react';

const Blog = () => {
    return (
        <div className="h-[80%] pb-7 w-4/5 mx-auto">
            <div>
            <h1 className="text-center font-bold mb-5 text-2xl text-blue-600 my-3">
                Frequency ask question (FAQ)
            </h1>
        </div>
        <div>
        <h1 className="mt-5 p-3 text-5xl flex flex-wrap justify-start rounded bg-green-600 text-white">1. What are the purpose of React Router?</h1>
        <p className='mt-5 p-8 text-2xl flex flex-wrap justify-center rounded bg-blue-600 text-white'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different as it changes, and it also gives you tools to update the location usings and the history API</p>
        </div>
        <div>
        <h1 className="mt-5 p-3 text-5xl flex flex-wrap justify-start rounded bg-green-600 text-white">2. How does context api work?</h1>
        <p className='mt-5 p-8 text-2xl flex flex-wrap justify-center rounded bg-blue-600 text-white'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        <div>
            <h1 className="mt-5 p-3 text-5xl flex flex-wrap justify-start rounded bg-green-600 text-white">3. What is useHref()?</h1>
            <p className='mt-5 p-8 text-2xl flex flex-wrap justify-center rounded bg-blue-600 text-white'>The useHref hook returns a URL that may be used to link to the given to location, even outside of React Router. Tip: You may be interested in taking a look at the source for the Link component in react-router-dom to see how it uses useHref internally to determine its own href value.</p>
        </div>
        </div>
    );
};

export default Blog;
