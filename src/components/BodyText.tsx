type Props = {
    text: string;
}

const BodyText = ({ text }: Props) => {
    return (
        <div className="px-8 pb-8 md:pl-12 md:pr-30 md:pb-12">
            <p className="font-inter tracking-wide text-gray-600 text-sm md:text-base lg:text-lg/8">
                {text}
            </p>
        </div>
    )
}
export default BodyText;