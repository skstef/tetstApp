import React, { useEffect, useState } from "react";
import { getHomes } from "~/api/getHomes";
import { IHome } from "~/models/IHome";
import { Header } from "~components/Header/Header";
import { SearchBox } from "~components/SearchBox/SearchBox";
import { SearchResults } from "~components/SearchResults/SearchResults";

const Main: React.FC = () => {
    const [homes, setHomes] = useState<IHome[]>([]);
    const [searchTitle, setSearchTitle] = useState("");

    useEffect(() => {
        const { request, cancel } = getHomes();

        (async () => {
            const requestedHomes = await request();
            if (searchTitle.length > 3) {
                const filteredHomes = requestedHomes.filter(({ title }) =>
                    title.toLowerCase().includes(searchTitle.toLowerCase())
                );
                setHomes(filteredHomes);
            } else {
                setHomes(requestedHomes);
            }
        })();

        return () => {
            cancel();
        };
    }, [searchTitle]);

    return (
        <div className="main">
            <Header />
            <SearchBox
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
            />
            <SearchResults homes={homes} />
        </div>
    );
};

export default Main;
