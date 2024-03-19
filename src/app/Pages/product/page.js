"use client"
import { useEffect, useState } from 'react';
import '../../globals.css'
import { useRouter } from 'next/navigation'
import style from '../../Style/product.module.css';
import Link from 'next/link';
import Loder from '@/app/Components/Loder';
import Warning from '@/app/Components/Warning';
import BASE_URL from '@/appConfig';


export default function page({ searchParams }) {
    const [otpMessageVisbal, setOtpMessageVisbal] = useState("-100px");
    const [otpMessage, setOtpMessage] = useState(null);

    const router = useRouter();

    if (searchParams.id == undefined) {
        router.push('/')
    }

    if (searchParams.id == undefined) {
        return <Loder />;
    }

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


    const [image, setImage] = useState("");

    const [productId, setproductId] = useState(null);
    const [product, setProduct] = useState("");
    const [product_name, setProduct_name] = useState("");
    const [product_images, setProduct_images] = useState([]);
    const [brand, setBrand] = useState({});
    const [ram_rom, setRam_rom] = useState(null);
    const [highlight, setHighlights] = useState([]);
    const [description, set_description] = useState({});
    const [product_descriptions_Image, setProduct_descriptions_Image] = useState({});
    const [product_color, setProduct_color] = useState(null);
    const [offer, setOffer] = useState([]);
    const [exist_quantity, setExist_quantity] = useState(0);
    // let product1 ; 

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/product/getProduct_byId/${searchParams.id}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const jsonData = await response.json();
            //   console.log(jsonData.product.images_array[0])
            if (jsonData) {
                setProduct(jsonData.product)
                setImage(jsonData.product.images_array[0])
                setProduct_images(jsonData.product.images_array);
                setProduct_name(jsonData.product.product_name);
                setRam_rom(jsonData.product.ram_rom);
                setHighlights(jsonData.product.highlights);
                setBrand(jsonData.product.brand);
                set_description(jsonData.product.description);
                setProduct_descriptions_Image(jsonData.product.description.product_descriptions_Image);
                setProduct_color(jsonData.product.color);
                setOffer(jsonData.product.offer);
                setExist_quantity(jsonData.product.quantity);
            }

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const addtoCart = (Pid) => {
        // useEffect(() => {
        const addProductInCart = async () => {
            try {
                const response = await fetch(`${BASE_URL}/api/user/cart/Add_toCart/${Pid}`, {
                    method: 'Post',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });

                const newData = await response.json();
                // console.log(newData);
                if (newData.message === 'Add to cart successfully') {
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                        window.location.reload();
                    }, 3000)
                } else {
                    setOtpMessage(newData.message)
                    setOtpMessageVisbal("45px")
                    setTimeout(() => {
                        setOtpMessageVisbal("-100px")
                    }, 3000)
                }
                // alert(newData.message);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        addProductInCart();
        // }, [token])
    }

    const [quantity, setQuantity] = useState(1);


    const handleQuantityChange = (e) => {
        let newQuantity = parseInt(e.target.value);

        if (newQuantity < 1) {
            newQuantity = 1;
        } else if (newQuantity > exist_quantity) {
            newQuantity = exist_quantity;
        }
        setQuantity(newQuantity);
    };

    // console.log(ram_rom);


    return (
        <>
            <div style={{minHeight:'100vh'}}>
                <div className={style.product_Main_container}>
                    <div className={style.images_for_cart}>
                        <div className={style.thumbnail_img_div}>
                            <img src={image} alt="" />
                        </div>
                        <div className={style.product_more_imge_div}>
                            {product_images.map((image, index) => (
                                <div key={index}>
                                    <img
                                        onClick={() => setImage(image)}
                                        className={style.product_more_imgs}
                                        src={image}
                                        alt=""
                                    />
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className={style.product_cart_right_site}>
                        <h1 className={style.product_title}>{product_name}</h1>
                        <div className={style.product_ratings}>
                            <div className={style.rating}><p>Rating</p> <h2>{product.rating}</h2></div>
                            <div className={style.product_rating_stars}>
                                {Array.from({ length: product.rating }, (_, index) => (
                                    <span key={index}>★</span>
                                ))}
                            </div>
                        </div>
                        <div className={style.product_price_details}>
                            <div className={style.product_price}> <h3>Price </h3> <h3>&#8377;{product.price}</h3> <h3>&#8377;{product.full_price}</h3></div>
                            <div className={style.product_discPercent}><h4>Discount</h4> <h4>{(((product.full_price / product.price) * 100) - 100).toFixed(2) + "%"}</h4></div>
                        </div>
                        <div className={style.product_stock}>
                            {product.quantity > 0 ? (<p>In stock</p>) : (<p>Out of stock</p>)}
                        </div>

                        {product_color !== null ? (
                            <div>
                                {Object.keys(product_color).map((key) => (
                                    <div className={style.color}>
                                        <h4>Color:</h4>
                                        <img src={product_color[key]} />
                                    </div>
                                ))}
                            </div>

                        ) : ("")}

                        {product.size != null ? (
                            <div><h4>size : {product.size}</h4></div>
                        ) : ("")}

                        {product.weight != null ? (
                            <div><h4>weight : {product.weight}</h4></div>
                        ) : ("")}

                        {offer !== null ? (
                            Object.keys(offer).map((key, index) => {
                                <div>{key}</div>
                            })
                        ) : ("")}

                        {ram_rom === null || ram_rom === undefined ? ("") : (
                            <div className={style.ram_rom}>
                                <div>
                                    Ram <h4>{Object(ram_rom).ram}</h4>
                                </div>
                                <div>
                                    Rom <h4>{Object(ram_rom).rom}</h4>
                                </div>
                            </div>
                        )}
                        <div className={style.quantity_div}>
                            <label htmlFor="quantity">Quantity </label>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min={1}
                                max={exist_quantity}
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                        <div className={style.product_buttons_add_buy}>
                            <button onClick={() => addtoCart(product._id)} className={style.addtocart_product} style={{ backgroundColor: "#EBCB03" }}>Add to cart</button>
                            <Link href={{
                                pathname: "/Pages/do_order",
                                query: {
                                    "product_id": product._id,
                                    "quantity": quantity,

                                    "product_name": product_name,
                                    "product_img": product_images[0],
                                    "rating": product.rating,
                                    "price": product.price,
                                    "full_price": product.full_price,
                                    "ram_rom": JSON.stringify(ram_rom),
                                    "size": null,
                                    "weight": null,
                                    "color": product_color
                                }
                            }}>
                                <button className={style.buy_product} style={{ display: product.quantity > 0 ? "block" : "none" }}>Buy</button>
                            </Link>
                        </div>
                        <div className={style.highlights}>
                            <hr style={{ margin: "5px 0px" }} />
                            <h4>Highlights</h4>
                            <ul>
                                {highlight.map((element, index) => (
                                    <li key={index}>{element}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={style.brand_category}>
                            <div className={style.brand}>
                                <img src={brand.brand_logo} />
                            </div>
                            <div className={style.category}>
                                <p>Category</p>
                                <h3>{product.product_category}</h3>
                            </div>
                        </div>
                        <div className={style.description}>
                            <h4>Description</h4>
                            <p>{description.main_description}</p>
                            {product_descriptions_Image !== null ? (Object.keys(product_descriptions_Image).map((key, index) => {
                                if (index % 2 !== 0) {
                                    return (
                                        <div className={style.product_descriptions_Image}>
                                            <p>{key}</p>
                                            <div className={style.description_image}>
                                                <img src={product_descriptions_Image[key]} />
                                            </div>
                                            <hr style={{ margin: "10px 0px" }} />
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className={style.product_descriptions_Image}>
                                            <div className={style.description_image}>
                                                <img src={product_descriptions_Image[key]} />
                                            </div>
                                            <p>{key}</p>
                                            <hr style={{ margin: "10px 0px" }} />
                                        </div>
                                    )
                                }
                            })) : ("")}

                        </div>
                    </div>
                </div>
            </div>
            <Warning top={otpMessageVisbal} data={otpMessage} />
        </>
    )
}
