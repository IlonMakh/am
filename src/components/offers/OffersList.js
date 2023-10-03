import React from "react";
import { offersData } from "../../data/offersData";
import OffersItem from "./OffersItem";

export default function OffersList() {
    return (
        <section className="offers-section">
            <div className="container">
                <div className="offers">
                    {offersData.map((item, index) => {
                        return <OffersItem key={index} info={item} number={index + 1} />;
                    })}
                </div>
            </div>
        </section>
    );
}
