import React, { useState } from "react";
import FireIco from "../../assets/offers/fire.png";
import OffersMore from "./OffersMore";
import PayItem from "../global/ui/PayItem";
import ClaimBtn from "../global/ui/ClaimBtn";
import FeaturesList from "../global/ui/FeaturesList";
import LogoBlock from "../global/ui/LogoBlock";
import Rating from "../global/ui/Rating";
import BonusBlock from "../global/ui/BonusBlock";

export default function OffersItem({ info, number }) {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const toggleInfo = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    return (
        <div className="offers__item">
            <div className="offers__item-header">
                <div className="offers__item-header__name">
                    <span className="offers__item-header__name-number">
                        {number}
                    </span>
                    <img
                        className="offers__item-header__name-ico"
                        src={FireIco}
                        alt="top offer"
                    />
                    <h4 className="offers__item-header__name-company">
                        {info.name}
                    </h4>
                </div>
                {info.isBest && (
                    <div className="offers__item-header__best">Best offer</div>
                )}
                <Rating rating={info.rating} />
            </div>

            <div className="offers__item-body">
                <div className="offers__item-body__info">
                    <LogoBlock logo={info.logo} />
                    <BonusBlock bonus={info.bonus} description={info.description} />
                </div>

                <FeaturesList features={info.features} />

                <div className="offers__item-body__payment">
                    <div className="offers__item-body__payment-variants">
                        {info.payment.map((item, index) => {
                            return (
                                <PayItem key={index} item={item} />
                            );
                        })}
                    </div>
                    <button className="offers__item-body__payment-btn" onClick={toggleInfo}>
                        <span>{isInfoOpen ? "Hide info" : "More info"}</span>
                        <svg className= {isInfoOpen ? "offers__item-body__payment-btn-ico rotated" : "offers__item-body__payment-btn-ico"}>
                            <use href="#open_offers" />
                        </svg>
                    </button>
                </div>

                <div className="offers__item-body__buttons">
                    <ClaimBtn link="#" />
                    <a href="#" className="offers__item-body__buttons-read">
                        Read Review
                    </a>
                </div>
            </div>
            <OffersMore isOpen={isInfoOpen} more={info.more} />
        </div>
    );
}
