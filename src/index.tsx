import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// * main app component
import App from "App";

// * main style
import "assets/styles/main.css";

const MOUNT_NODE = document.getElementById("root") as HTMLElement;

interface Props {
    Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
    <React.StrictMode>
        <Component />
    </React.StrictMode>
);

const render = (Component: typeof App) => {
    ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
