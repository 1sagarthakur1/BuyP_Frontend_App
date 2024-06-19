"use client"
import Image from "next/image";
import styles from "./Style/page.module.css";
import Slider from './Components/Slider'
import Category from "./Components/Category";
import Section1 from "./Components/Home/Section1";
import Section2 from "./Components/Home/Section2";
import Message from "./Components/Message";
import Warning from "./Components/Warning";
import loding from "./Images/loding.gif";
import style from './Style/home.module.css'
import BASE_URL from "@/appConfig";
import { useState, useEffect } from "react";



export default function Home() {

  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getallProdurct = async () => {
      const respons = await fetch(`${BASE_URL}/api/product/searchProduct_byName/?q=mobile`);
      const data = await respons.json();
      setIsLoading(false);
      // console.log(data.products)
      setProductArray(data.products)

    }

    getallProdurct();

  }, [])

  // console.log(isLoading);


  return (
    <main className={styles.homePage}>
      <div>
        <Slider />
      </div>
      <div>
        <Category />
      </div>
      <div>
        <Section2 />
      </div>
      <div>
        <Section1 />
      </div>
      {
        isLoading ?
          <div className={style.loding}>
            <Image src={loding} />
            <h3>Loading...</h3>
          </div> :
          ""
      }
    </main>
  );
}
