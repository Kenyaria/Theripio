import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ContactBanner from "../assets/Banners/contact.png";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={ContactBanner}
                alt="Theripio logo"
                height="h-[80dvh]"
            />
            <h1
                className="text-center py-10 font-bold font-montserrat text-blue-950 text-lg md:text-4xl lg:text-5xl"
            >Contact Us
            </h1>
            <h3 className="text-center text-slate-700 text-xl md:text-2xl font-bold px-8 md:px-30 pb-20">
                For questions or to request information, please contact us.
            </h3>

            <div className="flex justify-center">
                <div 
                    className="w-128 mb-15 mx-10 md:mx-30 rounded-2xl bg-sky-500 px-10 py-10"
                >
                    <h3 className="text-center font-bold font-montserrat text-blue-950 text-md md:text-xl">
                        Email:
                    </h3>
                    <a href="mailto:theripioinno@gmail.com">
                        <h4 className="text-center font-inter text-white text-md md:text-xl hover:text-blue-700">
                            theripioinno@gmail.com
                        </h4>
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;