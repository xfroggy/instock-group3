import React from 'react';
import { Link } from 'react-router-dom';
import WarehouseAdd from "../components/warehouse/WarehouseAdd";

export default function WarehousePage() {
    return (
        <>
            <h1>On the WarehousePage</h1>
            <Link to="/warehouse/add" component={WarehouseAdd} />
        </>
    )
}

