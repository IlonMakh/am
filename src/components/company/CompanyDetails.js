import React from "react";

export default function CompanyDetails({ details }) {
    return (
        <div className="company-details">
            {details.map((detail) => {
                return (
                    <div key={detail.title} className="company-details__item">
                        <img
                            className="company-details__item-ico"
                            src={detail.ico}
                            alt={detail.title}></img>
                        <div className="company-details__item-info">
                            <h6 className="company-details__item-info__title">
                                {detail.title}
                            </h6>
                            <p className="company-details__item-info__text">
                                {detail.text}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
