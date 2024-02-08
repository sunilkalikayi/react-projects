import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();
    return (
        <section className="m-20">
            <p className="text-[32px] font-semibold my-10">kalikayi Projects</p>
            <section className="flex gap-4">
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
            </section>
        </section>
    );
}

export default App;
