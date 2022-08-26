import React , { Component } from "react";
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
                <h1>Hey,{this.user}</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
export default Home;