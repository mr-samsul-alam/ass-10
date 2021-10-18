import React, { useState } from 'react';
import UseAuth from '../../Hooks/UseAuth';
// import "./LogIn.css"

const LogIn = () => {
    const { handleGoogleSignIn, user, registerByEmailPass, logInEmailPassword, logOut } =  UseAuth()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePass = (e) => {
        setPassword(e.target.value);
    }
    const handleRegister = () => {
        registerByEmailPass(email, password)
    }
    const handleLogIn = () => {
        logInEmailPassword(email, password)
    }

    return (
        <div className="mt-5">

            <input type="email" onChange={handleEmail} />
            <br />
            <input className="mt-2" type="password" onChange={handlePass} />
            <br />
            <button onClick={handleLogIn} className=" mt-5">
                 log in</button> <br />
            <button onClick={handleRegister} className=" mt-5">
                Register</button> <br />
            <button onClick={handleGoogleSignIn} className=" mt-5">
                Sign in With Google
            </button> <br />
            <button onClick={logOut} className=" mt-5">
                Sign Out  Google
            </button>
            <h1>{user.email}</h1>
        </div>
        // <div className="container">
        //     <div className="row">
        //         <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        //             <div className="card border-0 shadow rounded-3 my-5">
        //                 <div className="card-body p-4 p-sm-5">
        //                     <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
        //                     <form>
        //                         <div className="form-floating mb-3">
        //                             <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        //                             <label htmlFor="floatingInput">Email address</label>
        //                         </div>
        //                         <div className="form-floating mb-3">
        //                             <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        //                             <label htmlFor="floatingPassword">Password</label>
        //                         </div>

        //                         <div className="form-check mb-3">
        //                             <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck" />
        //                             <label className="form-check-label" htmlFor="rememberPasswordCheck">
        //                                 Remember password
        //                             </label>
        //                         </div>
        //                         <div className="d-grid">
        //                             <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
        //                                 in</button>
        //                         </div>
        //                         <hr className="my-4" />
        //                         <div className="d-grid mb-2">
        //                             <button  className="btn btn-google btn-login text-uppercase fw-bold" type="submit" onClick={handleGoogleSignIn}>
        //                                 <i className="fab fa-google me-2"></i> Sign in with Google
        //                             </button>
        //                         </div>
        //                         <div className="d-grid">
        //                             <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit" >
        //                                 <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
        //                             </button>
        //                         </div>
        //                     </form>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default LogIn;