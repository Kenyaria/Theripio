import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerText from "../components/BannerText";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import WidgetButton from "../components/WidgetButton";
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
            <WidgetButton
                title="Our Disease Areas"
                body="Our work focuses on developing innovative treatments for MEF2C Haploinsufficiency Syndrome (MCHS) and Age-Related Cognitive Decline, with an emphasis on restoring critical gene function."
                address="/areasoffocus"
            />
            <WidgetButton
                title="Science"
                body="Discover a curated body of research and publications shaping the therapeutic landscape for MEF2C Haploinsufficiency Syndrome (MCHS) and informing the development of next-generation treatments."
                address="/science"
            />
            <WidgetButton
                title="News"
                body="News and updates advancing research and advocacy in MEF2C Haploinsufficiency Syndrome."
                address="/news"
            />
        </div>
    )
}

export default Home;