import style from '../../Style/section1.module.css'
import style2 from '../../Style/product.module.css'
import React from 'react'
import Link from 'next/link'

export default function Section1() {
  return (
    <div className={style.section1_mainContainer}>
      <div>
        <h4>Best deals</h4>
        <hr />
      </div>
      <div className={style.section1_InnerContainer}>
        <div>
          <img src="https://www.slim.it/hubfs/Immagini%20degli%20articoli/Articoli_Maggio_2022/SLIM_trend_mercato_elettrodomestici_cover.jpg" alt="" />
        </div>
        <div>
          <Link href={{ pathname: '../../Pages/product', query: { "id": "6602bb561abe1b6daee3c751" } }}>
            <div className={style.best_dealProduct}>
              <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/washing-machine-new/k/c/l/-original-imagx7qhzg4f3bca.jpeg?q=70&crop=false" alt="" />
              <h6>Washing Machine</h6>
              <div style={{ margin: '0px' }} className={style2.product_ratings}>
                <div className={style.rating}><h2>4.4</h2></div>
                <div className={style.product_rating_stars}>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '../../Pages/product', query: { "id": "6602c221cb7e0b6d51c53b17" } }}>
            <div className={style.best_dealProduct}>
              <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/wardrobe-closet/n/w/f/no-54-5-120-particle-board-126-56101509sd00634-brown-godrej-original-imagtbga56hnmatq.jpeg?q=70&crop=false" alt="" />
              <h6>Godrej Interio </h6>
              <div style={{ margin: '0px' }} className={style2.product_ratings}>
                <div className={style.rating}><h2>4.4</h2></div>
                <div className={style.product_rating_stars}>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '../../Pages/product', query: { "id": "6602bf3ccb7e0b6d51c53b0e" } }}>
            <div className={style.best_dealProduct}>
              <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/television/1/z/i/-original-imagyk8ttgzxvs2s.jpeg?q=70&crop=false" alt="" />
              <h6>Samsung TV 43 inch</h6>
              <div style={{ margin: '0px' }} className={style2.product_ratings}>
                <div className={style.rating}><h2>4.4</h2></div>
                <div className={style.product_rating_stars}>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
          <Link href={{ pathname: '../../Pages/product', query: { "id": "65dc85f34c730eccc9aa1e4b" } }}>
            <div className={style.best_dealProduct}>
              <img src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/s/p/e/-original-imagtkzunhcht8vz.jpeg?q=70&crop=false" alt="" />
              <h6>Motorola Edge 40 Neo</h6>
              <div style={{ margin: '0px' }} className={style2.product_ratings}>
                <div className={style.rating}><h2>4.4</h2></div>
                <div className={style.product_rating_stars}>
                  {Array.from({ length: 4 }, (_, index) => (
                    <span key={index}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div >
  )
}
