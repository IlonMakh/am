import React from 'react'
import Gift from "../../../assets/offers/gift.png";

export default function BonusBlock({bonus, description}) {
  return (
    <div className="bonus">
    <div className="bonus__suptitle">
        <img
            className="bonus__suptitle-ico"
            src={Gift}
            alt="Gift ico"
        />
        <span className="bonus__suptitle-text">
            Welcome bonus
        </span>
    </div>
    <h5 className="bonus__title">
        {bonus}
    </h5>
    <p className="bonus__description">
        {description}
    </p>
</div>
  )
}
