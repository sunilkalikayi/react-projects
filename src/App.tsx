import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
    const navigate = useNavigate();
    return (
        <section>
            <h1>Have fun</h1>
            <section>
                <button
                    onClick={() => {
                        navigate("/rock-paper-scissor");
                    }}
                >
                    Rock-Paper-Scissor
                </button>
            </section>
        </section>
    );
}

export default App;
