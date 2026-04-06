type Props = {
    title: string;
}

const Header = ({ title }: Props) => {
    return (
        <div className="p-8 md:p-12">
            <h1 className="font-bold font-montserrat text-blue-950 text-lg md:text-xl lg:text-4xl">
                {title}
            </h1>
        </div>
    )
}
export default Header;