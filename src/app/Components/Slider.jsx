"use client"
import { useState, useEffect } from 'react';
import slidingcss from '../Style/sliding.module.css';
import back_arrow from '../../../public/arrow_back.svg';
import forward_arrow from '../../../public/arrow_forward.svg';
import Image from 'next/image';
export default function page() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        'https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/992eb49e6fb1b9c11a39d8d0a2147738.w3000.h600.jpg',
        'https://static.vecteezy.com/system/resources/previews/023/686/261/non_2x/cosmetic-sale-flat-illustration-beauty-and-skin-care-products-online-shopping-cream-shampoo-lipstick-lotion-serum-promotion-banner-poster-flyer-web-template-landing-page-vector.jpg',
        'https://i.ytimg.com/vi/CWEX2RWGVbI/maxresdefault.jpg',
        'https://thebrandgym.com/wp-content/uploads/2019/12/diw63dguwaea8y5.jpg',
        'https://previews.123rf.com/images/gmast3r/gmast3r1710/gmast3r171002170/88646835-black-friday-sale-template-horizontal-banner-discounts-on-modern-smart-phones-poster-design-vector.jpg',
    ];

    const slideWidth = 100;

    useEffect(() => {
        const interval = setInterval(() => {
            slide(1);
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    const slide = (direction) => {
        const totalImages = images.length;
        setCurrentIndex((prevIndex) => (prevIndex + direction + totalImages) % totalImages);
    };


    return (
        <div className={slidingcss.slider_container}>
            <div className={slidingcss.slider_images} style={{ transform: `translateX(${-currentIndex * slideWidth}%)` }}>
                {images.map((image, index) => (
                    <img key={index} className={slidingcss.slider_image} src={image} alt={`Image ${index + 1}`} />
                ))}
            </div>

            <button className={`${slidingcss.slider_button} ${slidingcss.slider_button_left}`} onClick={() => slide(-1)}>
                {/* {back_arrow} */}
                <Image alt="" src={back_arrow} height={50}/>
            </button>
            <button className={`${slidingcss.slider_button} ${slidingcss.slider_button_right}`} onClick={() => slide(1)}>
                <Image alt="" src={forward_arrow} height={50}/>
            </button>
        </div>

    )
}
