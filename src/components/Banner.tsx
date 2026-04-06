type Props = {
    src: string;
    alt: string;
    height: string;
}

const Banner = ({ src, alt, height }: Props) => {
    return (
        <div className={`w-screen image--height: ${height}`}>
            <img
                className="w-full h-full object-cover"
                src={src}
                alt={alt}
            ></img>
        </div>
    )
}
export default Banner;