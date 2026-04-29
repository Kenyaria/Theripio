import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Chemicals from "../assets/Banners/chemicals.png";
import Header from "../components/Header";
import BodyText from "../components/BodyText";
import Fig1 from "../assets/Figures/graph.png";
import Fig2 from "../assets/Figures/age_related_cognitive_decline.png";

const AreaOfFocus = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Chemicals}
                alt="Flasks containing different colored fluids."
                height="h-[80dvh]"
            />
            <Header title="Disease Areas"/>
            <h1 className="text-center text-slate-700 text-lg md:text-2xl font-bold px-8 md:px-30 pb-20">
                Targeting MEF2C Haploinsufficiency Syndrome and Age-Related Cognitive Decline through biology-driven therapeutic innovation.
            </h1>
            
            <div className="bg-white mx-10 md:mx-30 rounded-xl pb-15">
                <Header title="MEF2C Haploinsufficiency Syndrome"/>
                <BodyText text="This severe monogenic neurodevelopmental disorder has been associated with mutations (in the form of deletions or point variants) in the MEF2C gene located at chromosome 5q14.3. 
                Currently there are no therapeutics available to address debilitating disorder. Increasing MEF2C provides an incisive genetic treatment. 
                Findings from Cooley-Coleman, Cowan et al, 2020 summarize common symptoms of MCHS to include:"
                />
                <div className="flex gap-10 md:gap-40 justify-center text-base md:text-xl mx-10">
                    <ul className="list-disc">
                        <li className="">Seizures</li>
                        <li>Absent or limited speech</li>
                        <li>Intellectual disabilities</li>
                        <li>Motor impairments</li>
                    </ul>
                    <ul className="list-disc">
                        <li>Sleep disturbances</li>
                        <li>Repetitive and stereotypical movements</li>
                        <li>Immune problems</li>
                        <li>Sensory impairments</li>
                    </ul>
                </div>
                <img className="py-10 md:py-20 px-10 md:px-70"
                    src={Fig1}
                    alt="Graph showing confirmed MCHS cases as of March 2025."
                >
                </img>
                <a className="block px-8 pb-8 md:px-30 md:pb-12"
                    href="https://www.rare-bird.org/">
                    Data sourced from the Rare Bird Foundation
                </a>
            </div>
            <div className="mt-20 bg-white mx-10 md:mx-30 rounded-xl pb-15 mb-20">
                <Header title="Age-Related Cognitive Decline"/>
                <BodyText 
                    text="Reduced levels of MEF2C protein in the immune cells of the brain, microglia, has been found to alter their normative functions and linked to age-related loss of cognitive ability. 
                    This problem is representing a large and recurrent market, including patients diagnosed with late-stage Alzheimer’s Disease. 
                    Our therapeutic strategies are targeted to increase MEF2C as a potential treatment."
                />
                <img className="py-10 md:py-20 px-10 md:px-70"
                    src={Fig2}
                    alt="Graphic showing cognitive decline over time with age."
                >
                </img>
            </div>
        </div>
    )
}

export default AreaOfFocus;