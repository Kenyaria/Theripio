type Props = {
    src: string;
    alt: string;
    id: string;
    description: string;
}

const Profile = ({src, alt, id, description}: Props) => {
    return (
        <div className="flex flex-col gap-5 justify-center text-center">
            <img
                className="rounded-full h-64"
                src= {src}
                alt= {alt}
            >
            </img>
            <h3 className="font-bold text-blue-950 font-montserrat text-lg">{id}</h3>
            <p className="text-slate-500 font-inter">{description}</p>
        </div>
    )
}
export default Profile;