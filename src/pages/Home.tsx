import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerText from "../components/BannerText";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import WidgetButton from "../components/WidgetButton";
import Microscope from "../assets/Banners/microscope2.jpg";
import Footer from "../components/Footer";
// Remove later
import TempWidgetButton from "../components/TempWidgetButton";

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
                text="We exist to change what's possible for individuals living with rare neurodevelopmental
disorders. At Theripio Innovations, we are researching targeted therapeutic strategies designed,
in preclinical models, to address the underlying biology of disease rather than symptoms alone."
            />
            {/* Add later */}
            {/*
            <WidgetButton
                title="Our Disease Areas"
                body="Our work focuses on developing innovative treatments for MEF2C Haploinsufficiency Syndrome (MCHS)."
                address="/areasoffocus"
            />
            <WidgetButton
                title="Science"
                body="Discover a curated body of research and publications shaping the therapeutic landscape for MEF2C Haploinsufficiency Syndrome (MCHS) and informing the development of next-generation treatments."
                address="/science"
            />
            */}
            {/* Remove later*/}
            <TempWidgetButton
                title="Our Disease Areas"
                body="Our research focuses on developing investigational treatment candidates for MEF2C
Haploinsufficiency Syndrome (MCHS)."
            />
            <TempWidgetButton
                title="Science"
                body="Discover a curated body of research and publications shaping the therapeutic landscape for
MEF2C Haploinsufficiency Syndrome (MCHS) and informing our preclinical research toward
next-generation treatment candidates."
            />
            <WidgetButton
                title="News"
                body="News and updates advancing research and advocacy in MEF2C Haploinsufficiency Syndrome."
                address="/news"
            />
            <Footer />
        </div>
    )
}

export default Home;