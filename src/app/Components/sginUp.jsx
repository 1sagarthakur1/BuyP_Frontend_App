"use client"
import Link from 'next/link'
import style from '../Style/loginSignup.module.css'
import Image from 'next/image';
import OtpLoder from '../Images/Otploding.gif'

import { useEffect, useState } from 'react'
import Warning from './Warning';
import BASE_URL from '@/appConfig'


export default function SignUp() {
    const [username, setUsrename] = useState("");
    const [dateOfBirth, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmpass] = useState("");

    const [disable_otpContainer, setDisable_otpContainer] = useState("none")
    const [disable_otpSubmitBut, setDisable_otpSubmitBut] = useState(true);
    const [otpLoder, setOtpLoder] = useState("block");
    const [otpMessage, setOtpMessage] = useState(null);
    const [otpMessageVisbal, setOtpMessageVisbal] = useState("none");

    const [warningVisbal, setWarningVisbal] = useState("-100px");
    const [warning, setWarning] = useState(null);

    const [otp1, setOtp1] = useState(null);
    const [otp2, setOtp2] = useState(null);
    const [otp3, setOtp3] = useState(null);
    const [otp4, setOtp4] = useState(null);
    const [otp5, setOtp5] = useState(null);
    const [otp6, setOtp6] = useState(null);

    const signupUser = () => {
        event.preventDefault();
        if (password !== confirm_password) {
            // alert("You are giving diffrent Password")
            setWarning("You are giving diffrent Password")
            warningVisbal("20px")
            setTimeout(() => {
                setWarningVisbal("-100px")
            }, 3000)
        } else {

            setDisable_otpContainer("flex")

            const fetchData = async () => {
                try {
                    let response = await fetch(`${BASE_URL}/api/user/sendOtp_forRagister`, {
                        method: "Post",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ username, dateOfBirth, gender, mobile, email, password })
                    });

                    response = await response.json();

                    // alert(response.message);
                    if (response.message == "OTP sent successfully") {
                        setDisable_otpSubmitBut(false);
                    }
                    setOtpLoder("none");
                    setOtpMessage(response.message);
                    setOtpMessageVisbal("block");
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();

        }

    }

    const userRagisterByOTP = () => {
        event.preventDefault();
        // alert(otp1+""+otp2+""+otp3+""+otp4+""+otp5+""+otp6+" "+email)
        const OTPis = otp1 + "" + otp2 + "" + otp3 + "" + otp4 + "" + otp5 + "" + otp6;

        const fetchDataForRagister = async () => {
            try {
                let response = await fetch(`${BASE_URL}/api/user/userRagister_ByOtp`, {
                    method: "Post",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, otp: OTPis })
                });

                response = await response.json();

                if (response.message == "User ragister successfully") {
                    setOtpMessage(response.message);
                    window.location.href = '/Pages/signup_login'
                }
                setOtpMessage(response.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataForRagister();
    }

    const sendAgain = () => {
        setDisable_otpContainer("none")
        setDisable_otpSubmitBut(true);
        setOtpLoder("block")
        setOtpMessage(null)
        setOtpMessageVisbal("none")
        setOtp1('')
        setOtp2('')
        setOtp3('')
        setOtp4('')
        setOtp5('')
        setOtp6('')
    }

    return (
        <>
            <div className={style.mainContainer_ofSinupLoginform}>
                <form onSubmit={signupUser} className={style.form}>
                    <p className={style.title}>Register </p>
                    <p className={style.message}>Signup now and get full access to our app. </p>

                    <div className={style.input_container}>
                        <label className={style.input_label} htmlFor="username">User Name</label>
                        <div className={style.inputLogo_container}>
                            <div className={style.logoOFinput_tag}>
                                <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M160-80q-33 0-56.5-23.5T80-160v-440q0-33 23.5-56.5T160-680h200v-120q0-33 23.5-56.5T440-880h80q33 0 56.5 23.5T600-800v120h200q33 0 56.5 23.5T880-600v440q0 33-23.5 56.5T800-80H160Zm0-80h640v-440H600q0 33-23.5 56.5T520-520h-80q-33 0-56.5-23.5T360-600H160v440Zm80-80h240v-18q0-17-9.5-31.5T444-312q-20-9-40.5-13.5T360-330q-23 0-43.5 4.5T276-312q-17 8-26.5 22.5T240-258v18Zm320-60h160v-60H560v60Zm-200-60q25 0 42.5-17.5T420-420q0-25-17.5-42.5T360-480q-25 0-42.5 17.5T300-420q0 25 17.5 42.5T360-360Zm200-60h160v-60H560v60ZM440-600h80v-200h-80v200Zm40 220Z" /></svg>
                            </div>
                            <input value={username} onChange={(e) => setUsrename(e.target.value)} placeholder="User Full Name" title="Inpit title" name="username" type="text" className={style.input_field}
                                id="email_field" maxLength="20" required />
                        </div>
                    </div>


                    <div className={style.password_container}>
                        <div className={style.input_container}>
                            <label className={style.input_label} htmlFor="dateOfBirth">Date of birth</label>
                            <div className={style.inputLogo_container}>
                                <div className={style.logoOFinput_tag}>
                                    <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" /></svg>
                                </div>
                                <input value={dateOfBirth} onChange={(e) => setDob(e.target.value)} placeholder="DOB" title="Inpit title" name="dateOfBirth" type="date" className={style.input_field}
                                    id="email_field" required />
                            </div>
                        </div>


                        <div className={style.input_container}>
                            <label className={style.input_label} htmlFor="gender">Gender</label>
                            <div className={style.inputLogo_container}>
                                <div className={style.logoOFinput_tag}>
                                    <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M480-360q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM440-40v-80h-80v-80h80v-84q-78-14-129-75t-51-141q0-33 9.5-65t28.5-59l-26-26-56 56-56-56 56-57-76-76v103H60v-240h240v80H197l76 76 57-56 56 56-56 57 26 26q27-20 59-29.5t65-9.5q33 0 65 9.5t59 29.5l159-159H660v-80h240v240h-80v-103L661-625q19 28 29 59.5t10 65.5q0 80-51 141t-129 75v84h80v80h-80v80h-80Z" /></svg>
                                </div>
                                <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)} placeholder="gender" title="Inpit title" type="select" className={style.input_field}
                                    id="email_field" required >
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={style.input_container}>
                        <label className={style.input_label} htmlFor="mobile">Mobile</label>
                        <div className={style.inputLogo_container}>
                            <div className={style.logoOFinput_tag}>
                                <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z" /></svg>
                            </div>
                            <input value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="mobile" title="Inpit title" name="mobile" type="number" className={style.input_field}
                                id="email_field" min="1000000000" max="9999999999" required />
                        </div>
                    </div>


                    <div className={style.input_container}>
                        <label className={style.input_label} htmlFor="email">Email</label>
                        <div className={style.inputLogo_container}>
                            <div className={style.logoOFinput_tag}>
                                <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                            </div>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" title="Inpit title" name="email" type="email" className={style.input_field}
                                id="email_field" required />
                        </div>
                    </div>

                    <div className={style.password_container}>
                        <div className={style.input_container}>
                            <label className={style.input_label} htmlFor="password">Password</label>
                            <div className={style.inputLogo_container}>
                                <div className={style.logoOFinput_tag}>
                                    <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" /></svg>
                                </div>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" title="Inpit title" name="password" type="password" className={style.input_field}
                                    id="password" min="2" max="20" required />
                            </div>
                        </div>
                        <div className={style.input_container}>
                            <label className={style.input_label} htmlFor="confirm_password">Conform password</label>
                            <div className={style.inputLogo_container}>
                                <div className={style.logoOFinput_tag}>
                                    <svg fill="#0C2D57" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="15"><path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z" /></svg>
                                </div>
                                <input value={confirm_password} onChange={(e) => setConfirmpass(e.target.value)} placeholder="confirm password" title="Inpit title" name="confirm_password" type="password" className={style.input_field}
                                    id="confirm password" min="2" max="20" required />
                            </div>
                        </div>
                    </div>



                    <button type='submit' className={style.submit}>Send Otp</button>
                    <p className={style.signin}>Already have an acount ?
                        <Link href={{ pathname: "/Pages/signup_login", query: { "Page": "Login" } }}>Signin</Link>
                    </p>
                </form>
                <form onSubmit={userRagisterByOTP} className={style.otp_Container} style={{ display: disable_otpContainer }}>
                    <div>
                        <Image alt="" style={{ display: otpLoder }} src={OtpLoder} width={60} />
                        <p style={{ display: otpMessageVisbal }}>{otpMessage}</p>
                    </div>
                    <div>
                        <p>You will recive OTP (one time password) <br /> on it email</p>
                        <h5>{email}</h5>
                    </div>
                    <div className={style.otpInnercontainer}>
                        <input value={otp1} onChange={(e) => setOtp1(e.target.value)} type='text' maxlength="1" className={style.otp_input} required />
                        <input value={otp2} onChange={(e) => setOtp2(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp3} onChange={(e) => setOtp3(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp4} onChange={(e) => setOtp4(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp5} onChange={(e) => setOtp5(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                        <input value={otp6} onChange={(e) => setOtp6(e.target.value)} type="text" maxlength="1" className={style.otp_input} required />
                    </div>
                    <button type='submit' className={style.submit_button} disabled={disable_otpSubmitBut} style={{ backgroundColor: disable_otpSubmitBut ? '#D38C57' : '#FC6736', color: disable_otpSubmitBut ? 'rgba(88, 87, 87, 0.822)' : 'white', boxShadow: disable_otpSubmitBut ? '' : '2px 2px 10px #FC6736' }}>Submit</button>
                    <p onClick={() => sendAgain()}>send again</p>
                </form>
            </div>
            <Warning />
        </>
    )
}
