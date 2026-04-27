type Props = {
    src: string;
    alt: string;
}

const Image = ({ src, alt }: Props) => {
    return (
        <img
            className="py-10 md:py-20 px-10 md:px-70"
            src={src}
            alt={alt}
        ></img>
    )
}
export default Image;