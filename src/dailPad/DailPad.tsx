import { useState } from "react";
import DailPadClearIcon from "../assets/icons/DailPadClearIcon";

const DailPad = () => {
    // State to manage the input text
    const [text, setText] = useState("");

    // Function to handle adding input to the text
    const handleSetInput = (input: string) => {
        setText((val) => val + input);
    };

    // Function to handle clearing the last character from the text
    const handleClear = () => {
        setText((prevState) => prevState.slice(0, -1));
    };

    return (
        <section className="w-[370px] border p-6 text-[21px] mx-auto mt-[50px]">
            <div className="text-[36px] text-center mb-4">Dail Pad</div>
            {/* Display area */}
            <div className="h-[60px] border-2 flex justify-between items-center px-2 gap-2">
                <div className="overflow-scroll max-w-fit no-scrollbar">{text}</div>
                {/* Clear button */}
                <div onClick={handleClear} className="cursor-pointer">
                    <DailPadClearIcon />
                </div>
            </div>

            {/* Buttons container */}
            <div className="flex flex-col items-center gap-4 m-4">
                <div className="flex gap-4">
                    {/* Number buttons */}
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("1");
                        }}
                    >
                        1
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("2");
                        }}
                    >
                        2
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("3");
                        }}
                    >
                        3
                    </button>
                </div>
                <div className="flex gap-4">
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("4");
                        }}
                    >
                        4
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("5");
                        }}
                    >
                        5
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("6");
                        }}
                    >
                        6
                    </button>
                </div>
                <div className="flex gap-4">
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("7");
                        }}
                    >
                        7
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("8");
                        }}
                    >
                        8
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("9");
                        }}
                    >
                        9
                    </button>
                </div>
                <div className="flex gap-4">
                    {/* Symbol buttons */}
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("*");
                        }}
                    >
                        *
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("0");
                        }}
                    >
                        0
                    </button>
                    <button
                        className="h-[46px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("#");
                        }}
                    >
                        #
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DailPad;
