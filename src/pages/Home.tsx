import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerText from "../components/BannerText";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import Microscope from "../assets/banners/microscope2.jpg";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Microscope}
                alt="Close up of a microscope."
                height="h-[80dvh]"
            />
            <BannerText/>
            <Header 
                title="Our Vision"
            />
            <BodyText 
                text="We exist to change what’s possible for individuals living with rare neurodevelopmental disorders. At Theripio Innovations, we are pioneering targeted therapeutic strategies that go beyond symptom management to address the underlying biology of disease. "
            />
        </div>
    )
}

export default Home;