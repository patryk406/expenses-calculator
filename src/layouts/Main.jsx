import {fetchData} from "../helpers.js";
import {Outlet, useLoaderData} from "react-router-dom";

// assets
import wave from "../assets/wave.svg";

// components
import Nav from "../components/Nav.jsx";

export function mainLoader() {
    const userName = fetchData("userName");
    return {userName};
}

const Main = () => {
    const {userName} = useLoaderData();

    return (
        <div className="layout">
            <Nav userName={userName}/>
            <main>
                <Outlet/>
            </main>
            <img src={wave} alt="Wave that pass ocean"/>
        </div>
    );
}

export default Main;