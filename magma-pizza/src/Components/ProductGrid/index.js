import React from 'react';
import { MenuItem } from '../MenuItem';

function ProductGrid() {
    return <div>
        <div className="mx-10 grid grid-cols-4 gap-6">
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