import React from "react";

export default function FeaturesList({ features }) {
    return (
        <ul className="features-list">
            {features.map((feature, index) => (
                <li key={index} className="features-list__item">
                    {feature}
                </li>
            ))}
        </ul>
    );
}
