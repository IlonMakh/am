import React from "react";
import CompanyCard from "./CompanyCard";
import { companyData } from "../../data/companyData";
import CompanyDetails from "./CompanyDetails";
import CompanyComment from "./CompanyComment";

export default function Company() {
    return <section className="company-section">
        <div className="container">
            <CompanyCard card={companyData.card}/>
            <CompanyDetails details={companyData.details} />
            <CompanyComment comment={companyData.comment} />
        </div>
    </section>;
}
