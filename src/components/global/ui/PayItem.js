import React from "react";

export default function PayItem({ item }) {
    return (
        <a
            key={item.name}
            href={item.link}
            className="pay-item">
            <img
                className="pay-item__logo"
                src={item.logo}
                alt={item.name}
            />
        </a>
    );
}
