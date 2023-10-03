import React from "react";

export default function ResultPoint({ point }) {
    const getResultClass = (point) => {
        return point === "W"
            ? "result-point green"
            : point === "L"
            ? "result-point red"
            : "result-point grey";
    };
    return (
        <a href="#" className={getResultClass(point)}>
            {point.slice(0, 1)}
        </a>
    );
}
