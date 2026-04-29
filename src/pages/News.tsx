import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Newspaper from "../assets/Banners/newspaper.jpg";
import List from "../components/List";
import PressRelease from "../data/PressRelease";
import Podcast from "../data/Podcast";
import Footer from "../components/Footer";

const News = () => {
    return (
        <div>
            <Navbar/>
            <Banner 
                src={Newspaper}
                alt={"Stack of newspapers"}
                height="h-[80dvh]"
            />
            <List 
                title="Press Release" 
                data= {PressRelease}
            />
            <List
                title="Podcast"
                data= {Podcast}
            />
            <Footer />
        </div>
    )
}

export default News;