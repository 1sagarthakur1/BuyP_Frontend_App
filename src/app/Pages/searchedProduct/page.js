"use client"
import Link from "next/link";
import style from "../../Style/searchedProduct.module.css";
import { useSearchParams } from 'next/navigation'
import { SearchedProduct } from "@/app/Components/SearchedProduct"
import { useEffect, useState } from "react";
import Loder from "@/app/Components/Loder";
import emptyTroly from '../../Images/emptyTroly.webp'
import Image from "next/image";
import style2 from '../../Style/cart.module.css';
import BASE_URL from '@/appConfig';


export default function Searched_product() {
  const searchParams = useSearchParams();

  const mobile_brand = searchParams.get('mobile_brand');
  const searchQuery = searchParams.get('query');
  let query = null;
  if (mobile_brand && !searchQuery) {
    query = mobile_brand;
  } else if (!mobile_brand && searchQuery) {
    query = searchQuery;
  }

  // console.log(mobile_brand)


  const [productArray, setProductArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getallProdurct = async () => {
      const respons = await fetch(`${BASE_URL}/api/product/searchProduct_byName/?q=${query}`);
      const data = await respons.json();
      setIsLoading(false);
      // console.log(data.products)
      setProductArray(data.products)

    }

    getallProdurct();

  }, [searchQuery,query])


  return (
    <div className={style.mainContainer_ofAllSearch_productContainer}>
      <div className={style.allSearch_productContainer}>
        <div className={style.leftOf_searchedProduct}>
          <h1> This is fillter side</h1>
          <h3>{mobile_brand}</h3>
        </div>
        <div className={style.rightOf_searchedProduct}>
          {isLoading == false ? (
            productArray == undefined || productArray.length == 0 ? (
              <div className={style2.background}>
                <h1>! Not Found</h1>
                <p>This product not found some issue is there ...</p>
              </div>
            ) : (
              productArray.map((pro,index) => (
                <Link key={index} href={{ pathname: '../../Pages/product', query: { "id": (pro._id) } }}>
                  <SearchedProduct data={pro} />
                </Link>
              ))
            )
          ) : (<Loder />)}
        </div>
      </div>
    </div>
  )
}
