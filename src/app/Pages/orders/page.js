"use client"
import { useEffect, useState } from 'react'
import style from '../../Style/orders.module.css'
import style2 from '../../Style/payemt.module.css'
import style3 from '../../Style/product.module.css'
import truck_icon from '../../Images/truck.gif';
import delivered from '../../Images/shipping.gif';
import right_mark from '../../Images/check_mark.png'
import cancelled from '../../Images/cancelled_icon.webp'
import style4 from '../../Style/cart.module.css';
import Link from 'next/link'

import Image from 'next/image'
import Loder from '@/app/Components/Loder'
import Warning from '@/app/Components/Warning';
import BASE_URL from '@/appConfig';


export default function Order() {
  const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
  const [otpMessage, setOtpMessage] = useState(null);

  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [orderVisibility, setOrderVisibility] = useState({});
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


  useEffect(() => {
    const fetchData = async () => {

      try {
        // const token = JSON.parse(localStorage.getItem("data"));

        const response = await fetch(`${BASE_URL}/api/user/order/getAllOrder_ofUser`, {
          method: "Get",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        const allOrders = await response.json();
        // console.log(allOrders)

        if (allOrders.message === "All user orders goted") {
          setAllData(allOrders.allOrders)

          const initialVisibilityState = allOrders.allOrders.reduce((acc, _, index) => {
            acc[index] = false;
            return acc;
          }, {});
          setOrderVisibility(initialVisibilityState);
        }
        setIsLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

  }, [token])

  const cancelled_order = async (porduct_id) => {
    try {

      const response = await fetch(`${BASE_URL}/api/user/order/forCancellOrder/${porduct_id}`, {
        method: "Put",
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order_status: "CANCELLED" })
      });
      const newData = await response.json();
      setOtpMessage(newData.message)
      setOtpMessageVisbal("20px")
      setTimeout(() => {
          setOtpMessageVisbal("-100px")
          window.location.reload();
      }, 3000)

    } catch (error) {
      console.error('Error fetching data:', error);
    }

  }

  const seeOrderDetails = (index) => {
    setOrderVisibility(prevState => ({
      ...prevState,
      [index]: true
    }));
  }

  const hideOrderDetails = (index) => {
    setOrderVisibility(prevState => ({
      ...prevState,
      [index]: false
    }));
  }


  // if (isLoading == false && allData.length > 0) {
  //   allData.map((b) => {
  //     console.log(b)
  //   })
  // }


  // console.log(isLoading)

  return (
    <>
      {isLoading ? (<Loder />) : (
        <div className={style.main_contaier_orders}>
          {
            allData.length == 0 ? (
              <div className={style4.background}>
                <h1>{"! Order box is empty"}</h1>
                {/* <Image alt="" src={emptyTroly} width={200} /> */}
                <p>{"You haven't ordered anything yet"}</p>
                <Link href={'../'}>
                  <button>Order now</button>
                </Link>
              </div>
            ) : (
              allData.map((item, index) => (
                <>
                  <div className={style.order_product}>
                    <div className={style2.product}>
                      <div className={style2.product_details}>
                        <img src={item.product.images_array[0]} />
                        <div>
                          <h3>{item.product.product_name}</h3>
                          <div className={style2.product_price}>
                            <p>Price</p>
                            <h4>&#8377;{item.product.price}</h4>
                          </div>
                          <div className={style3.product_ratings}>
                            <div className={style3.rating}><p>Rating</p> <h2>{item.product.rating}</h2></div>
                            <div className={style3.product_rating_stars}>
                              {Array.from({ length: 4 }, (_, index) => (
                                <span key={index}>★</span>
                              ))}
                            </div>
                          </div>
                          <hr />
                          <div className={style2.product_total_price_quantity}>
                            <p>Quantity {item.quantity}</p>
                            <div className={style2.total_price}>
                              <p>Total Price</p>
                              <h3>&#8377;{item.
                                totalPrice}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={style.see_orderDetails} style={{ display: orderVisibility[index] ? 'block' : 'none' }}>
                      <div className={style.order_address}>
                        <h3>The order will be delivered to this {item.address_type} address</h3>
                        <p>Address : {item.address.pincode === undefined ? "Address not available, add address, without address your delivery may be affected." : `street address- ${item.address.street_address}, landmark- ${item.address.landmark}, pincode- ${item.address.pincode}, building no- ${item.address.building_no}, city- ${item.address.city}, district- ${item.address.district}, state- ${item.address.state}, country- ${item.address.country}, description- ${item.address.address_description}`}</p>
                      </div>
                      <div className={style.ena_container}>
                        <div className={style.input__rangeContainer}>
                          <div className={style.left_proggress}>
                            <p style={{ backgroundColor: item.order_location === "ORDERD" || "SHIPPING" ? "white" : "rgba(128, 128, 128, 0.297)", border: item.order_location === "ORDERD" || "SHIPPING" ? "2px solid #0C2D57" : "1px solid rgba(128, 128, 128, 0.477)" }}>
                              <Image alt="" style={{ display: item.order_location === "ORDERD" || "SHIPPING" ? "" : "none" }} src={right_mark} width={10} /> Ordered -
                              <br /> <hr /> {item.createdAt}
                            </p>
                            <p style={{ backgroundColor: item.order_location !== "ORDERD" ? "white" : "rgba(128, 128, 128, 0.297)", border: item.order_location !== "ORDERD" ? "2px solid #0C2D57" : "1px solid rgba(128, 128, 128, 0.477)" }}>
                              <Image alt="" style={{ display: item.order_location !== "ORDERD" ? "" : "none" }} src={right_mark} width={10} />  Shipped -
                              <br /> <hr /> {item.e_shippingDate}
                            </p>
                            <p style={{ backgroundColor: item.order_location === "DELIVERED" ? "white" : "rgba(128, 128, 128, 0.297)", border: item.order_location === "DELIVERED" ? "2px solid #0C2D57" : "1px solid rgba(128, 128, 128, 0.477)" }}>
                              <Image alt="" style={{ display: item.order_location === "DELIVERED" ? "" : "none" }} src={right_mark} width={10} /> Delivered -
                              <br /> <hr /> {item.e_deliveryDate}
                            </p>
                          </div>
                          <div className={style.slider}>
                            <div className={style.ordered_doggal} style={{ backgroundColor: item.order_location === "ORDERD" || "SHIPPING" ? "green" : "orange" }}></div>
                            <div className={style.shipper_doggal} style={{ backgroundColor: item.order_location !== "ORDERD" ? "green" : "orange" }}></div>
                            <div className={style.delivery_doggal} style={{ backgroundColor: item.order_location === "DELIVERED" ? "green" : "orange" }}></div>
                            <div className={style.proggress_treck} style={{ height: `${item.order_completePercent}%` }}></div>
                            <div className={style.doggal} style={{ top: `${item.order_completePercent}%` }}></div>
                          </div>
                          <div className={style.right_proggress}>
                            {/* order_status */}
                            <div className={style.cancelled_staturs} style={{ top: `${item.order_completePercent - 3}%`, display: item.order_status === "CANCELLED" ? "flex" : "none" }}> <Image alt="" src={cancelled} width={20} /><p>Cancelled</p>
                            </div>
                            <Image alt="" className={style.truck_icon} src={truck_icon} width={30} style={{ marginLeft: "10px", top: `${item.order_completePercent - 3}%`, display: item.order_location === "DELIVERED" || item.order_status === "CANCELLED" ? "none" : "block" }} />
                            <Image alt="" className={style.delivered_icon} src={delivered} width={30} style={{ marginLeft: "10px", display: item.order_location !== "DELIVERED" ? "none" : "block" }} />
                          </div>
                        </div>
                        <div style={{ display: item.order_status === "CANCELLED" || item.order_location === "DELIVERED" ? "none" : "block" }}>
                          <p>Warning: after canceling the order, you cannot change the cancellation</p>
                          <button onClick={() => cancelled_order(item.id)} className={style.order_cancel_butt} >Cancel Order</button>
                        </div>
                      </div>
                    </div>
                    <div className={style.bottom_status_bar}>
                      <button className={style.status_butts} style={{ display: orderVisibility[index] ? 'none' : 'block' }} onClick={() => seeOrderDetails(index)}><svg xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></button>
                      <button className={style.status_butts} style={{ display: orderVisibility[index] ? 'block' : 'none' }} onClick={() => hideOrderDetails(index)}><svg xmlns="http://www.w3.org/2000/svg" fill='#0c2d57' height="24" viewBox="0 -960 960 960" width="24"><path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" /></svg></button>
                      <div className={style.cancelled_bottom_status} style={{ display: item.order_status === "CANCELLED" ? "flex" : "none" }}> <Image alt="" src={cancelled} width={20} /><p>Cancelled</p>
                      </div>
                      <div className={style.cancelled_bottom_status} style={{ display: item.order_status !== "CANCELLED" && item.order_location === "ORDERD" ? "flex" : "none" }}> <Image alt="" src={right_mark} width={20} /><p>Orderd</p>
                      </div>
                      <div className={style.cancelled_bottom_status} style={{ display: item.order_status !== "CANCELLED" && item.order_location === "SHIPPING" ? "flex" : "none" }}> <Image alt="" src={right_mark} width={20} /><p>Shipped</p>
                      </div>
                      <div className={style.cancelled_bottom_status} style={{ display: item.order_status !== "CANCELLED" && item.order_location === "DELIVERED" ? "flex" : "none" }}> <Image alt="" src={right_mark} width={20} /><p>Delivered</p>
                      </div>
                    </div>
                  </div>
                </>
              ))
            )
          }
        </div>
      )}
      <Warning top={otpMessageVisbal} data={otpMessage}/>
    </>
  )
}
