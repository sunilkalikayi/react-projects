import { useState } from "react";
import DailPadClearIcon from "../assets/icons/DailPadClearIcon";

const Calculator = () => {
    // State to manage the input text
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    // Function to handle adding input to the text
    const handleSetInput = (input: string) => {
        setExpression((val) => val + input);
    };

    // Function to handle clearing the last character from the text
    const handleClear = () => {
        setExpression((prevState) => prevState?.slice(0, -1));
    };

    // Function to handle evaluation expression using JavaScript eval() function
    const handleEvaluate = () => {
        const res = eval(expression);
        setResult(res);
        console.log("result is", res);
    };
    return (
        <section className="max-w-fit border p-6 text-[21px] mx-auto mt-[50px]">
            <div className="text-[36px] text-center mb-4">Calculator</div>
            {/* Display area */}
            <div className="border">
                {/* Input section */}
                <div className="h-[50px] mx-2  overflow-scroll  no-scrollbar text-end">{expression}</div>
                {/* Results Section */}
                <div className="h-[30px]  m-2 overflow-scroll  no-scrollbar text-end">{result}</div>
            </div>

            {/* Buttons container */}
            <div className="flex flex-col gap-4 my-6 ">
                <div className="flex gap-4">
                    {/* Number buttons */}
                    <button
                        className="h-[56px] w-[192px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            setExpression("");
                        }}
                    >
                        AC
                    </button>

                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px] ml-auto"
                        onClick={() => {
                            handleSetInput("%");
                        }}
                    >
                        %
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("/");
                        }}
                    >
                        /
                    </button>
                </div>
                <div className="flex gap-4">
                    {/* Number buttons */}
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("1");
                        }}
                    >
                        1
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("2");
                        }}
                    >
                        2
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("3");
                        }}
                    >
                        3
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("*");
                        }}
                    >
                        x
                    </button>
                </div>
                <div className="flex gap-4">
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("4");
                        }}
                    >
                        4
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("5");
                        }}
                    >
                        5
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("6");
                        }}
                    >
                        6
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("-");
                        }}
                    >
                        -
                    </button>
                </div>
                <div className="flex gap-4">
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("7");
                        }}
                    >
                        7
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("8");
                        }}
                    >
                        8
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("9");
                        }}
                    >
                        9
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("+");
                        }}
                    >
                        +
                    </button>
                </div>
                <div className="flex gap-4">
                    {/* Symbol buttons */}
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput("0");
                        }}
                    >
                        0
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleSetInput(".");
                        }}
                    >
                        .
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px] flex justify-center items-center"
                        onClick={() => {
                            handleClear();
                        }}
                    >
                        <DailPadClearIcon />
                    </button>
                    <button
                        className="h-[56px] w-[96px] bg-[#EFEFEF] rounded-[15px]"
                        onClick={() => {
                            handleEvaluate();
                        }}
                    >
                        =
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Calculator;
