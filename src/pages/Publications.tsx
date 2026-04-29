import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Computer from "../assets/Banners/computer.jpg";
import List from "../components/List";
import PublicationData from "../data/PublicationData";

const Publications = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Computer}
                alt={"Overhead view of hands typing on laptop on a desk"}
                height="h-[80dvh]"
            />
            <List 
                title="Publications"
                data = {PublicationData}
                />
        </div>
    )
}

export default Publications;