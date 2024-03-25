"use client"
import { useEffect, useState } from 'react';
import style from '../../Style/cart.module.css';
import style2 from '../../Style/payemt.module.css'
import { CardProduct } from '@/app/Components/SearchedProduct';
import Link from 'next/link';
import Image from 'next/image';
import shopingTroli from '../../Images/shopingTroli.png'
import Loder from '@/app/Components/Loder';
import emptyTroly from '../../Images/emptyTroly.webp'
import Warning from '@/app/Components/Warning';
import BASE_URL from '@/appConfig';


export default function Cart() {
  const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
  const [otpMessage, setOtpMessage] = useState(null);

  const [token, setCookieValue] = useState('');

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };

    const yourCookieValue = getCookie('token');

    setCookieValue(yourCookieValue);
  }, []);

  const [arrayOfAllProduct, setArrayOfAllProduct] = useState(null);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAlltCardProduct = async () => {
      try {
        // const token = JSON.parse(localStorage.getItem("data"));
        // console.log(token)
        const response = await fetch(`${BASE_URL}/api/user/cart/getAllItem_ofCart`, {
          method: "Get",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        const newData = await response.json();
        if (newData) {
          setIsLoading(false)
          setArrayOfAllProduct(newData.array)
          setTotalItem(newData.Total_card_item)
          setTotalPrice(newData.Total_price)
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAlltCardProduct();
  }, [token])

  const removeItem = (id) => {
    const deleteItemFromCart = async () => {
      try {
        // const token = JSON.parse(localStorage.getItem("data"));

        const response = await fetch(`${BASE_URL}/api/user/cart/remove_toCart/${id}`, {
          method: "Delete",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
        const newData = await response.json();
        // console.log(newData)
        if (newData.message === "Item removed to cart successfully") {
          // alert("Item removed to cart successfully")
          setOtpMessage(newData.message)
          setOtpMessageVisbal("20px")
          setTimeout(() => {
            setOtpMessageVisbal("-100px")
            window.location.reload();
          }, 3000)

        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    deleteItemFromCart();
  }


  return (
    <>
      {isLoading ? (<Loder />) : (
        <div className={style.mainContainer_ofCart} style={{ display: arrayOfAllProduct == null ? 'flex' : '' }}>
          {arrayOfAllProduct != null ? (
            <>
              <div>
                {arrayOfAllProduct.map((product,index) => (
                  <div key={index} className={style2.product}>
                    <span className={style.span_forCardContainer}>
                      <div>
                        <p>Add date</p>
                      </div>
                      <button onClick={() => removeItem(product._id)} title='Remove from cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg>
                      </button>
                    </span>
                    <Link key={product.id} href={{ pathname: '../../Pages/product', query: { "id": (product._id) } }}>
                      <CardProduct data={product} />
                    </Link>
                  </div>
                ))}
              </div>

              <div className={style.cart_details}>
                <div>
                  <p>Total Items</p>
                  <h3>{totalItem}</h3>
                </div>
                <div>
                  <p>Total Amount</p>
                  <h3>&#8377;{totalPrice}</h3>
                </div>
              </div>
            </>
          ) : (
            <div className={style.background}>
              <h1>! Ops cart is empty</h1>
              <Image src={emptyTroly} width={200} alt='not found'/>
              <p>You have zero items on your card</p>
              <Link href={'../'}>
                <button>Add product</button>
              </Link>
            </div>
          )}

        </div>
      )}
      <Warning top={otpMessageVisbal} data={otpMessage} />
    </>
  )
}
