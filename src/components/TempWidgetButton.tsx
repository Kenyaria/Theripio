import Header from "./Header";
import BodyText from "./BodyText";

type Props = {
    title: string;
    body: string;
}

const TempWidgetButton = ( { title, body}: Props) => {
    return (
        <div className="bg-white mb-15 mx-10 md:mx-30 rounded-2xl">
            <Header title={title}></Header>
            <BodyText text={body}></BodyText>
        </div>
    )
}
export default TempWidgetButton;