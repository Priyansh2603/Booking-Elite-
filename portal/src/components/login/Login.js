import React , { Component } from "react";
import fire from "./fire";
import { Link } from 'react-router-dom';
import "./login.css";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

const auth = getAuth(fire);
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: "",
            password: "",
        };
    }
    login(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, this.state.email, this.state.password)
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    signup(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            this.state.email,
            this.state.password
        )
            .then((u) => {
                console.log(u);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    render() {
        return (
            <div>
                
                <form>
                    <input
                        type="name"
                        id="name"
                        name="name"
                        placeholder="enter username"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="enter email address"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <input
                        name="password"
                        type="password"
                        onChange={this.handleChange}
                        id="password"
                        placeholder="enter password"
                        value={this.state.password}
                    />
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
                {/* <Link to="#"></Link> */}
                <div id="back">
                    <Link to="/">Back to Home</Link>
                </div>
            </div>
        );
    }
}
export default Login;