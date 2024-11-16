import React from "react";
import Sidebar from "./Sidebar";

const Upgrades = () => {


    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            {/* Sidebar */}
            <Sidebar/>

            <main style={{ flex: 1, padding: '1.5rem' }}>
                Add Stuff Here
            </main>
        </div>
    )
}

export default Upgrades;