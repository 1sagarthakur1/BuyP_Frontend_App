"use client"
// import Button from "../testcomponent/page.js"
import style from '../Style/loginSignup.module.css'
import Link from "next/link.js"
import Image from "next/image";
import { useState } from "react"
import passwordsvg from '@/../../public/password.svg';
import emailsvg from '@/../../public/email.svg';
import OtpLoder from '../Images/Otploding.gif'
import Message from './Message';
import Warning from './Warning';
import BASE_URL from '@/appConfig';

const Login = () => {
    const [email, setEmail] = useState("");
    const [emailFotp, setEmailFotp] = useState("");
    const [password, setPassword] = useState("");

    const [disableSendOTP, setDisableSendOTP] = useState('none');
    const [disableOTPblock, seDisableOTPblock] = useState("none")
    const [disableOTPenterOtp, setDisableOTPenterOtp] = useState("none");
    const [disable_otpEmailSubmitBut, setDisable_otpEmailSubmitBut] = useState(true);
    const [disable_otpSubmitBut, setDisable_otpSubmitBut] = useState(true);
    const [passwordReset, setPasswordReset] = useState(null);
    const [confirmPasswordReset, setConfirmPasswordReset] = useState(null)
    const [otpLoder, setOtpLoder] = useState("block");
    const [disablePasswrodSection, setDisablePasswrodSection] = useState(true);

    const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
    const [otpMessage, setOtpMessage] = useState(null);
    const [disable_ConfirmPassBut, setDisable_ConfirmPassBut] = useState(true)



    const [otp1, setOtp1] = useState(null);
    const [otp2, setOtp2] = useState(null);
    const [otp3, setOtp3] = useState(null);
    const [otp4, setOtp4] = useState(null);
    const [otp5, setOtp5] = useState(null);
    const [otp6, setOtp6] = useState(null);

    const LoginUser = () => {
        event.preventDefault();
        console.log(email, password);

        let so;
        const fetchData = async () => {
            try {
                let response = await fetch(`${BASE_URL}/api/user/loginUser`, {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: 'include',
                    body: JSON.stringify({ email, password })
                });

                response = await response.json();

                if (response.message == "Login successfully") {
                    // alert("Login successully");
                    const setCookie = (name, value, days) => {
                        const date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                        const expires = "expires=" + date.toUTCString();
                        document.cookie = name + "=" + value + ";" + expires + ";path=/";
                      };
                    
                    setCookie('token', response.token, 1);
                    
                    setOtpMessage("Login successfully")
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.href = '/';
                    }, 3000)
                } else {
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }

    const submitEmailForOtp = () => {
        event.preventDefault();
        setDisableOTPenterOtp("flex")

        const sendOtpForResetPass = async () => {

            try {
                let response = await fetch(`${BASE_URL}/api/user/otp_ForResetpassword`, {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: emailFotp })
                });

                response = await response.json();

                if (response.message == "OTP send successfully") {
                    seDisableOTPblock("flex");
                    setDisable_otpSubmitBut(false);
                    setOtpLoder("none")
                    setOtpMessageVisbal("block");

                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                    // alert(response.message)
                } else {
                    setOtpLoder("none");
                    setOtpMessageVisbal("block");
                    // alert(response.message);
                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        sendOtpForResetPass();
    }

    const submitOtpAndPasswordReset = () => {
        event.preventDefault();
        // setDisableOTP('flex');
        setDisable_ConfirmPassBut(false)

        const OTP = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;

        // console.log(OTP, passwordReset, confirmPasswordReset, emailFotp);

        const sendOtpForResetPass = async () => {

            try {
                let response = await fetch(`${BASE_URL}/api/user/reset_PasswordByOtp`, {
                    method: "Put",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: emailFotp, password: passwordReset, otp: OTP })
                });

                response = await response.json();

                if (response.message == "User password update successfully") {
                    // alert(response.message)

                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        sendAgain();
                    }, 3000)

                } else {
                    // alert(response.message)

                    setOtpMessage(response.message)
                    setOtpMessageVisbal("20px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        sendAgain();
                    }, 3000)

                }


            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };


        if (passwordReset === confirmPasswordReset) {
            sendOtpForResetPass();
        } else {
            // alert("your both password is diffrent")

            setOtpMessage("Your both password is different")
            setOtpMessageVisbal("20px")
            setTimeout(() => {
                setOtpMessageVisbal("-100px")
            }, 3000)
        }

    }


    const handallEmailForOTP = (e) => {
        setEmailFotp(e);
        setDisable_otpEmailSubmitBut(false);
    }

    const disable_SendOtp = () => {
        setDisableSendOTP("flex")
    }

    const sendAgain = () => {
        setDisableSendOTP("none")
        setDisableOTPenterOtp("none")
        setDisable_otpEmailSubmitBut(true);
        setDisable_otpSubmitBut(true);
        setEmailFotp('')
        seDisableOTPblock("none");
        setDisable_otpSubmitBut(true);
        setOtpLoder("block")
        setConfirmPasswordReset('');
        setPasswordReset('')
        setDisablePasswrodSection(true)
        // setOtpMessageVisbal("none")
        setOtp1('')
        setOtp2('')
        setOtp3('')
        setOtp4('')
        setOtp5('')
        setOtp6('')
    }

    return (
        <>
            <div className={style.mainContainer_ofLogin}>
                <form onSubmit={LoginUser} className={style.form_container}>
                    <div className={style.title_container}>
                        <p className={style.login_title}>Login to your Account</p>
                        <span className={style.subtitle}>Get started with our app, just create an account and enjoy the experience.</span>
                    </div>
                    <div className={style.input_container}>
                        <label className={style.input_label} htmlFor="email_field">Email</label>
                        <div className={style.inputLogo_container}>
                            <div className={style.logoOFinput_tag}>
                                <Image alt="" src={emailsvg} width={15} />
                            </div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" className={style.input_field}
                                id="email_field" required />
                        </div>
                    </div>
                    <div className={style.input_container}>
                        <label className={style.input_label} htmlFor="password_field">Password</label>
                        <div className={style.inputLogo_container}>
                            <div className={style.logoOFinput_tag}>
                                <Image alt="" src={passwordsvg} width={15} />
                            </div>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" title="Inpit title" name="input-name" type="password" className={style.input_field}
                                id="password_field" required />
                        </div>
                        <div><h5 onClick={() => disable_SendOtp()}>Forget Password</h5></div>
                    </div>
                    <button title="Sign In" type="submit" className={style.sign_in_btn}>
                        <span>Sign In</span>
                    </button>

                    <div className={style.separator}>
                        <hr className={style.line} />
                        <span>Or</span>
                        <hr className={style.line} />
                    </div>
                    <p className={style.signin}>create a account ?
                        <Link href={{ pathname: "/Pages/signup_login", query: { "Page": "SignUp" } }}>Signup</Link>
                    </p>
                    <p className={style.note}>Terms of use &amp; Conditions</p>
                </form>


                <form onSubmit={submitEmailForOtp} className={style.otp_Container} style={{ display: disableSendOTP }}>
                    <h4>Enter the email you entered while registering.</h4>

                    <div className={style.title_container}>
                        <span className={style.subtitle}>You will receive OTP on the email you entered.</span>
                    </div>

                    <div className={style.otpInnercontainer} style={{ width: "250px" }}>
                        <div style={{ width: "100%" }}>
                            <label className={style.input_label} htmlFor="email_field">Email</label>
                            <div className={style.inputLogo_container}>
                                <div className={style.logoOFinput_tag}>
                                    <Image alt="" src={emailsvg} width={15} />
                                </div>
                                <input value={emailFotp} onChange={(e) => handallEmailForOTP(e.target.value)} placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" className={style.input_field}
                                    id="email_field" required />
                            </div>
                        </div>
                    </div>
                    <button type='submit' className={style.submit_button} disabled={disable_otpEmailSubmitBut} style={{ backgroundColor: disable_otpEmailSubmitBut ? '#D38C57' : '#FC6736', color: disable_otpEmailSubmitBut ? 'rgba(88, 87, 87, 0.822)' : 'white', boxShadow: disable_otpEmailSubmitBut ? '' : '2px 2px 10px #FC6736' }}>Send OTP</button>
                    <p onClick={() => sendAgain()}>Back</p>
                </form>




                <form onSubmit={submitOtpAndPasswordReset} className={style.otp_Container} style={{ display: disableOTPenterOtp, marginBottom: "10px" }}>
                    <h5 className={style.login_title}>Reset Password</h5>
                    <div>
                        <Image alt="" style={{ display: otpLoder }} src={OtpLoder} width={60} />
                    </div>

                    <div>
                        <p>You will recive OTP (one time password) <br /> on it email for reset password</p>
                        <h5>{emailFotp}</h5>
                    </div>

                    <div className={style.otpInnercontainer} style={{ display: disableOTPblock }}>
                        <input value={otp1} onChange={(e) => setOtp1(e.target.value)} type='text' maxlength="1" className={style.otp_input} required />
                        <input value={otp2} onChange={(e) => setOtp2(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp3} onChange={(e) => setOtp3(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp4} onChange={(e) => setOtp4(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp5} onChange={(e) => setOtp5(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp6} onChange={(e) => setOtp6(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                    </div>

                    <div>
                        <div className={style.otpInnercontainer} style={{ width: "250px" }}>
                            <div style={{ width: "100%" }}>
                                <label className={style.input_label} htmlFor="password_field">New Password</label>
                                <div className={style.inputLogo_container}>
                                    <div className={style.logoOFinput_tag}>
                                        <Image alt="" src={passwordsvg} width={15} />
                                    </div>
                                    <input value={passwordReset} onChange={(e) => setPasswordReset(e.target.value)} placeholder="Password" title="Inpit title" name="input-name" type="password" className={style.input_field}
                                        id="password_field" disabled={otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? false : true} required />
                                </div>
                            </div>
                        </div>

                        <div className={style.otpInnercontainer} style={{ width: "250px" }}>
                            <div style={{ width: "100%" }}>
                                <label className={style.input_label} htmlFor="password_field">Confirm Password</label>
                                <div className={style.inputLogo_container}>
                                    <div className={style.logoOFinput_tag}>
                                        <Image alt="" src={passwordsvg} width={15} />
                                    </div>
                                    <input value={confirmPasswordReset} onChange={(e) => setConfirmPasswordReset(e.target.value)} placeholder="Confirm Password" title="Inpit title" name="input-name" type="password" className={style.input_field}
                                        id="password_field" disabled={otp1 && otp2 && otp3 && otp4 && otp5 && otp6 ? false : true} required />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type='submit' className={style.submit_button} disabled={disable_otpSubmitBut} style={{ backgroundColor: disable_otpSubmitBut ? '#D38C57' : '#FC6736', color: disable_otpSubmitBut ? 'rgba(88, 87, 87, 0.822)' : 'white', boxShadow: disable_otpSubmitBut ? '' : '2px 2px 10px #FC6736' }}>Submit</button>
                    <p onClick={() => sendAgain()}>Cancell</p>
                </form>
            </div>

            <Warning top={otpMessageVisbal} data={otpMessage} />
        </>
    )
}

export default Login;