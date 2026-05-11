type Props = {
    text: string;
}

const BodyText = ({ text }: Props) => {
    return (
        <div className="px-8 pb-8 md:px-30 md:pb-12">
            <p className="font-inter tracking-wide text-gray-600 text-sm md:lg/10 lg:text-xl">
                {text}
            </p>
        </div>
    )
}
export default BodyText;