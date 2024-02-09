import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();
    return (
        <section className="m-20">
            <p className="text-[32px] font-semibold my-10">kalikayi Projects</p>
            <section className="flex flex-wrap justify-start gap-10 ">
                <button
                    onClick={() => {
                        navigate("/rock-paper-scissor");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Rock-Paper-Scissor
                </button>
                <button
                    onClick={() => {
                        navigate("/dail-pad");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Number Dail Pad
                </button>
                <button
                    onClick={() => {
                        navigate("/calculator");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Calculator
                </button>
                <button
                    onClick={() => {
                        navigate("/timer");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Timer
                </button>
                <button
                    onClick={() => {
                        navigate("/digital-clock");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Digital Clock
                </button>
                <button
                    onClick={() => {
                        navigate("/analog-clock");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    AnalogClock
                </button>
                <button
                    onClick={() => {
                        navigate("/stop-watch");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Stop Watch
                </button>
                <button
                    onClick={() => {
                        navigate("/alaram");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Alaram
                </button>
                <button
                    onClick={() => {
                        navigate("/sign-in");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Sign In
                </button>
                <button
                    onClick={() => {
                        navigate("/sign-up");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Sign Up
                </button>
                <button
                    onClick={() => {
                        navigate("/todo-app");
                    }}
                    className="w-[220px] h-[100px] flex items-center justify-center bg-[#E5E5E5] rounded-[15px] font-semibold"
                >
                    Todo App
                </button>
            </section>
        </section>
    );
}

export default App;
