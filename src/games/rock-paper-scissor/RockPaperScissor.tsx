import _ from "lodash";
import { useState } from "react";
import LightModeIcon from "../../assets/rock-paper-scissor/icons/LightModeIcon";
import PaperIcon from "../../assets/rock-paper-scissor/icons/PaperIcon";
import RockIcon from "../../assets/rock-paper-scissor/icons/RockIcon";
import ScissorIcon from "../../assets/rock-paper-scissor/icons/ScissorIcon";
import { RockPaperScissorDataTypes } from "../../types/RockPaperScissorTypes";

const RockPaperScissor = () => {
    const [player] = useState("Sunil Kalikayi");
    const [computerScore] = useState(0);
    const [playerScore] = useState(0);

    const metaData = [
        {
            id: 1,
            code: "rock",
            img: <RockIcon height={160} width={200} />,
        },
        {
            id: 2,
            code: "paper",
            img: <PaperIcon height={200} width={200} />,
        },
        {
            id: 3,
            code: "scissor",
            img: <ScissorIcon height={200} width={200} />,
        },
        {
            id: 4,
            code: "computerDefault",
            img: (
                <img
                    src="/src/assets/rock-paper-scissor/images/rock-paper-scissor.gif"
                    alt=""
                    height={250}
                    width={250}
                />
            ),
        },
        {
            id: 5,
            code: "playerDefault",
            img: (
                <img
                    src="/src/assets/rock-paper-scissor/images/rock-paper-scissor.gif"
                    alt=""
                    height={250}
                    width={250}
                    className="-rotate-180"
                />
            ),
        },
    ];

    const [wonPlayer] = useState("Computer");
    const [computerChoice, setComputerChoice] = useState<RockPaperScissorDataTypes>(metaData[3]);
    const [playerChoice, setPlayerChoice] = useState<RockPaperScissorDataTypes>(metaData[4]);
    console.log("choise", computerChoice, playerChoice);

    const evaluateWinner = () => {
        // Comparing objects
        const isEqual = _.isEqual(computerChoice, playerChoice);
        if (isEqual) {
            console.log("Objects are equal.");
        } else {
            console.log("Objects are not equal.");
        }
    };

    const handlePlayerChoice = (code: string) => {
        // Find the element with the specified name
        const playerSelection = _.find(metaData, { code });
        console.log("player selectrio is", playerSelection);
        if (playerSelection) setPlayerChoice(playerSelection);

        // select random hand gesture
        const randomNumber = Math.floor(Math.random() * 3);
        setComputerChoice(metaData[randomNumber]);

        evaluateWinner();
    };

    return (
        <section className="px-[180px] text-[32px]">
            {/* Title Section */}
            <div className="flex items-center justify-between my-4 ">
                <p className="text-[48px] font-semibold">Rock Paper Scissors </p>
                <LightModeIcon />
            </div>

            {/* Score section */}
            <div className="flex justify-between">
                <div className="flex items-start gap-4">
                    <p>Computer : </p>
                    <p> {computerScore}</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>{player} : </p>
                    <p> {playerScore}</p>
                </div>
            </div>

            {/* Results Section */}
            <div className="flex items-center justify-center font-semibold text-[64px] my-4">
                <p>{wonPlayer} WON !</p>
                <img
                    src="/src/assets/rock-paper-scissor/images/winEmoji.png"
                    alt="win Emoji"
                    height={100}
                    width={100}
                />
            </div>

            {/* Display Section */}
            <div className="flex items-center justify-center gap-12 h-[260px]">
                {/* Computer Display */}
                <div>{computerChoice?.img}</div>

                <div>VS</div>

                {/* Player Display */}
                <div>{playerChoice?.img}</div>
            </div>

            {/* Choose Your Action Section  */}
            <div className="mt-4">
                <p className="text-center text-[24px]">Choose your move, rock paper or scissors?</p>

                {/* Button section */}
                <div className="text-[24px] font-semibold flex justify-evenly my-6  items-center">
                    <button
                        className="bg-[#DF2E38] h-[60px] w-[175px] rounded-[10px] uppercase text-white"
                        onClick={() => handlePlayerChoice("rock")}
                    >
                        Rock
                    </button>

                    <button
                        className="bg-[#DF2E38] h-[60px] w-[175px] rounded-[10px] uppercase text-white"
                        onClick={() => handlePlayerChoice("paper")}
                    >
                        Paper
                    </button>

                    <button
                        className="bg-[#DF2E38] h-[60px] w-[175px] rounded-[10px] uppercase text-white"
                        onClick={() => handlePlayerChoice("scissor")}
                    >
                        Scissor
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RockPaperScissor;
