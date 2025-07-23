import React from 'react';
import loginbackground from '../assets/loginbackground4.jpg';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Login Form Data:", data);
    };

    return (
        <div
            className="h-[93.3vh]  w-full bg-cover bg-center bg-no-repeat overflow-hidden "
            style={{ backgroundImage: `url(${loginbackground})` }}
        >
            <div className="h-full w-full  flex justify-center items-center md:items-center  pb-4 px-4">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="backdrop-blur-md bg-white/20 border border-white/30 px-6 sm:px-8 md:px-12 lg:px-16 py-24 sm:py-20 md:py-20 lg:py-16 rounded-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl shadow-xl text-black space-y-6"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white">Login</h2>

                    {/* Email Input */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-white">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid email format',
                                },
                            })}
                            className="bg-white/40 border border-white/30 px-4 py-3 rounded-lg text-black placeholder-gray-700 outline-none"
                            placeholder="Enter Email"
                        />
                        {errors.email && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password Input */}
                    <div className="flex flex-col">
                        <label className="mb-1 font-semibold text-white">Password</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Password is required',
                            })}
                            className="bg-white/40 border border-white/30 px-4 py-3 rounded-lg text-black placeholder-gray-700 outline-none"
                            placeholder="Enter password"
                        />
                        {errors.password && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <NavLink to={'/dashboard'}> <button
                        type="submit"
                        className="w-full bg-[#f0b249] hover:bg-black text-black hover:text-white transition-all duration-300 py-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>
                    </NavLink>

                    {/* Signup Option */}
                    <p className="text-center text-white text-sm pt-3">
                        Don't have an account?{" "}
                        <span className="text-[#f0b249] font-semibold hover:underline cursor-pointer">
                            Sign Up
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
