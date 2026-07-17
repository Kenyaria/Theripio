import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Computer from "../assets/Banners/computer.jpg";
import List from "../components/List";
import PublicationData from "../data/PublicationData";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Publications = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Computer}
                alt={"Overhead view of hands typing on laptop on a desk"}
                height="h-[80dvh]"
            />
            <Header title="Publications"></Header>
            <div className="bg-white mb-15 mx-10 md:mx-30 rounded-2xl px-8 py-8 md:px-30 md:py-12">
                <p className="leading-loose font-inter tracking-wide text-gray-600 text-sm md:lg/10 lg:text-xl">
                    Discover <span className="font-bold">a curated body of research and publications</span> shaping the therapeutic landscape for MEF2C Haploinsufficiency Syndrome (MCHS) and informing the development of next-generation treatments.
                </p>
            </div>
            <List 
                data = {PublicationData}
                />
            <Footer />
        </div>
    )
}

export default Publications;