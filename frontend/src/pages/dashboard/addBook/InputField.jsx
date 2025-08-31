import React from 'react';

const InputField = ({ label, name, type = 'text', register, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>
      {
        type === 'textarea' ? (
          <textarea
            {...register(name, { required: true })}
            placeholder={placeholder}
            className="p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        ) : (
          <input
            type={type}
            {...register(name, { required: true })}
            placeholder={placeholder}
            className="p-2 border w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        )
      }
    </div>
  );
};

export default InputField;
