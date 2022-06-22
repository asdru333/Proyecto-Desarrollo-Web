import React from 'react';
import { MenuItem } from '../MenuItem';

function ProductGrid() {
    return <div>
        <div className="mx-10 grid lg:grid-cols-5 gap-8 lg:pr-40">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </div>
    </div>;
}

export default ProductGrid;