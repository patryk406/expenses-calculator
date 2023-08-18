import {Form, NavLink} from "react-router-dom";

// library
import {TrashIcon} from "@heroicons/react/24/solid";

// assets
import logomark from "../assets/logomark.svg";

// helpers
import {storeData} from "../helpers.js";

const Nav = ({userName}) => {
    return (
        <nav>
            <NavLink to="/" aria-label="Go to home">
                <img src={logomark} alt="Logo mark" height={30}/>
                <span>HomeBudget</span>
            </NavLink>
            {
                !userName && (
                    <Form method="post" action="login" onSubmit={(event)=>{
                        if(!confirm("Create new user?")) {
                            event.preventDefault();
                        }
                    }}>
                        <button type="submit" className="btn btn--primary">
                            <span>Login</span>
                        </button>
                    </Form>)
            }
            {
                userName && (
                    <Form method="post" action="logout" onSubmit={(event)=>{
                        if(!confirm("Delete user and all data?")) {
                            event.preventDefault();
                        }
                    }}>
                        <button type="submit" className="btn btn--warning">
                            <span>Delete User</span>
                            <TrashIcon width={20}/>
                        </button>
                    </Form>
                    )
            }
        </nav>
    );
}

 export default Nav;