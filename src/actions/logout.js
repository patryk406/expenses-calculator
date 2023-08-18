// rrd imports
import {redirect} from "react-router-dom";

// helpers
import {removeData} from "../helpers.js";

export async function logoutAction() {
// delete the user
    removeData('userName');
// return redirect
    return redirect('/')
}