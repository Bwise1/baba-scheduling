'use client';
import React, { useState } from 'react';
import styles from './pages.module.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import Lefticon from '../components/lefticon';
import TimezoneSelect from 'react-timezone-select';
import { useRef } from 'react';
import moment from 'moment';
import 'moment-timezone';

const Step1page = () => {
    function getTimeInTimezone(timezone: string): string {
        return moment().tz(timezone).format('h:mm:ss a');
    }
    const now = new Date();
    const localTime = now.toLocaleTimeString();

    console.log(`The current local time is ${localTime}.`);

    const [selectedTimezone, setSelectedTimezone] = useState('America/Chicago');

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    const isFormValid = input1 && input2;

    function handleInput1Change(event: React.ChangeEvent<HTMLInputElement>) {
        setInput1(event.target.value);
    }

    function handleInput2Change(event: React.ChangeEvent<HTMLInputElement>) {
        setInput2(event.target.value);
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="">
            <div className="text-left w-1/2 p-8">
                <div className=" h-4/6 m-auto flex-auto ml-24">
                    <div className="bg-gray-200 rounded-lg p-6">
                        <div className="pt-10 pb-8">
                            <label className="block mb-2 text-gray-700 text-3xl text-center">
                                Welcome to{' '}
                                <strong className="font-sans">BABA </strong>
                                scheduling!
                            </label>
                            <div className="w-3/4 m-auto">
                                We just need some basic info to get your profile
                                setup. You will be able to edit this later.
                            </div>
                            <div className="pl-12 pt-5">
                                Step 1 of 4
                                <div className="flex mt-2">
                                    <div className="h-2 bg-gray-600 w-20"></div>
                                    <div className="h-2 bg-gray-400 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-400 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-400 w-20 pl-3 ml-2"></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-5">
                                <div className="p-5">
                                    <div>
                                        Username
                                        <div className="flex">
                                            <div className="rounded-l-lg shadow-md border mb-4 bg-gray-100">
                                                <p className="mt-2">
                                                    babashdeuling.com/
                                                </p>{' '}
                                            </div>
                                            <input
                                                type="text"
                                                id="input1"
                                                value={input1}
                                                onChange={handleInput1Change}
                                                className="w-full h-full p-2 rounded-r-lg shadow-md mt-1 border hover:border-black mb-4"
                                            ></input>
                                        </div>
                                    </div>
                                    <div>
                                        Full name
                                        <input
                                            type="text"
                                            id="input2"
                                            value={input2}
                                            onChange={handleInput2Change}
                                            className="w-full  p-2 rounded-lg shadow-md mt-1 border hover:border-black mb-4"
                                        ></input>
                                    </div>

                                    <div className="relative">
                                        <TimezoneSelect
                                            className="border-gray-200 hover:border-indigo-600"
                                            value={selectedTimezone}
                                            onChange={(timezone) =>
                                                setSelectedTimezone(
                                                    timezone.value,
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="ml-4 font-semibold pt-3">
                                        Current local time
                                    </div>
                                    <div
                                        id="time-display"
                                        className="ml-4 font-light"
                                    >
                                        {getTimeInTimezone(selectedTimezone)} in{' '}
                                        {JSON.stringify(
                                            selectedTimezone,
                                            null,
                                            2,
                                        )}
                                    </div>

                                    {!isFormValid && (
                                        <p className="text-red-400 mt-5 mb-2 text-center">
                                            Please fill in both fields before
                                            submitting.
                                        </p>
                                    )}
                                    <button
                                        type="submit"
                                        disabled={!isFormValid}
                                        className={`text-white py-2 px-4 rounded-xl w-full self-center 
                            ${
                                isFormValid
                                    ? 'bg-indigo-500 hover:bg-indigo-700'
                                    : 'bg-indigo-200 cursor-not-allowed'
                            }`}
                                    >
                                        Next Step
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Lefticon />
        </form>
    );
};
export default Step1page;