import React from "react";

export default function Rating({ rating }) {
    return (
        <div className="rating">
            <span className="rating__sum">{rating}</span>
            <div className="rating__stars">
                {Array.from({ length: 5 }, (_, index) => (
                    <svg key={index} className="rating__stars-ico">
                        <use href="#star" />
                    </svg>
                ))}
            </div>
        </div>
    );
}
