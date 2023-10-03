import React, { useState } from "react";
import ExpandedTable from "./ExpandedTable";
import ResultPoint from "./ResultPoint";

export default function MainTable({ data }) {
    const [expandedRows, setExpandedRows] = useState([]);

    const toggleRow = (index) => {
        if (expandedRows.includes(index)) {
            setExpandedRows(expandedRows.filter((item) => item !== index));
        } else {
            setExpandedRows([...expandedRows, index]);
        }
    };

    const isRowExpanded = (index) => {
        return expandedRows.includes(index);
    };

    return (
        <section className="table-section">
            <div className="container">
                <table className="main-table">
                    <thead className="main-table__header">
                        <tr>
                            <th className="main-table__header-team">Team</th>
                            <th>M</th>
                            <th>W</th>
                            <th>L</th>
                            <th>D</th>
                            <th>NR</th>
                            <th>PTS</th>
                            <th className="main-table__header-series">
                                Series Form
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <React.Fragment key={row.id}>
                                <tr className={expandedRows.includes(index) ? ' main-table__visible-tr active' : 'main-table__visible-tr'}>
                                    <td className="main-table__visible-tr__team">
                                        <div className="main-table__visible-tr__team-wrapper">
                                            <div className="main-table__visible-tr__team-logo">
                                                <img
                                                    className="main-table__visible-tr__team-logo-img"
                                                    src={row.teamIco}
                                                    alt="Team logo"
                                                />
                                            </div>
                                            <a className="main-table__visible-tr__team-name" href="#">
                                                {row.team}
                                            </a>
                                            <button
                                                className="main-table__visible-tr__team-btn"
                                                onClick={() =>
                                                    toggleRow(index)
                                                }>
                                                <svg>
                                                    <use href="#open"></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td>{row.M}</td>
                                    <td>{row.W}</td>
                                    <td>{row.L}</td>
                                    <td>{row.D}</td>
                                    <td>{row.NR}</td>
                                    <td>{row.PTS}</td>
                                    <td className="main-table__visible-tr__series">
                                        {row.series.map((result, index) => {
                                            return <ResultPoint key={index} point={result} />;
                                        })}
                                    </td>
                                </tr>
                                <tr
                                    className={
                                        isRowExpanded(index) ? "main-table__expanded-tr active" : "main-table__expanded-tr"
                                    }>
                                    <td className="main-table__expanded-td" colSpan="8">
                                        <div className="main-table__expanded-content">
                                            <ExpandedTable
                                                details={row.details}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
