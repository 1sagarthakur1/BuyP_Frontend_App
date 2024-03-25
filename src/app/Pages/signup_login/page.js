"use client"
import style from '../../Style/loginSignup.module.css'
import style2 from '../../Style/loginSignup2.module.css'
import Login from '@/app/Components/login';
import shopingTroli from '../../Images/shopingTroli.png'
import Image from 'next/image';
import Signup from '@/app/Components/SginUp';


let css;

// import { useState } from 'react';
const Login_SignUpPage = ({ searchParams }) => {

    if (searchParams.Page === "SignUp") {
        css = style2;
    } else {
        css = style;
    }
    return (
        <div className={style.mainContainer_SignupLoginPage}>
            <div className={css.MainContainer_login_signup}>
                <Image className={css.signup_img} src={shopingTroli} alt="" />
                {
                    searchParams.Page == "SignUp" ? (
                        <Signup/>
                    ) : (
                        <Login />
                    )
                }
            </div>
        </div>
    )
}

export default Login_SignUpPage;