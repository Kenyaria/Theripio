import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Charleston from "../assets/Banners/bridge.jpg";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import Profile from "../components/Profile";
import Chris from "../assets/People/Chris.png";
import Alain from "../assets/People/Alain.png";
import Kiki from "../assets/People/Kiki.png";
import MEF2C from "../assets/Partnerships/mef2c_foundation.png";
import MUSC from "../assets/Partnerships/musc.png";
import Qatar from "../assets/Partnerships/qatar.png";
import RareBird from "../assets/Partnerships/rare_bird.png";
import ViralGen from "../assets/Partnerships/viralgen.png";
import WeillCornell from "../assets/Partnerships/weill_cornell.png";
import Zucker from "../assets/Partnerships/zucker.png";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Charleston}
                alt="Aerial view of the Ravenel bridge."
                height="h-[80dvh]"
            />
            
            <Header title="Our History"/>
            <BodyText text= "The Pathways to Hope Research Initiative was originally conceptualized by our founder, Dr. Christopher Cowan. This initiative was graciously supported with seed funding approaching $1 million dollars from a variety of sources including the Rare Bird Foundation and the Qatar Embassy in Washington, D.C."/>
            <br />
            <BodyText text="Patent protection for our novel therapeutic strategies were filed in 2025 at which time Theripio Innovations, LLC was founded. Ongoing research and development has been supported by Phase 2 seed funding from the aforementioned foundations, as well as the MUSC IDEA Grant and [CWC-TSB award]"/>

            <Header title="Meet the Team"/>
            <div className="flex justify-center gap-10 md:gap-30 py-10 flex-wrap">
                <Profile 
                    src= {Chris}
                    alt="Portrait of Dr. Christopher Cowan"
                    id="Christopher Cowan, PhD"
                    description= "Founder and Owner"
                />
                <Profile 
                    src = {Alain}
                    alt= "Portrait of Alain Greige"
                    id= "Alain Greige, MD/PhD Candidate"
                    description ="Co-Founder and CSO"
                />
                <Profile 
                    src = {Kiki}
                    alt = "Portrait of Dr. Kenyaria Noble"
                    id = "Kenyaria Noble, PhD"
                    description = "Senior Scientist and COO"
                />
            </div>

            <Header title= "Strategic Partnerships"/>
            <div 
                className="flex flex-wrap justify-center gap-x-15 gap-y-10 md:gap-y-30 rounded-3xl bg-white my-15 mx-8 md:mx-30 p-10">
                <a 
                    href="https://www.mef2cfoundation.com/" target="_blank">
                    <img
                        className="h-12 md:h-32"
                        src ={MEF2C}
                        alt="MEF2C foundation logo"
                    >   
                    </img>
                </a>
                <a 
                    href="https://www.rare-bird.org/" target="_blank">
                    <img
                        className="h-12 md:h-32"
                        src={RareBird}
                        alt="Rare Bird foundation logo"
                    >
                    </img>
                </a> 
                <a
                    href="https://washington.embassy.qa/en"
                    target="_blank"
                >
                    <img
                        className="h-12 md:h-32"
                        src={Qatar}
                        alt="Qatar embassy logo"
                    >
                    </img>
                </a>
                <a
                    href="https://www.musc.edu/"
                    target="_blank"
                >
                    <img
                        className="h-12 md:h-32"
                        src={MUSC}
                        alt="MUSC logo"
                    ></img>
                </a>
                <a
                    href="https://viralgen.com/"
                    target="_blank"
                >
                    <img
                        className="h-12 md:h-32"
                        src={ViralGen}
                        alt="Viralgen logo"
                    >
                    </img>
                </a>
                <a
                    href="https://weill.cornell.edu/"
                    target="_blank"
                >
                    <img
                        className="h-12 md:h-32"
                        src={WeillCornell}
                        alt="Weill Cornell Medicine logo"
                    >
                    </img>
                </a>
                <a
                    href="https://www.zuckerinnovation.org/"
                    target="_blank"
                >
                    <img
                        className="h-12 md:h-32"
                        src={Zucker}
                        alt="Zucker Institute logo"
                    >
                    </img>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default About;