import React, {useEffect, useState} from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"; // Corrected import statement
import { gapi } from "gapi-script";
import "./login.css"

const Login = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
                scope: ""
            })
        }
        gapi.load('client: auth2', start)
    })

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    const onSuccess = e => {
        alert("User signed in")
        console.log(e)
    }

    const onFailure = e => {
        alert("User sign in Failed")
        console.log(e)
    }

    return (
        <div className="bg">
        <div className="cover">
            <h1 className=" text-3xl">Login</h1>
            <input type="text" className="name" placeholder="Username" />
            <input type="password" className="pass" placeholder="Password" />

            <div className="login-btn" onClick={popup}>Login</div>

            <p className="text">Or</p>

            <div className="alt-login">
                <div className="facebook">
                <FacebookLogin
              appId="YOUR_FACEBOOK_APP_ID" // Replace with your Facebook App ID
              autoLoad={false}
              callback={onSuccess}
              onFailure={onFailure}
              render={(renderProps) => (
                <div
                  className="facebook"
                  onClick={renderProps.onClick}
                  style={{
                    background: "url('../../images/facebook.png')",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
              )}
            />
                </div>
                <div className="google">
                    <GoogleLogin className="black"
                        clientId="79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com"
                        buttonText=""
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={false} // alternative is true, which keeps the user signed in
                        icon={false}    // alt is true, and this puts the google logo on your button, but I don't like it
                        theme="dark"  // alternative is light, which is white
                    />
                </div>
            </div>

            <div className={popupStyle}>
                <h4>Login Failed</h4>
                <p>Username or password incorrect</p>
            </div>
            
        </div>
        </div>
    )
}

export default Login