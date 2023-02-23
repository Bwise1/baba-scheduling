'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import { walkUpBindingElementsAndPatterns } from 'typescript';
import Lefticon from '../components/lefticon';
import Image from 'next/image';
import google from '../images/google.png';
import Labelerror from '../components/labelerror';
import { useRef } from 'react';
import { Console } from 'console';
import eyes from '../images/eyes.png';
import noeyes from '../images/noeyes.png';

const inter = Inter({ subsets: ['latin'] });

interface FormState {
    password: string;
    passwordSec: string;
    email: string;
    username: string;

    errors: {
        password?: string;
        passwordSec?: string;
        email?: string;
        username?: string;
    };
}

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordone, setShowPasswordone] = useState(false);
    const [formState, setFormState] = useState<FormState>({
        password: '',
        passwordSec: '',
        email: '',
        username: '',
        errors: {},
    });

    function handleChange(
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
        const { name, value } = event.target;

        // Validate the input
        const errors = validateInput(name, value);

        // Update the state
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
            errors: { ...prevState.errors, ...errors },
        }));
    }
    const errors = {};
    function validateInput(name: string, value: string) {
        const containsUppercase = /[A-Z]/.test(value);
        const containsNonAlphabetic = /[^a-zA-Z]/.test(value);
        switch (name) {
            case 'username':
                formState.username = value;
                if (!value) {
                    formState.errors.username = 'Please enter a username.';
                } else {
                    formState.errors.username = '';
                }
                break;
            case 'email':
                formState.email = value;
                if (!value) {
                    formState.errors.email = 'Please enter your email.';
                } else if (!/\S+@\S+\.\S+/.test(value)) {
                    formState.errors.email =
                        'Please enter a valid email address.';
                } else if (!value.includes('@gmail.com')) {
                    formState.errors.email =
                        'Please enter a valid email address.';
                } else {
                    formState.errors.email = '';
                }
                break;
            case 'password':
                formState.password = value;
                if (!value) {
                    formState.errors.password = 'Please enter a password !';
                } else if (value.length < 7) {
                    formState.errors.password =
                        'Please enter a password with at least 7 characters';
                } else if (!containsNonAlphabetic) {
                    formState.errors.password =
                        'password must contain at least one non alphabet character !';
                } else if (!containsUppercase) {
                    formState.errors.password =
                        'password must contain at least one upper case letter';
                } else {
                    formState.errors.password = '';
                }
                break;
            case 'passwordSec':
                if (value !== formState.password) {
                    formState.errors.passwordSec = 'passwords do not match !';
                } else formState.errors.passwordSec = '';

                break;
            default:
                break;
        }

        return errors;
    }

    function validateForm(formState: FormState) {
        const errors = {
            username: validateInput('name', formState.username),
            email: validateInput('email', formState.email),
            password: validateInput('password', formState.password),
            passwordSe: validateInput('password', formState.passwordSec),
        };

        return errors;
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const errors = validateForm(formState);

        if (
            formState.errors.email == '' &&
            formState.errors.password == '' &&
            formState.errors.username == '' &&
            formState.errors.passwordSec == ''
        ) {
            // Submit the form
            console.log(formState);
            console.log('well done !');
        } else {
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex bg-gray-200 h-full">
            <div className="text-left">
                <div className=" h-4/6 m-auto p-6 flex-auto w-3/4 ml-24">
                    <div className="bg-gray-400 rounded-lg p-6">
                        <div className="text-center pt-10 pb-8">
                            <label className="block text-gray-700 text-4xl">
                                Signup to{' '}
                                <strong className="font-sans">BABA </strong>
                                scheduling for free
                            </label>
                            Create a free account and get access to our
                            services.
                        </div>
                        <input
                            id="username"
                            type="username"
                            name="username"
                            value={formState.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full border border-gray-400 p-2 rounded-lg shadow-md"
                        />
                        <div id="usernameSeterror" className="text-red-500">
                            {formState.errors.username && (
                                <span className="error">
                                    {formState.errors.username}
                                </span>
                            )}
                        </div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full border border-gray-400 p-2 rounded-lg shadow-md mt-4"
                        />
                        <div id="emailSeterror" className="text-red-500">
                            {formState.errors.email && (
                                <span className="error">
                                    {formState.errors.email}
                                </span>
                            )}
                        </div>
                        <div className="flex">
                            <input
                                id="password"
                                type={showPasswordone ? 'text' : 'password'}
                                name="password"
                                value={formState.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="w-full  p-2 rounded-l-lg shadow-md mt-4"
                            />
                            <button
                                className="bg-gray-500 mt-4 rounded-r-lg w-14"
                                onClick={() =>
                                    setShowPasswordone(!showPasswordone)
                                }
                            >
                                {showPasswordone ? (
                                    <Image
                                        src={noeyes}
                                        alt="Google Logo"
                                        className="w-7 h-7 ml-3 opacity-60"
                                    />
                                ) : (
                                    <Image
                                        src={eyes}
                                        alt="Google Logo"
                                        className="w-7 h-7 ml-3 opacity-60"
                                    />
                                )}
                            </button>
                        </div>
                        <div id="passwordSeterror" className="text-red-500">
                            {formState.errors.password && (
                                <span className="error">
                                    {formState.errors.password}
                                </span>
                            )}
                        </div>
                        <div className="flex">
                            <input
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                name="passwordSec"
                                value={formState.passwordSec}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="w-full p-2 rounded-l-lg shadow-md mt-4"
                            />
                            <button
                                className="bg-gray-500 mt-4 rounded-r-lg w-14"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <Image
                                        src={noeyes}
                                        alt="Google Logo"
                                        className="w-7 h-7 ml-3 opacity-60"
                                    />
                                ) : (
                                    <Image
                                        src={eyes}
                                        alt="Google Logo"
                                        className="w-7 h-7 ml-3 opacity-60"
                                    />
                                )}
                            </button>
                        </div>
                        <div id="passwordSeterror" className="text-red-500">
                            {formState.errors.passwordSec && (
                                <span className="error">
                                    {formState.errors.passwordSec}
                                </span>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-indigo-500 text-white py-2 px-4 hover:bg-indigo-800 rounded-xl w-full self-center mt-4"
                        >
                            Sign up for free
                        </button>
                        <label className="block font-medium mb-2 text-gray-700 pt-4 text-center">
                            ------------------- OR -------------------
                        </label>
                        <div className="border border-gray-800 p-2 rounded-lg text-center mt-4 hover:bg-neutral-300 flex">
                            <Image
                                src={google}
                                alt="Google Logo"
                                className="w-8 h-8 ml-32"
                            />
                            <Link href="" className="mt-1 ml-2">
                                Sign up with Google
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Lefticon />
        </form>
    );
};
export default SignupPage;
