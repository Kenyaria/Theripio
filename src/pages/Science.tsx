import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Shapes from "../assets/Banners/shapes.jpg";
import BodyText from "../components/BodyText";
import Image from "../components/Image";
import Fig1 from "../assets/Figures/modified_nucleic_acid.png";
import Fig2 from "../assets/Figures/recombinant_virus.png";
import Fig3 from "../assets/Figures/animal_model.png";
import Fig4 from "../assets/Figures/patient_derived_cell_lines.png";

const Science = () => {
    return (
        <div>
            <Navbar />
            <Banner 
                src={Shapes}
                alt="Abstract clear droplets on a blue background"
                height="h-[80dvh]"
            />
            <div>
            <Header title="Our Therapeutic Technologies"></Header>
            <h1 className="text-center text-slate-700 text-lg md:text-2xl font-bold">A platform of advanced technologies engineered to enable precise, gene-targeted therapeutics.</h1>
            </div>
            <div>
                <Header title="Modified Nucleic Acid-Based"/>
                <BodyText
                    text="Modified nucleic acids are an emerging class of therapeutics in preclinical drug development, offering a precise way to modulate gene expression at its source. 
                    By engineering molecules such as antisense oligonucleotides, mRNA, or gene-editing constructs, researchers can increase, decrease, or correct the production of specific proteins implicated in disease. 
                    Designed for specificity and optimized for stability and delivery, modified nucleic acids have the potential to restore normal biological function at the molecular level." />
                <Image
                    src={Fig1}
                    alt="Figure depicting use of modified nucleic approaches for gene therapy with antisense oligonucleotides,
                    mRNA therapy, siRNA and shRNA, and gened editing."
                />
                <BodyText 
                    text="In preclinical settings, they enable targeted intervention strategies that can be evaluated for efficacy and safety, helping to accelerate the development of transformative, disease-modifying therapies."
                />
            </div>
            <div>
                <Header title="Recombinant Virus Based-Approach"/>
                <BodyText
                    text="Recombinant viral technologies are a powerful platform in preclinical drug development, enabling targeted delivery of therapeutic genetic material directly to affected cells. 
                    By engineering viruses to safely carry and express specific genes, researchers can restore or enhance protein function in ways that address the underlying cause of disease." 
                />
                <img className="py-10 md:py-20 px-10 md:px-70"
                    src={Fig2}
                    alt="Figure describing process of recombinant AAV gene therapy in neurodevelopmental disorders and the therapeutic effects."
                    >
                </img>
                <BodyText
                    text="In preclinical studies, recombinant viral systems allow for precise evaluation of delivery, durability, and safety, supporting the advancement of gene-based therapies with the potential for lasting clinical benefit."
                />
            </div>

            <div className="bg-sky-500 my-20 pb-20">
                <Header title="Model Systems"/>
                <div className="bg-white mx-10 md:mx-30 rounded-xl mb-20">
                    <Header title="Animal Models"/>
                    <BodyText
                        text="Transgenic animal models are a cornerstone of preclinical research, enabling scientists to study disease mechanisms and evaluate potential therapies in a controlled, biologically relevant context. 
                        By introducing, modifying, or silencing specific genes, these models can replicate key aspects of human conditions at the molecular and physiological levels. 
                        This is particularly valuable in monogenic disorders such as MEF2C Haploinsufficiency Syndrome, where targeted genetic alterations allow researchers to investigate how reduced gene function impacts development and to assess strategies aimed at restoring normal expression. 
                        These models provide critical insights into therapeutic efficacy, dosing, and safety, helping to de-risk and guide the advancement of treatments toward clinical development."
                    />
                    <img className="py-10 md:py-20 px-10 md:px-70"
                        src={Fig3}
                        alt="Figure depicting mouse model use in gene therapies."
                    >
                    </img>
                </div>

                <div className="bg-white mx-10 md:mx-30 rounded-xl pb-15">
                    <Header title="Patient Derived Cell Lines"/>
                    <BodyText
                        text="Patient-derived stem cells are a powerful tool in preclinical research, enabling the study of human disease biology in a highly relevant cellular context. 
                        By reprogramming a patient’s somatic cells into induced pluripotent stem cells (iPSCs) and differentiating them into disease-relevant cell types, researchers can model key aspects of pathology in vitro. 
                        This approach is especially valuable for conditions such as MEF2C Haploinsufficiency Syndrome, where patient-specific cells allow for the investigation of how reduced gene expression impacts neuronal development and function. 
                        These models also provide a scalable platform for screening therapeutic candidates, optimizing dosing strategies, and assessing safety, ultimately helping to bridge the gap between discovery and clinical translation."
                    />
                    <img className="py-10 md:py-20 px-10 md:px-70"
                        src={Fig4}
                        alt="Figure depicting stem cell extraction for gene therapy."
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}

export default Science;