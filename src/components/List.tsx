import Header from "./Header";
import type { ListItem } from "../data/ListItem";

type Props = {
    title: string;
    data: ListItem[];
}

const List = ( {title, data}: Props ) => {
    return (
        <div>
            <Header title={title}></Header>
            {data.map((entry, i) => (
                <div key={i} className="px-8 md:px-30"> 
                    <p className="pb-4">{entry.date}</p>
                    <a href={entry.link} target="_blank" className="hover:text-sky-600 text-base md:text-xl">
                    {entry.title}
                    </a>
                    <hr className="mt-15 mb-10"/>
                </div>
            ))}
        </div>
    );
} 
export default List;