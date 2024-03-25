// import  { useState } from 'react'
import style from '../Style/searchedProduct.module.css'
import style1 from '../Style/cart.module.css'
import style2 from '../Style/payemt.module.css'
import style3 from '../Style/product.module.css'

const SearchedProduct = (props) => {
  
  const hightlight = props.data.highlights.slice(0, 3);
  const image_url = props.data.images_array[0];

  return (
    <div className={style2.product}>
      <div className={style2.product_details}>
        <img src={image_url} />
        <div>
          <h3>{props.data.product_name}</h3>
          <div className={style2.product_price}>
            <p>Price</p>
            <h4>&#8377;{props.data.price}</h4>
          </div>
          <div className={style.hightlight}>
            {hightlight.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
          </div>
          <div className={style3.product_ratings}>
            <div className={style3.rating}><p>Rating</p> <h2>{props.data.rating}</h2></div>
            <div className={style3.product_rating_stars}>
              {Array.from({ length: props.data.rating }, (_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const CardProduct = (props) => {

  const hightlight = props.data.highlights.slice(0, 3);
  const image_url = props.data.images_array[0];

  // console.log(props.data)
  return (

    <div className={style2.product_details}>
      <img src={image_url} />
      <div>
        <h3>{props.data.product_name}</h3>
        <div className={style2.product_price}>
          <p>Price</p>
          <h4>&#8377;{props.data.price}</h4>
        </div>
        <div className={style1.hightlight}>
          {hightlight.map((e, index) => (
            <p key={index}>{e}</p>
          ))}
        </div>
        <div className={style3.product_ratings}>
          <div className={style3.rating}><p>Rating</p> <h2>{props.data.rating}</h2></div>
          <div className={style3.product_rating_stars}>
            {Array.from({ length: props.data.rating }, (_, index) => (
              <span key={index}>★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { SearchedProduct, CardProduct };
