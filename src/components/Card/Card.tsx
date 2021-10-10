import faker from "faker";
import React from "react";
import { Link } from "react-router-dom";
import { IHome } from "~/models/IHome";
import { convertNumberToComaFormat } from "~/utils/convertNumberToComaFormat";
import { CardLabel } from "./CardLabel/CardLabel";

interface ICardProps {
    home: IHome;
}

export const Card: React.FC<ICardProps> = ({ home }) => (
    <Link to={`/details/${home.id}`} className="card">
        <div className="card__image-wrapper">
            <img
                src={faker.image.nature()}
                alt={home.title}
                className="card__image"
            />
            <CardLabel label={home.type} />
        </div>

        <div className="card__info">
            <h3 className="card__info__title">{home.title}</h3>
            <h5 className="card__info__address">{home.address}</h5>

            <h6 className="card__info__price">
                <span>{"New Properties for Sale from "}</span>
                <b>{`£${convertNumberToComaFormat(home.price)}`}</b>
            </h6>
            <div className="card__info__shared-ownership">
                Shared Ownership Available
            </div>
        </div>
    </Link>
);
