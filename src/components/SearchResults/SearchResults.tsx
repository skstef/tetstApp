import React from "react";
import { IHome } from "~/models/IHome";
import { Card } from "~components/Card/Card";
import { SeeMore } from "./SeeMore/SeeMore";

interface ISearchResultsProps {
    homes: IHome[];
}

export const SearchResults: React.FC<ISearchResultsProps> = ({ homes }) => (
    <main className="search-results">
        {homes.map((home) => (
            <Card key={home.id} home={home} />
        ))}
        <SeeMore />
    </main>
);
