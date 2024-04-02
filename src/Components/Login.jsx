import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";
import { useState } from "react";
const Login = () => {
    const [user,setUser]=useState(null);
    const auth =getAuth(app);
    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        })
        .catch(error=>{
            console.log('error',error.message);
        })
        
    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result)
            setUser(null);
        })
        .catch(error=>{
             console.log(error);

        })
    }
    const handleGithubSignIn=()=>{
        signInWithPopup(auth,githubProvider)
       .then(result=>{
        const LoggedUser=result.user;
        setUser(LoggedUser)})
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div>
            {user ?<button onClick={handleSignOut}>Sign Out</button>
            :
            <div>
                <button onClick={handleGoogleSignIn}>Login</button>
            <button onClick={handleGithubSignIn}>GitHub LogIN</button>
            </div>
             }
            {user && <div>

            <h3>User: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
            </div>
            
            }
        </div>
    );
};
export default Login;