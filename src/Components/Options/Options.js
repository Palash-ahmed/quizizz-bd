import React from 'react';

const Options = ({ option, correctState }) => {
    return (
        <div className="w-full p-2 m-4 text-center text-xl hover:bg-yellow-200 bg-blue-400 rounded-2xl shadow-xl">
            <div className="form-control">
                <label
                    className="label cursor-pointer">
                <input
                    onClick={() => correctState(option)}
                    type="radio"
                    name="radio-6"
                    className="radio checked:bg-red-500"
                />
                    <span className="label-text text-center p-4">
                        {option}
                    </span>
                </label>
            </div>
        </div>
    );
};

export default Options;
