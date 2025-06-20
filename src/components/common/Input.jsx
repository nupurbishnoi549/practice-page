import React from 'react';

const Input = ({
    name,
    value,
    onChange,
    type = "text",
    placeholder,
    InputClass = "",
}) => {
    return (
        <div className="w-full mb-3">
            <input
                className={`w-full max-w-[371px] bg-color shadow text-sm font-bold pl-4 py-[17px] border border-[#D1E0E9] rounded-4xl placeholder-[#737376] focus:outline-none focus:ring focus:ring-black 
          ${InputClass}`}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
