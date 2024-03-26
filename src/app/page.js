// import Image from "next/image";
import styles from "./Style/page.module.css";
import Slider from './Components/Slider'
import Category from "./Components/Category";
import Section1 from "./Components/Home/Section1";
import Section2 from "./Components/Home/Section2";
import Message from "./Components/Message";
import Warning from "./Components/Warning";


export default function Home() {
  return (
    <main className={styles.homePage}>
      <div>
        <Slider/>
      </div>
      <div>
        <Category/>
      </div>
      <div>
        <Section2/>
      </div>
      <div>
        <Section1/>
      </div>
    </main>
  );
}
