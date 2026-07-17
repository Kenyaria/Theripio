import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import type { ListItem } from "../data/ListItem";

type Props = {
    data: ListItem[];
}

const List = ( {data}: Props ) => {
    const ITEMS_PER_PAGE = 50;
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

    const startIndex = page * ITEMS_PER_PAGE;
    const current = data.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const hasPagination = data.length > ITEMS_PER_PAGE;

    return (
        <div className="font-inter">
            {current.map((entry, i) => (
                <div key={i} className="px-8 md:px-30"> 
                    <p className="leading-loose text-sm md:text-lg pb-4 text-slate-500">{entry.date}</p>
                    <a href={entry.link} target="_blank" className="hover:text-sky-600 text-base md:text-2xl">
                    {entry.title}
                    </a>
                    <hr className="mt-10 mb-5 md:mt-15 md:mb-10 border-slate-400"/>
                </div>
            ))}

            {hasPagination && (
                <div className="flex justify-center gap-5 pb-10"> 
                    <button className="bg-sky-50 hover:bg-sky-400 cursor-pointer rounded-xl p-3"
                        onClick={() => setPage((p) => p - 1)}
                        disabled={page === 0}
                    >
                            <ChevronLeft />
                    </button>

                    {Array.from({ length: totalPages }, (_, j) => (
                        <button
                        key={j}
                        onClick={() => setPage(j)}
                        className={`text-lg hover:bg-sky-400 cursor-pointer rounded-xl py-3 px-5
                            ${
                                page === j ? "bg-sky-300" : "bg-sky-50"
                            }
                        `}
                        >
                            {j + 1}
                        </button>
                    ))}

                    <button className="bg-sky-50 hover:bg-sky-400 cursor-pointer rounded-xl p-3"
                        onClick={() => setPage((p) => p + 1)}
                        disabled={page === totalPages - 1}
                    >
                        <ChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
} 
export default List;