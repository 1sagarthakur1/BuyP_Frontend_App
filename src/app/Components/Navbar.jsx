"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from '../Style/navbar.module.css';
import '../Style/loginSignup.module.css'
import logo from "../Images/logo1.png"

import { useRouter } from 'next/navigation'

import Loder from './Loder';
import BASE_URL from '@/appConfig'

const Navbar = () => {

    const router = useRouter();

    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState(null);
    const [isLodding, setIsLodding] = useState(true);
    const [token, setCookieValue] = useState('');


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

    const handleInputChange = async (event) => {
        setSearchQuery(event.target.value);

        try {
            const response = await fetch(`${BASE_URL}/api/product/searchProduct_byName/?q=${event.target.value}`);
            const data = await response.json();

            setSuggestions(data.products);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
    };

    const handleSearch = (data) => {
        // alert(li);
        router.push(`../Pages/searchedProduct?query=${data}`)
        setSearchQuery('');
        setSuggestions(null)
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch(searchQuery);
        }
    };

    const [totalItem, setTotalItem] = useState(0)


    const [data, setData] = useState(null);
    const [username, setUsername] = useState(null);

    const [mass, setMass] = useState("User is not authorized");

    const navigate = (name) => {
        router.push(name);
    }

    useEffect(() => {
        // console.log(token)
        const fetchCurrentData = async () => {
            try {

                const response = await fetch(`${BASE_URL}/api/user/currentUser`, {
                    method: "Get",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                });
                const newData = await response.json();
                // console.log(newData);
                if (newData.user) {
                    setMass("logedin");
                }
                setIsLodding(false)
                setData(newData.user)
                setUsername(newData.user.username)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchCurrentData();
    }, [token])


    useEffect(() => {
        const fetchAlltCardProduct = async () => {
            try {

                const response = await fetch(`${BASE_URL}/api/user/cart/getAllItem_ofCart`, {
                    method: "Get",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                const newData = await response.json();
                if (newData) {
                    setTotalItem(newData.Total_card_item)
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchAlltCardProduct();
    }, [token])


    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.navbarBrand}>
                    <Link href="/">
                        <Image src={logo} alt='not found' width={100} />
                    </Link>
                </div>
                <div className={styles.navdiv}>
                    <div>
                        <input className={styles.searchBar} type="search" placeholder='Search' value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress} />
                        <button onClick={() => handleSearch(searchQuery)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
                    </div>
                    <div>
                        {suggestions != null && (
                            <ul className={styles.suggestions_Ul}>
                                {suggestions.map((suggestion, index) => {
                                    if (index >= 15) return null;
                                    const parts = suggestion.product_name.split(/[*(){}[\]?\/\\]/);
                                    const nameToShow = parts[0];
                                    return (
                                        <li key={index} onClick={() => handleSearch(nameToShow)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill='gray' height="15" viewBox="0 -960 960 960" width="15"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                                            {nameToShow}
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <div className={styles.rigth_navpart}>
                    <div className={styles.home_inNavbar}>
                        <Link href="/">
                            Home
                        </Link>
                    </div>
                    {mass == "User is not authorized" ? (
                        <h4 className={styles.LSbutton} onClick={() => navigate("/Pages/signup_login")}>Login/SginUp</h4>
                    ) : (
                        <>
                            <Link href='/Pages/cart'>
                                <div className={styles.cart_iconContainer}>
                                    <p>{totalItem == 0 ? ("0") : (totalItem)}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                        <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                                    </svg>
                                </div>
                            </Link>
                            <Link href="/Pages/user_account">
                                <div className={styles.navUserLog_andName}>
                                    <span className="material-symbols-outlined">
                                        account_circle
                                    </span>
                                    <h5>{isLodding ? (<Loder />) : (username)}</h5>
                                </div>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
