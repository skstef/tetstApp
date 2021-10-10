import classNames from "classnames";
import React from "react";
import { LIVING_TYPE } from "~/models/LIVING_TYPE";

interface ICardLabelProps {
    label: LIVING_TYPE;
}

export const CardLabel: React.FC<ICardLabelProps> = ({ label }) => (
    <h1
        className={classNames("card-label", {
            ["card-label--support"]: label === LIVING_TYPE.SupportAvailable,
            ["card-label--independent"]:
                label === LIVING_TYPE.IndependentLiving,
        })}
    >
        {label === LIVING_TYPE.SupportAvailable &&
            "Restaurant & Support available"}
        {label === LIVING_TYPE.IndependentLiving && "Independent living"}
    </h1>
);
