import style from '../../Style/section2.module.css'
import style2 from '../../Style/product.module.css'
import Link from 'next/link'
// import kds from '../../Pages/product'

export default function Section2() {
    return (
        <Link href={{pathname:'../../Pages/product',query:{"id":"65dc7e87ebe6ed946765c23c"}}} >
            <div className={style.main_ContainerSection2}>
                <div className={style.main_ContainerSection_firsDiv}>
                    <h2>New Luanch</h2>
                    <h3>I phone 15 Pro max</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod veritatis ab corrupti facere ipsa recusandae doloribus corporis fugiat quibusdam saepe fugit quae repellendus fuga, quam cum unde officiis nobis accusamus necessitatibus rerum hic tenetur pariatur aperiam. Cupiditate temporibus modi minima repellendus culpa perspiciatis est aspernatur possimus perferendis praesentium veritatis neque, labore odit hic delectus sit dolores sint nulla, eum minus atque, officiis repellat odio? Quidem qui quibusdam dolor voluptatem aut?</p>
                    <div className={style2.product_ratings}>
                        <div className={style2.rating}><p>Rating</p> <h2>4.4</h2></div>
                        <div className={style2.product_rating_stars}>
                            {Array.from({ length: 4 }, (_, index) => (
                                <span key={index}>★</span>
                            ))}
                        </div>
                    </div>
                    <div className={style2.product_price_details}>
                        <div className={style2.product_price}> <h3>Price </h3> <h3>&#8377;148900</h3> <h3>&#8377;159900</h3></div>
                    </div>
                </div>
                <div className={style.container}>
                    <div></div>
                    <div>
                        <img src="https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-15-pro-max-natural-titanium.png?v=9166c13e" alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
