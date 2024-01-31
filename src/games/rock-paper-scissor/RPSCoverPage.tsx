import { useNavigate } from "react-router-dom";
import Circle from "../../assets/icons/CircleIcon";
import DevTagName from "../../components/DevTagName";

const RPSCoverPage = () => {
    const navigate = useNavigate  ();

    return (
        <section className="bg-[#D7D7D7] h-[100vh]">
            <img
                src="/src/assets/rock-paper-scissor/images/rock-paper-scissor-logo.png"
                alt="rock-paper-scissor-logo"
                height={500}
                width={500}
                className="absolute right-0"
            />
            <div className="flex flex-col justify-center h-full w-[850px] ml-[100px]">
                <h1 className="text-[72px] font-semibold">Rock - Paper - Scissors</h1>
                <DevTagName name="Sunil Kalikayi" year={2024} />
                <button
                    className=" mt-12 flex items-center gap-4 p-4 bg-white max-w-fit text-[24px] font-semibold rounded-[24px] ml-auto"
                    onClick={() => {
                        navigate("/rock-paper-scissor/play");
                    }}
                >
                    <Circle height={24} width={24} />
                    <p>Play when you can</p>
                </button>
            </div>
        </section>
    );
};

export default RPSCoverPage;
