import React from "react";
import PayItem from "../global/ui/PayItem";

export default function OffersMore({ isOpen, more }) {
    return (
        <div
            className={isOpen ? "offers__item-more open" : "offers__item-more"}>
            <div className="offers__item-more__payment">
                {more.payment.map((item, index) => {
                    return (
                        <PayItem key={index} item={item} />
                    );
                })}
            </div>
            <p className="offers__item-more__description">{more.description}</p>
            <ul className="offers__item-more__advantages">
                {more.advantages.map((adv, index) => (
                    <li
                        key={index}
                        className="offers__item-more__advantages-item">
                        {adv}
                    </li>
                ))}
            </ul>
            <ul className="offers__item-more__disadvantages">
                {more.disadvantages.map((disadv, index) => (
                    <li
                        key={index}
                        className="offers__item-more__disadvantages-item">
                        {disadv}
                    </li>
                ))}
            </ul>
        </div>
    );
}
