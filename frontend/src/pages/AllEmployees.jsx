import React from 'react';
import EmployeeCard from '../components/EmployeeCard';

const employees = [
    {
        "id": 1,
        "name": "Aashish Kumar",
        "position": "Frontend Developer",
        "email": "aashish@example.com",
        "image": "https://i.pravatar.cc/150?img=1"
    },
    {
        "id": 2,
        "name": "Ravi Singh",
        "position": "Backend Developer",
        "email": "ravi@example.com",
        "image": "https://i.pravatar.cc/150?img=2"
    },
    {
        "id": 3,
        "name": "Akshita Kaur",
        "position": "HR Executive",
        "email": "shrishti@example.com",
        "image": "https://i.pravatar.cc/150?img=3"
    },
    {
        "id": 4,
        "name": "Aashish Kumar",
        "position": "Frontend Developer",
        "email": "aashish@example.com",
        "image": "https://i.pravatar.cc/150?img=1"
    },
    {
        "id": 5,
        "name": "Ravi Singh",
        "position": "Backend Developer",
        "email": "ravi@example.com",
        "image": "https://i.pravatar.cc/150?img=2"
    },
    {
        "id": 6,
        "name": "Akshita Kaur",
        "position": "HR Executive",
        "email": "shrishti@example.com",
        "image": "https://i.pravatar.cc/150?img=3"
    },
    {
        "id": 7,
        "name": "Ravi Singh",
        "position": "Backend Developer",
        "email": "ravi@example.com",
        "image": "https://i.pravatar.cc/150?img=2"
    },
    {
        "id": 8,
        "name": "Akshita Kaur",
        "position": "HR Executive",
        "email": "shrishti@example.com",
        "image": "https://i.pravatar.cc/150?img=3"
    },
    {
        "id": 9,
        "name": "Aashish Kumar",
        "position": "Frontend Developer",
        "email": "aashish@example.com",
        "image": "https://i.pravatar.cc/150?img=1"
    },
    {
        "id": 10,
        "name": "Ravi Singh",
        "position": "Backend Developer",
        "email": "ravi@example.com",
        "image": "https://i.pravatar.cc/150?img=2"
    },
    {
        "id": 11,
        "name": "Akshita Kaur",
        "position": "HR Executive",
        "email": "shrishti@example.com",
        "image": "https://i.pravatar.cc/150?img=3"
    }
]




const AllEmployees = () => {
    return (
        <div className="p-6 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {employees.map(emp => (
                <EmployeeCard key={emp.id} emp={emp} />
            ))}

        </div>
    );
};

export default AllEmployees;
