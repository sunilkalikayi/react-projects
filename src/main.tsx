import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import SignIn from "./auth/SignIn.tsx";
import SignUp from "./auth/SignUp.tsx";
import Calculator from "./calculator/Calculator.tsx";
import Alaram from "./clock/Alaram.tsx";
import AnalogClock from "./clock/AnalogClock.tsx";
import DigitalClock from "./clock/DigitalClock.tsx";
import StopWatch from "./clock/StopWatch.tsx";
import Timer from "./clock/Timer.tsx";
import DailPad from "./dailPad/DailPad.tsx";
import RPSCoverPage from "./games/rock-paper-scissor/RPSCoverPage.tsx";
import RockPaperScissor from "./games/rock-paper-scissor/RockPaperScissor.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import TodoApp from "./todoApp/TodoApp.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/dail-pad",
        element: <DailPad />,
    },
    {
        path: "/rock-paper-scissor",
        element: <RPSCoverPage />,
    },
    {
        path: "/rock-paper-scissor/play",
        element: <RockPaperScissor />,
    },
    {
        path: "/calculator",
        element: <Calculator />,
    },
    {
        path: "/timer",
        element: <Timer />,
    },
    {
        path: "/digital-clock",
        element: <DigitalClock />,
    },
    {
        path: "/analog-clock",
        element: <AnalogClock />,
    },
    {
        path: "/stop-watch",
        element: <StopWatch />,
    },
    {
        path: "/alaram",
        element: <Alaram />,
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/todo-app",
        element: <TodoApp />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
