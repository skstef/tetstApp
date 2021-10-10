import React from "react";

interface ISearchBoxProps {
    setSearchTitle: React.Dispatch<React.SetStateAction<string>>;
    searchTitle: string;
}

export const SearchBox: React.FC<ISearchBoxProps> = ({
    searchTitle,
    setSearchTitle,
}) => {
    const handleSearchBoxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setSearchTitle(e.target.value);
    };
    return (
        <div className="search-box">
            <div className="search-box__title">Filter</div>
            <input
                value={searchTitle}
                name="search"
                type="search"
                className="search-box__input"
                onChange={handleSearchBoxChange}
            />
        </div>
    );
};
