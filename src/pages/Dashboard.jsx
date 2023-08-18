
// helper function
import {fetchData} from "../helpers.js";
import {useLoaderData} from "react-router-dom";
// loader
export function dashboardLoader() {
    const userName = fetchData('userName');

    return {userName};
}

const Dashboard = () => {
    const { userName } = useLoaderData();
    return (
        <div>
            <h1>Hello {userName}</h1>
        </div>
    );
}

export default Dashboard;