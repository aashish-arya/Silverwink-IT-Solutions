import React from 'react';

const EmployeeCard = ({ emp }) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
            <img
                src={emp.image}
                alt={emp.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{emp.name}</h2>
            <p className="text-center text-gray-600">{emp.position}</p>
            <p className="text-center text-sm text-gray-500">{emp.email}</p>
        </div>
    );
};

export default EmployeeCard;
