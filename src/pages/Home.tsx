import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import BannerText from "../components/BannerText";
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
            <h1>Home page</h1>
        </div>
    )
}

export default Home;