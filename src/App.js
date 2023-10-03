import React from "react";
import { tableData } from "./data/tableData";
import MainTable from "./components/table/MainTable";
import AppSvg from "./components/global/AppSvg";
import OffersList from "./components/offers/OffersList";
import Company from "./components/company/Company";

function App() {
    return (
        <div className="App">
            <OffersList />
            <Company />
            <MainTable data={tableData} />
            
            <AppSvg />
        </div>
    );
}

export default App;
