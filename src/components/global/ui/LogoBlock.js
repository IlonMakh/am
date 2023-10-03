import React from "react";

export default function LogoBlock({logo}) {
    return (
        <div className="logo">
            <img
                className="logo__img"
                src={logo}
                alt="Company logo"
            />
        </div>
    );
}
