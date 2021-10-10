import React from "react";
import ChevronSvg from "../../../assets/chevron.svg";

export const SeeMore: React.FC = () => (
    <div className="see-more">
        <button className="see-more__btn">
            <span>See more</span>
            <ChevronSvg />
        </button>
    </div>
);
