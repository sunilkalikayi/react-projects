import _ from "lodash";
import { useState } from "react";
import LightModeIcon from "../../assets/rock-paper-scissor/icons/LightModeIcon";
import PaperIcon from "../../assets/rock-paper-scissor/icons/PaperIcon";
import RockIcon from "../../assets/rock-paper-scissor/icons/RockIcon";
import ScissorIcon from "../../assets/rock-paper-scissor/icons/ScissorIcon";
import { RockPaperScissorDataTypes } from "../../types/RockPaperScissorTypes";

const RockPaperScissor = () => {
    /**
     * Represents the name of the player.
     * This state stores the name of the player participating in the game.
     */
    const [player] = useState("Sunil Kalikayi");

    /**
     * Stores the score of the computer.
     * This state keeps track of the computer's score throughout the game.
     */
    const [computerScore, setComputerScore] = useState(0);

    /**
     * Stores the score of the player.
     * This state keeps track of the player's score throughout the game.
     */
    const [playerScore, setPlayerScore] = useState(0);

    /**
     * Array containing metadata for rock, paper, and scissor options, along with default images for player and computer.
     */
    const metaData: RockPaperScissorDataTypes[] = [
        {
            id: 1,
            code: "rock",
            img: <RockIcon height={180} width={200} />,
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

    /**
     * Indicates whether the game resulted in a draw.
     * This state is useful for displaying a message or handling logic specific to a draw scenario.s
     */
    const [isDraw, setIsDraw] = useState(false);

    /**
     * Represents the winner of the game (either "Player" or "Computer").
     * Keeps track of who won the game so that appropriate messages or actions can be triggered accordingly.
     */
    const [wonPlayer, setWonPlayer] = useState<string>();

    /**
     * Stores the computer's choice of rock, paper, or scissors.
     * This state holds the computer's chosen hand gesture, which is used for comparison with the player's choice to determine the winner.
     */
    const [computerChoice, setComputerChoice] = useState<RockPaperScissorDataTypes>(metaData[3]);

    /**
     * Stores the player's choice of rock, paper, or scissors.
     * Keeps track of the player's selected hand gesture, which is compared with the computer's choice to determine the winner.
     */
    const [playerChoice, setPlayerChoice] = useState<RockPaperScissorDataTypes>(metaData[4]);

    /**
     * Stores the rule of the game (e.g., "Rock beats Scissors").
     * This state can be used to display the current rule of the game, providing guidance to the players on which hand gestures beat others.
     */
    const [rule, setRule] = useState("");

    /**
     * Evaluates the winner based on the player's and computer's selections.
     * Updates game state variables such as draw status, winner, scores, and the current rule.
     * @param playerSelection The player's selected hand gesture.
     * @param computerSelection The computer's selected hand gesture.
     */
    const evaluateWinner = (
        playerSelection: RockPaperScissorDataTypes,
        computerSelection: RockPaperScissorDataTypes
    ) => {
        // Comparing objects
        // If both choices are equal, it's a draw
        const isEqual = _.isEqual(playerSelection, computerSelection);
        if (isEqual) {
            setIsDraw(true);
            setRule("");
        }

        // Rock Beats Scissor -> Whoever chooses Rock will Win
        if (computerSelection?.code == "rock" && playerSelection?.code == "scissor") {
            setWonPlayer("Computer");
            setComputerScore((score) => score + 1);
            setRule("Rock Beats Scissor");
        } else if (playerSelection?.code == "rock" && computerSelection?.code == "scissor") {
            setWonPlayer(player);
            setPlayerScore((score) => score + 1);
            setRule("Rock Beats Scissor");
        }
        // Scissor beats Paper -> Whoever chooses Scissor will Win
        else if (computerSelection?.code == "scissor" && playerSelection?.code == "paper") {
            setWonPlayer("Computer");
            setComputerScore((score) => score + 1);
            setRule("Scissor Beats Paper");
        } else if (playerSelection?.code == "scissor" && computerSelection?.code == "paper") {
            setWonPlayer(player);
            setPlayerScore((score) => score + 1);
            setRule("Scissor Beats Paper");
        }
        // Paper beats Rock -> Whoever chooses Paper will Win
        else if (computerSelection?.code == "paper" && playerSelection?.code == "rock") {
            setWonPlayer("Computer");
            setComputerScore((score) => score + 1);
            setRule("Paper Beats Rock");
        } else if (playerSelection?.code == "paper" && computerSelection?.code == "rock") {
            setWonPlayer(player);
            setPlayerScore((score) => score + 1);
            setRule("Paper Beats Rock");
        }
    };

    /**
     * Handles the player's choice of rock, paper, or scissors.
     * Resets the draw state, sets the player's choice, selects a random computer choice, and evaluates the winner.
     * @param code The code representing the player's choice (rock, paper, or scissor).
     */
    const handlePlayerChoice = (code: string) => {
        // Reset the draw state
        setIsDraw(false);

        // Find the element with the specified code in the metadata array
        const playerSelection = _.find(metaData, { code });
        if (playerSelection) setPlayerChoice(playerSelection);

        // Select a random hand gesture for the computer
        const randomNumber = Math.floor(Math.random() * 3);
        setComputerChoice(metaData[randomNumber]);

        // Evaluate the winner based on the player's and computer's choices
        if (playerSelection && metaData[randomNumber]) evaluateWinner(playerSelection, metaData[randomNumber]);
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
                    <p className="font-semibold"> {computerScore}</p>
                </div>
                <div className="flex items-center gap-4">
                    <p>{player} : </p>
                    <p className="font-semibold"> {playerScore}</p>
                </div>
            </div>
            {/* Results Section */}
            <div className=" font-semibold text-[64px] my-4 text-center">
                {isDraw ? (
                    <p className="text-[#e88651]">Draw ...!</p>
                ) : wonPlayer ? (
                    <div className="flex items-center justify-center">
                        <p className="text-[#54c78d]">{wonPlayer} WON ...!</p>
                        <img
                            src="/src/assets/rock-paper-scissor/images/winEmoji.png"
                            alt="win Emoji"
                            height={100}
                            width={100}
                        />
                    </div>
                ) : (
                    <p>Start Game..!</p>
                )}
            </div>
            {/* Display Section */}
            <div className="flex items-center justify-center gap-12 h-[260px]">
                {/* Computer Display */}
                <div>{computerChoice?.img}</div>

                <div>VS</div>

                {/* Player Display */}
                <div>{playerChoice?.img}</div>
            </div>
            {/* Display rule */}
            <div className="text-[24] text-center  h-[40px] -mt-4">{rule ? rule : ""}</div>
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
