import Link from 'next/link';
import style from '../Style/Category.module.css';

export default function Category() {
    return (
        <div className={style.item_section}>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100" />
                    <h5>Grocery</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100" />
                    <h5>Mobiles</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100" />
                    <h5>Fashion</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100" />
                    <h5>Electronics</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100" />
                    <h5>Home & Furniture</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100" />
                    <h5>Appliances</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100" />
                    <h5>Travel</h5>
                </div>
            </Link>
            <Link href="/Pages/category">
                <div>
                    <img alt="" src="https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100" />
                    <h5>Beauty,Toys & More</h5>
                </div>
            </Link>
        </div>

    )
}
