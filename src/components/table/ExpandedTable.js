import React from "react";
import ResultPoint from "./ResultPoint";

export default function ExpandedTable({ details }) {
    return (
        <table className="expanded-table">
            <thead className="expanded-table__header">
                <tr>
                    <th className="expanded-table__header-opponent">
                        Opponent
                    </th>
                    <th className="expanded-table__header-date">Date</th>
                    <th className="expanded-table__header-result">Result</th>
                </tr>
            </thead>
            <tbody>
                {details.map((detail) => (
                    <React.Fragment key={detail.id}>
                        <tr className="expanded-table__tr">
                            <td className="expanded-table__tr__opponent">
                                <div className="expanded-table__tr__opponent-wrapper">
                                    <div className="expanded-table__tr__opponent-logo">
                                        <img
                                            className="expanded-table__tr__opponent-logo-img"
                                            src={detail.oponentIco}
                                            alt="Team logo"
                                        />
                                    </div>
                                    <a
                                        className="expanded-table__tr__opponent-name"
                                        href="#">
                                        {detail.oponent}
                                    </a>
                                </div>
                            </td>
                            <td>{detail.date}</td>
                            <td className="expanded-table__tr__result">
                                <div className="expanded-table__tr__result-wrapper">
                                    <ResultPoint point={detail.result.sum} />
                                    <a href="#" className="expanded-table__tr__result-link">{detail.result.info}</a>
                                </div>
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    );
}
