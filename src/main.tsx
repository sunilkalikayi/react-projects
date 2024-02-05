import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import DailPad from "./dailPad/DailPad.tsx";
import RPSCoverPage from "./games/rock-paper-scissor/RPSCoverPage.tsx";
import RockPaperScissor from "./games/rock-paper-scissor/RockPaperScissor.tsx";
import "./index.css";
import { store } from "./redux/store.ts";

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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
