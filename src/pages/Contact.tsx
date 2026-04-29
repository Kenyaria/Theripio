import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MUSC from "../assets/Banners/MUSC.jpg";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={MUSC}
                alt="Building on the Medical University of South Carolina's campus"
                height="h-[80dvh]"
            />
            <h1
                className="text-center py-10 font-bold font-montserrat text-blue-950 text-lg md:text-xl lg:text-4xl"
            >Contact Us
            </h1>
            <h3 className="text-center text-slate-700 text-lg md:text-2xl font-bold px-8 md:px-30 pb-20">
                For questions or to request information, please contact us.
            </h3>

            <div 
                className="mb-15 mx-10 md:mx-30 rounded-2xl bg-sky-500 px-10 py-10"
            >
                <h3 className="font-bold font-montserrat text-blue-950 text-md md:text-lg">
                    Email:
                </h3>
                <a href="mailto:theripioinno@gmail.com">
                    <h4 className="font-inter text-white text-md md:text-lg hover:text-blue-700">
                        theripioinno@gmail.com
                    </h4>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;