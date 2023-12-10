// import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './SignInUp.css';
// import { useNavigate } from "react-router-dom";
// import * as client from "./client";

// function SignIn () {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const handleLogin =  async () => {
//         if (!(username === ""&& password === "")) {
//             try {
//                 await dispatch(loginThunk({username, password}));
//                 if (!currentUser?._id) {
//                     setLoginState("failed");
//                     setPassword("")
//                 }
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//     };
//     return(
//         <div className="d-flex flex-row justify-content-center align-items-center signin-container">
//             <h1>Welcome back</h1>
//             <div className="d-flex flex-column align-items-start signin-form-container">
//                 <h4>Sign In</h4>
//                 <div>
//                 <div className="row pb-4">
//                     <input
//                         className="form-control py-2" 
//                         id="username"
//                         type="text" 
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setEmail(e.target.value)}>
//                     </input>
//                 </div>
//                 <div className="row pb-4">
//                     <input
//                     className="form-control py-2"
//                     id="password"
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                             handleLogin();
//                         }
//                     }}>
//                     </input>
//                 </div>
//                 <div className="row pt-3">
//                     <button type="button" className="btn py-2">
//                         <p>Login</p>
//                     </button>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SignIn;