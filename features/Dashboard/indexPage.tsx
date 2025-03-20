import React from "react";
import Site from "../../resources/js/layouts/Site";

const indexPage = () => {
    return (
        <Site title="Dashboard" breadcrumbs={[{ title: "Home", href: "/" }]}>
            <h1>Welcome to Dashboard</h1>
        </Site>
    )
};

export default indexPage;