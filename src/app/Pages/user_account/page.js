"use client"
import style from '../../Style/userAccount.module.css'
import style2 from '../../Style/address.module.css'
import addUserImgesvg from '@../../../public/add-user-image.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Address from '@/app/Components/Address'
import Link from 'next/link'
import Loder from '@/app/Components/Loder'
import Warning from '@/app/Components/Warning';
import BASE_URL from '@/appConfig';

export default function page() {

    const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
    const [otpMessage, setOtpMessage] = useState(null);

    const [token, setCookieValue] = useState('');
    const [isLoding, setIsLoding] = useState(true);

    useEffect(() => {
        // Function to get cookie value by name
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        };

        const yourCookieValue = getCookie('token');

        setCookieValue(yourCookieValue);
    }, []);

    const [underLine, setUnderLine] = useState("");
    const [underLine2, setUnderLine2] = useState("");

    const [editButtNon_forUname, setEditButtNon_forUname] = useState("flex")
    const [saveButtNon_forUname, setSaveButtNon_forUname] = useState("none")

    const [editButtNon_forPdetails, setEditButtNon_forPdetails] = useState("flex")
    const [saveButtNon_forPdetails, setSaveButtNon_forPdetails] = useState("none")

    const [editUnameDisable, setEditUnameDisable] = useState(true);
    const [editPdetailsDisable, setEditPdetailsDisable] = useState(true);


    const [username, setUsername] = useState("User Full Name");
    const [dateOfBirth, setDob] = useState("");
    const [mobile, setMobile] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");

    const [widthSaveButt_userName, setWidthSaveButt_userName] = useState("80px");



    const changeUserName = () => {
        setEditUnameDisable(false)
        setUnderLine("2px solid #0C2D57")
        setEditButtNon_forUname("none")
        setSaveButtNon_forUname("flex")
    }
    const saveUserName = () => {
        event.preventDefault();
        setEditUnameDisable(true)
        setUnderLine("0px")
        setEditButtNon_forUname("flex")
        setSaveButtNon_forUname("none")
        setWidthSaveButt_userName("70px")

        const updateUser = async () => {
            try {
                // const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/update_user`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username })
                });
                const newData = await response.json();
                setOtpMessage(newData.message)
                setOtpMessageVisbal("20px")
                setTimeout(() => {
                    setOtpMessageVisbal("-100px")
                    setWidthSaveButt_userName("80px")
                    // window.location.reload();
                }, 3000)
                // alert(newData.message);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        updateUser();
    }


    const changePersnalDetails = () => {
        setEditPdetailsDisable(false)
        setUnderLine2("1px solid black")
        setEditButtNon_forPdetails("none")
        setSaveButtNon_forPdetails("flex")
    }
    const savePersnalDetails = () => {
        event.preventDefault();
        setEditPdetailsDisable(true)
        setUnderLine2("0px")
        setEditButtNon_forPdetails("flex")
        setSaveButtNon_forPdetails("none")

        // alert(dateOfBirth+" "+gender+" "+mobile)

        const savePersnalD = async () => {
            try {
                // const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/update_user`, {
                    method: "Put",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ dateOfBirth, gender, mobile })
                });
                const newData = await response.json();
                setOtpMessage(newData.message)
                setOtpMessageVisbal("20px")
                setTimeout(() => {
                    setOtpMessageVisbal("-100px")
                    // window.location.reload();
                }, 3000)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        savePersnalD();
    }


    // current user
    useEffect(() => {
        const fetchCurrentData = async () => {
            try {
                // const token = JSON.parse(localStorage.getItem("data"));
                // console.log(token)
                const response = await fetch(`${BASE_URL}/api/user/currentUser`, {
                    method: "Get",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                const newData = await response.json();
                if (newData.user) {

                    setUsername(newData.user.username)

                    const formattedDate = newData.user.dateOfBirth.split('T')[0];
                    setDob(formattedDate)
                    setGender(newData.user.gender)
                    setMobile(newData.user.mobile)
                    setEmail(newData.user.email)
                    setIsLoding(false)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCurrentData();
    }, [token])

    const logoutUser = async () => {

        try {
            const response = await fetch(`${BASE_URL}/api/user/logOutUser`, {
                method: "Get",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const newData = await response.json();


            // alert(newData.message);
            setOtpMessage(newData.message)
            setOtpMessageVisbal("20px")
            setTimeout(() => {
                setOtpMessageVisbal("-100px")
                window.location.href = '/';
            }, 3000)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        // alert("logout")

    }

    return (
        <>
            {isLoding ? (<Loder />) : (
                <>
                    <form onSubmit={saveUserName} className={style.first_div_account}>
                        <div className={style.allFirstButton}>
                            <Link href="/Pages/orders">
                                <button>Orders</button>
                            </Link>
                            <Link href="/Pages/cart">
                                <button>Cart</button>
                            </Link>
                        </div>
                        <div className={style.first_div1_account}>
                            <Image alt=" " src={addUserImgesvg} width={70} />
                        </div>
                        <div className={style.first_div2_account}>
                            <div>
                                <input style={{ borderBottom: underLine }} className={style.input_userfirstname} placeholder='User full name' value={username} onChange={(e) => setUsername(e.target.value)} disabled={editUnameDisable} required />
                            </div>
                            <button type="button" style={{ display: editButtNon_forUname }} onClick={changeUserName}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>Edit</button>
                            <button type="submit" style={{ display: saveButtNon_forUname, width: widthSaveButt_userName }}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>Save</button>
                        </div>
                    </form>

                    <form onSubmit={savePersnalDetails} className={style.second_div_account}>
                        <h4>Persnal details</h4>
                        <hr style={{ margin: "5px 0px" }} />
                        <div className={style.second_div_buttWala}>
                            <div className={style.second_div1_account}>
                                <label>Date of birth :</label>
                                <h3>{dateOfBirth}</h3>
                                <input type='date' style={{ borderBottom: underLine2, width: "16px" }} value={dateOfBirth} onChange={(e) => setDob(e.target.value)} disabled={editPdetailsDisable} required />
                            </div>
                            <div className={style.first_div2_account}>
                                <button type="button" style={{ display: editButtNon_forPdetails }} onClick={changePersnalDetails}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>Edit</button>
                                <button type="submit" style={{ display: saveButtNon_forPdetails }}><svg xmlns="http://www.w3.org/2000/svg" fill="white" height="17" viewBox="0 -960 960 960" width="17"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" /></svg>Save</button>
                            </div>
                        </div>
                        <div className={style.second_div1_account}>
                            <label>Mobile :</label>
                            <input type='number' style={{ borderBottom: underLine2, width: "100px" }} value={mobile} onChange={(e) => setMobile(e.target.value)} disabled={editPdetailsDisable} required />
                        </div>

                        <div className={style.second_div1_account}>
                            <label>Gender :</label>
                            <select style={{ borderBottom: underLine2, width: "100px" }} value={gender} onChange={(e) => setGender(e.target.value)} disabled={editPdetailsDisable} required>
                                <option value="">Select gender</option>
                                <option value="MALE">MALE</option>
                                <option value="FEMALE">FEMALE</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                        </div>

                        <div className={style.second_div1_account}>
                            <label>Email :</label>
                            <h3>{email}</h3>
                        </div>
                    </form>
                    <h4>Address</h4>
                    <hr />
                    <div className={style.address_div}>
                        <Address />
                    </div>
                    <button onClick={() => logoutUser()} className={style.logoutButt}>Log Out</button>
                    <div style={{ margin: "0px 0px 50px 0px" }}>
                    </div>
                </>
            )}
            <Warning top={otpMessageVisbal} data={otpMessage} />
        </>
    )
}
