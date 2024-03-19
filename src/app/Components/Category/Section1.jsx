"use client"
import React from 'react'
import style from '../../Style/Category.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export let data = "";

export default function Section1() {

    const images = require.context('../../Images/Mobile', false, /\.(png|jpe?g|svg|gif)$/);
    const imagePaths = images.keys();

    const router = useRouter();

    return (
        <div className={style.main_container_CategoryPage}>
            <div>
                <img src='https://i.ytimg.com/vi/CWEX2RWGVbI/maxresdefault.jpg' />
            </div>
            <div>
                <div className={style.mobile_logoContainer}>
                    {imagePaths.map((imagePath, index) => (
                        
                        <Link  key={index} href={{pathname:'../../Pages/searchedProduct', query:{"mobile_brand":imagePath.split('/').pop().slice(0, -4)}}}>
                            <Image key={index} src={images(imagePath).default} alt={`Image ${index + 1}`} width={100} height={30}  />
                            {/* <h5>{imagePath.split('/').pop().slice(0, -4)}</h5> */}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
