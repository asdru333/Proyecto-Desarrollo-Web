import React from 'react';
import { MenuItem, MenuPizzaItem } from '../MenuItem';
import { useEffect, useState } from "react";

function ProductGrid({url}) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsFetch = await fetch(url);
            const productsJSON = await productsFetch.json();
            setItems(productsJSON);
            setLoading(false);
        }

        fetchProducts();
    }, []);


    return (
        loading ? <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
        </div> : (
        <div>
            <div className="mx-10 mb-20 grid lg:grid-cols-5 gap-8 lg:pr-40">
            {
                items && items.map((i) => {
                    return (
                        <div>
                            <MenuItem name= {`${i.name}`} description={`${i.description}`} price= {`${i.price}`} image= {`${i.image}`} alt= {`${i.name}`}/>
                        </div>
                    )
                })
            }
            </div>
        </div>
        )
    )
}

function ProductGridPizza({url}) {
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsFetch = await fetch(url);
            const productsJSON = await productsFetch.json();
            setItems(productsJSON);
            setLoading(false);
        }

        fetchProducts();
    }, []);


    return (
        loading ? <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <div className="w-16 h-16 border-b-2 border-pizza rounded-full animate-spin"></div>
        </div> : (
        <div>
            <div className="mx-10 mb-20 grid lg:grid-cols-5 gap-8 lg:pr-40">
            {
                items && items.map((i) => {
                    return (
                            <MenuPizzaItem name= {`${i.name}`} description={`${i.description}`} price= {`${i.price}`} image= {`${i.image}`} alt= {`${i.name}`}/>
                    )
                })
            }
            </div>
        </div>
        )
    )
}

export {ProductGrid, ProductGridPizza};