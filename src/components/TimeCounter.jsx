import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

function TimeCounter() {
    const [Tcounter, setTcounter] = useState(0);
    const InterRef = useRef(null)

    const startTimer = () => {
       // Prevent multiple intervals
        InterRef.current = setInterval(() => {
            setTcounter((prev) => prev + 1);
        }, 1000);
    };

   const pauseTimer = () =>{
    clearInterval(InterRef.current)
   }
   const resetTimer = () =>{
    pauseTimer()
    setTcounter(0)
   }
    
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 to-cyan-200">
            <div className="p-10 bg-white rounded-3xl shadow-2xl flex flex-col items-center space-y-6 w-[350px]">
                <h1 className="text-4xl font-bold text-cyan-700">Timer: {Tcounter}s</h1>
                <div className="flex space-x-4 p-5">
                    <button
                        onClick={startTimer}
                        className="flex items-center gap-2 px-5 py-2 bg-green-500 text-white font-medium rounded-lg shadow hover:bg-green-600 transition duration-300"
                    >
                        <FaPlay /> Start
                    </button>
                    <button
                        onClick={pauseTimer}
                        className="flex items-center gap-2 px-5 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                    >
                        <FaPause /> Pause
                    </button>
                    <button
                        onClick={resetTimer}
                        className="flex items-center gap-2 px-5 py-2 bg-red-500 text-white font-medium rounded-lg shadow hover:bg-red-600 transition duration-300"
                    >
                        <FaRedo /> Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TimeCounter;
