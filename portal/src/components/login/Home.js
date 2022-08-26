import React , { Component} from "react";
import { Link } from "react-router-dom";
import fire from "./fire";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(fire);

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    logout() {
        signOut(auth);
    }
    render() {
        return (
            <div>
                <h1>You've Logged in successfully.</h1>
                <button onClick={this.logout}>Logout</button>
               <button> <Link to="/login/register">Regiter Your Propery </Link></button>
                <button><Link to="/">Back to Home</Link></button>
            </div>
        );
    }
}
export default Home;