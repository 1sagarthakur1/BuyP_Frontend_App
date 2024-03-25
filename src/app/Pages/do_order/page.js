"use client"
import style2 from '../../Style/do_order.module.css'
import style from '../../Style/product.module.css'
import Address from '../../Components/Address'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Loder from '@/app/Components/Loder'

export default function Do_order({ searchParams }) {
  const [receivedData, setReceivedData] = useState(null);
  const [address_type, setAddress_type] = useState(null)

  const router = useRouter();
  useEffect(() => {
    if (searchParams.product_name === undefined) {
      router.push('/');
    }
  }, [searchParams.product_name, router]);

  if (searchParams.product_name === undefined) {
    return <Loder/>;
  }


  const receiveDataFromAddress = (address_type, data) => {
    setReceivedData(data);
    setAddress_type(address_type);
  };

  const ram_rom2 = searchParams.ram_rom;

  // console.log(ram_rom2)
  // console.log(ram_rom2 === "null");
  
  return (
    <>
      <div className={style2.do_order_mainContainer}>
        <h2>Select your delevery address</h2>
        <h4>Your Product</h4>
        <div className={style2.doOrder_porduct}>
          <img src={searchParams.product_img} />
          <div className={style2.product_cart_right_site}>
            <h1 className={style.product_title}>{searchParams.product_name}</h1>
            <div className={style.product_ratings}>
              <div className={style.rating}><p>Rating</p> <h2>{searchParams.rating}</h2></div>
              <div className={style.product_rating_stars}>
                {Array.from({ length: searchParams.rating }, (_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>
            <div className={style.product_price_details}>
              <div className={style.product_price}> <h3>Price </h3> <h3>&#8377;{searchParams.price}</h3> <h3>&#8377;{searchParams.full_price}</h3></div>
              <div className={style.product_discPercent}><h4>Discount</h4> <h4>{(((searchParams.full_price / searchParams.price) * 100) - 100).toFixed(2) + "%"}</h4></div>
            </div>
            {ram_rom2 == "" || ram_rom2 == "null" ? ("") : (
              <div className={style.ram_rom}>
                <div>
                  Ram <h4>{JSON.parse(ram_rom2).ram}</h4>
                </div>
                <div>
                  Rom <h4>{JSON.parse(ram_rom2).rom}</h4>
                </div>
              </div>
            )
            }
          </div>
        </div>
        <div className={style2.total_price_quantity}>
          <p>Quantity {searchParams.quantity}</p>
          <div className={style2.total_amount}>
            <p>Total Amount</p>
            <h2>&#8377;{searchParams.quantity * searchParams.price}</h2>
          </div>
        </div>
      </div>
      <div className={style2.delevery}>
        <h4 className={style2.heading_delevery_address}>Delevery Address</h4>
        <div className={style2.delevery_address}>
          <p>{receivedData}</p>
        </div>
        <h4 className={style2.address_heading}>Address</h4>
        <hr width="100%" style={{ margin: "5px 0px" }} />
      </div>
      <div className={style2.address_div}>
        <Address sendDataToDoOrderPage={receiveDataFromAddress}/>
      </div>

      <Link href={{
        pathname: "/Pages/payment",
        query: {
          "product_id": searchParams.product_id,
          "quantity": searchParams.quantity,

          "address_type": address_type,
          "product_name": searchParams.product_name,
          "product_img": searchParams.product_img,
          "rating": searchParams.rating,
          "price": searchParams.price
        }
      }}>
        <button className={receivedData == null ? style2.countinue_doOrderButt_when_D : style2.countinue_doOrderButt} disabled={receivedData !== null ? false : true}>Continue</button>
      </Link>
    </>
  )
}
