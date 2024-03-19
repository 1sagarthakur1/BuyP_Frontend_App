"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import style2 from '../../Style/payemt.module.css'
import style from '../../Style/product.module.css'
import '../../globals.css'
import Loder from '@/app/Components/Loder';
import Warning from '@/app/Components/Warning';
import BASE_URL from '@/appConfig';

export default function page({ searchParams }) {
  const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
  const [otpMessage, setOtpMessage] = useState(null);

  const router = useRouter();

  if (searchParams.product_id == undefined) {
    router.push('/')
  }
  if (searchParams.product_id == undefined) {
    return <Loder />;
  }

  const [paymentType, setPaymentType] = useState('');
  const [inputValue, setInputValue] = useState('');
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

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
    setInputValue('');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fetchData = async () => {
      try {

        let response = await fetch(`${BASE_URL}/api/user/order/order_Product`, {
          method: "Post",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ order_status: "CONTINUED", order_location: "ORDERD", product: { product_id: searchParams.product_id, quantity: searchParams.quantity }, details: { size: null, color: null }, address_type: searchParams.address_type, payment_type: paymentType, sender_UPI: inputValue, sender_CARD: inputValue, sender_account: inputValue })
        });

        response = await response.json();

        if (response.message === "Product order successfully") {
          setOtpMessage(response.message)
          setOtpMessageVisbal("20px")
          setTimeout(() => {
            setOtpMessageVisbal("-100px")
            router.replace("/")
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
    // alert(paymentType + " " + inputValue)
  };

  const isSubmitDisabled = !paymentType;

  return (

    <>
      <div className={style2.main_container_payment}>
        <div className={style2.product}>
          <div className={style2.product_details}>
            <img src={searchParams.product_img} />
            <div>
              <h3>{searchParams.product_name}</h3>
              <div className={style2.product_price}>
                <p>Price</p>
                <h4>&#8377;{searchParams.price}</h4>
              </div>
              <div className={style.product_ratings}>
                <div className={style.rating}><p>Rating</p> <h2>{searchParams.rating}</h2></div>
                <div className={style.product_rating_stars}>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
              <hr />
              <div className={style2.product_total_price_quantity}>
                <p>Quantity {searchParams.quantity}</p>
                <div className={style2.total_price}>
                  <p>Total Price</p>
                  <h3>&#8377;{(searchParams.price) * (searchParams.quantity)}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
        <h4>Choose payment option</h4>
        <form className={style2.payment_option_form} onSubmit={handleSubmit}>
          <div className={style2.payment_option}>
            <input type="radio" id="html" name="fav_language" value="UPI" onChange={handlePaymentTypeChange} />
            <label className={style2.first_label} htmlFor="html">UPI</label><br />
            {paymentType === 'UPI' && (
              <div>
                <label className={style2.second_label}>Upi id </label>
                <input type="text" value={inputValue} placeholder='Enter Upi id' onChange={handleInputChange} required />
              </div>
            )}
          </div>

          <div className={style2.payment_option}>
            <input type="radio" id="online" name="fav_language" value="ONLINE" onChange={handlePaymentTypeChange} />
            <label className={style2.first_label} htmlFor="online">ONLINE</label><br />
            {paymentType === 'ONLINE' && (
              <div>
                <label className={style2.second_label}>Accound number or id</label>
                <input type="text" value={inputValue} placeholder='Enter account detail' onChange={handleInputChange} required />
              </div>
            )}
          </div>

          <div className={style2.payment_option}>
            <input type="radio" id="card" name="fav_language" value="CARD" onChange={handlePaymentTypeChange} />
            <label className={style2.first_label} htmlFor="card">CARD</label><br />
            {paymentType === 'CARD' && (
              <div>
                <label className={style2.second_label}>Card number or id</label>
                <input type="text" value={inputValue} placeholder='Enter card details' onChange={handleInputChange} required />
              </div>
            )}
          </div>

          <div className={style2.payment_option}>
            <input type="radio" id="cod" name="fav_language" value="COD" onChange={handlePaymentTypeChange} />
            <label className={style2.first_label} htmlFor="cod">COD</label><br />
          </div>
          <button className={isSubmitDisabled == true ? style2.countinue_doOrderButt_when_D : style2.countinue_doOrderButt} type='submit' disabled={isSubmitDisabled}>Pay Now</button>
        </form>
      </div>
      <Warning top={otpMessageVisbal} data={otpMessage} />
    </>
  )
}
