// rrd imports
import {redirect} from "react-router-dom";

// helpers
import {storeData} from "../helpers.js";

export async function loginAction() {
// delete the user
    storeData('userName', 'guest');
// return redirect
    return redirect('/')
}