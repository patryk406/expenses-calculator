import {fetchData} from "../helpers.js";
import {Outlet, useLoaderData} from "react-router-dom";

import wave from "../assets/wave.svg";

export function mainLoader() {
    const userName = fetchData("userName");
    return {userName};
}

const Main = () => {
    const {userName} = useLoaderData();

    return (
        <div className="layout">
            <Nav />
            <main>
                <Outlet/>
            </main>
            <img src={wave} alt="Wave that pass ocean"/>
        </div>
    );
}

export default Main;