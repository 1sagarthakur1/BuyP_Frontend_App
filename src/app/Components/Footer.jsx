"use client"
import Link from 'next/link';
import style from '../Style/footer.module.css';
import { useEffect, useState } from 'react';
// import page from '../Pages/orders';


export default function Footer() {
  const [seeDetailsMaxHight, setSeeDetailsMaxHight] = useState("50px");
  const [seeDetailsPosition, setSeeDetailsPosition] = useState("fixed");
  const [visiBiltyIcons, setvisiBiltyIcons] = useState("flex");
  const [hideButtVisibliyt, setHideButtVisibliyt] = useState("block");

  const seeFooter = () => {
    setSeeDetailsMaxHight("100%");
    setSeeDetailsPosition("sticky")
    setvisiBiltyIcons("none")
    setHideButtVisibliyt("block");
  }

  const hideFooter = () => {
    setSeeDetailsMaxHight("50px");
    setSeeDetailsPosition("fixed")
    setvisiBiltyIcons("flex")
    setHideButtVisibliyt("none")

  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 767) {
        setSeeDetailsMaxHight("20px");
        setSeeDetailsPosition("sticky")
        setvisiBiltyIcons("none")
        setHideButtVisibliyt("none")
      }else if(window.innerWidth < 767 ){
        setSeeDetailsMaxHight("50px");
        setSeeDetailsPosition("fixed")
        setvisiBiltyIcons("flex")
        setHideButtVisibliyt("block")
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // style={{maxHeight:"100%", position:"sticky"}}
  return (
    <div className={style.mainContaier_ofFooter} style={{ maxHeight: seeDetailsMaxHight, position: seeDetailsPosition }}>
      <div className={style.firstContainerFooter} style={{ display: visiBiltyIcons }}>
        <div onClick={seeFooter} className={style.firstInnerDiv}>
          <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-338q18-11 38.5-16.5T280-480h400q21 0 41.5 5.5T760-458v-302H200v302Zm0 258h560v-120q0-33-23.5-56.5T680-400H280q-33 0-56.5 23.5T200-320v120Zm0 0h560-560Z" /></svg>
          <p>About</p>
        </div>
        <Link href='/Pages/orders'>
          <div className={style.SecondInnerDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M160-80v-440H80v-240h208q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q23 0 43 8.5t37 23.5q17-16 37-24t43-8q50 0 85 35t35 85q0 11-2 20.5t-6 19.5h208v240h-80v440H160Zm400-760q-17 0-28.5 11.5T520-800q0 17 11.5 28.5T560-760q17 0 28.5-11.5T600-800q0-17-11.5-28.5T560-840Zm-200 40q0 17 11.5 28.5T400-760q17 0 28.5-11.5T440-800q0-17-11.5-28.5T400-840q-17 0-28.5 11.5T360-800ZM160-680v80h280v-80H160Zm280 520v-360H240v360h200Zm80 0h200v-360H520v360Zm280-440v-80H520v80h280Z" /></svg>
            <p>Orders</p>
          </div>
        </Link>

        <Link href='/'>
          <div className={style.TheredInnerDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0C2D57" height="40" viewBox="0 -960 960 960" width="40"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
          </div>
        </Link>

        <Link href='/Pages/cart'>
          <div className={style.ForthInnerDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <p>Cart</p>
          </div>
        </Link>

        <Link href='/Pages/user_account'>
          <div className={style.FifthInnerDiv}>
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
            <p>Account</p>
          </div>
        </Link>
      </div>
      <div className={style.webDetailsIn_Navbar}>
        <button style={{display:hideButtVisibliyt}} onClick={hideFooter}><svg xmlns="http://www.w3.org/2000/svg" fill='white' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/></svg></button>
        <h1> ! Hi This is web Details container</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda eius sed nobis molestias officiis, dolor nam praesentium doloribus laborum sint fuga veniam quod? Quae vel quos beatae dolores voluptates neque maiores eveniet nisi ad quam iure itaque non exercitationem, perferendis ut tempore. Alias necessitatibus explicabo dolor eligendi maiores quod atque quaerat quasi quidem repellat quae vitae voluptates, voluptatum magni placeat? Porro perferendis sed totam autem sit unde nostrum deserunt quos, laboriosam provident commodi exercitationem. Ipsam ad, voluptatibus ea saepe harum quidem veritatis, totam vitae, fugit vero reprehenderit beatae recusandae facilis placeat reiciendis quae aperiam ipsa non! Quam voluptates, iure vitae, magni eaque officia nobis </p>
      </div>
    </div>
  )
}
