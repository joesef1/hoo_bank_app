import styles from "./style";
import  Billing from "./componets/Billing";
import  Business from "./componets/Business";
import  CardDeal from "./componets/CardDeal";
import  Clients from "./componets/Clients";
import  CTA from "./componets/CTA";
import  Footer from "./componets/Footer";
import  Navbar from "./componets/Navbar";
import  Stats from "./componets/Stats";
import  Testimonials from "./componets/Testimonials";
import  Hero from "./componets/Hero";
// import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "../src/componets";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
         <Hero/> 
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
         <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer /> 
      </div>
    </div>
  </div>
);

export default App;