import React from "react";
import LogoBlock from "../global/ui/LogoBlock";
import Rating from "../global/ui/Rating";
import FeaturesList from "../global/ui/FeaturesList";
import PayItem from "../global/ui/PayItem";
import BonusBlock from "../global/ui/BonusBlock";
import ClaimBtn from "../global/ui/ClaimBtn";

export default function CompanyCard({ card }) {
    return (
        <div className="company-card">
            <div className="company-card__info">
                <div className="company-card__info-header">
                    <LogoBlock logo={card.logo} />
                    <div className="company-card__info-header__name">
                        <h4 className="company-card__info-header__name-title">
                            {card.name}
                        </h4>
                        <Rating rating={card.rating} />
                        <div className="company-card__info-header__name-filters">
                            {card.filters.map((filter) => (
                                <a
                                    key={filter.name}
                                    className="company-card__info-header__name-filters-item"
                                    href={filter.link}>
                                    {filter.name}
                                </a>
                            ))}
                        </div>
                        <div className="company-card__info-header__name-systems">
                            {card.systems.map((system) => {
                                return (
                                    <div
                                        key={system.name}
                                        className="company-card__info-header__name-systems__item">
                                        <img
                                            className="company-card__info-header__name-systems__item-img"
                                            src={system.logo}
                                            alt="name"></img>
                                        <svg className="company-card__info-header__name-systems__item-allowed">
                                            <use
                                                href={
                                                    system.isAllowed
                                                        ? "#check"
                                                        : "#cross"
                                                }
                                            />
                                        </svg>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="company-card__info-bonus">
                    <BonusBlock
                        bonus={card.bonus.title}
                        description={card.bonus.description}
                    />
                    <ClaimBtn />
                </div>
                <FeaturesList features={card.features} />
                <div className="company-card__info-payment">
                    {card.payment.map((item, index) => {
                        return <PayItem key={index} item={item} />;
                    })}
                </div>
            </div>
            <div className="company-card__bonus">
                <div className="company-card__bonus-header">
                    <img
                        className="company-card__bonus-header-bg"
                        src={card.bonus.bg}
                        alt="background"></img>
                    <svg className="company-card__bonus-header-logo">
                        <use href="#parimatch" />
                    </svg>
                </div>
                <BonusBlock
                    bonus={card.bonus.title}
                    description={card.bonus.description}
                />
                <ClaimBtn />
            </div>
        </div>
    );
}
