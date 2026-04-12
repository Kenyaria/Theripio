type Props = {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="p-8 md:py-15 md:px-30">
            <h1 className="font-bold font-montserrat text-blue-950 text-base md:text-xl lg:text-4xl">
                {title}
            </h1>
        </div>
    )
}
export default Header;