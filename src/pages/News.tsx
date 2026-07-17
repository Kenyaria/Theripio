import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Newspaper from "../assets/Banners/newspaper.jpg";
import List from "../components/List";
import PressRelease from "../data/PressRelease";
import Podcast from "../data/Podcast";
import Footer from "../components/Footer";
import Header from "../components/Header";

const News = () => {
    return (
        <div>
            <Navbar/>
            <Banner 
                src={Newspaper}
                alt={"Stack of newspapers"}
                height="h-[80dvh]"
            />
            <Header title="Press Release"></Header>
            <List 
                data= {PressRelease}
            />
            <Header title="Podcast"></Header>
            <List
                data= {Podcast}
            />
            <Footer />
        </div>
    )
}

export default News;