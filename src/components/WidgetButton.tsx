import Header from "./Header";
import BodyText from "./BodyText";
//import { Link } from "react-router";

type Props = {
    title: string;
    body: string;
    address: string;
}

// Add address back in later
const WidgetButton = ( { title, body}: Props) => {
    return (
        <div className="bg-white mb-15 mx-10 md:mx-30 rounded-2xl">
            <Header title={title}></Header>
            <BodyText text={body}></BodyText>
            {/*
            <div className="flex justify-end py-5 px-10 px md:py-8 md:px-30">
                <Link to={address} className="font-bold font-montserrat bg-sky-600 rounded-2xl py-5 px-10 text-white hover:bg-sky-400">Learn More</Link>
            </div>
            */}
        </div>
    )
}
export default WidgetButton;