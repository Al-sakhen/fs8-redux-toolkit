import { useEffect, useState } from "react";
import ProductCard from "./../components/products/ProductCard";
import axios from "axios";
const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const { data } = await axios.get(
            "https://ecommerce-node4.vercel.app/products?limit=8"
        );
        setProducts(data.products);
        console.log(data.products[0])
    };
    
    useEffect(() => {
        getProducts();
    }, []);

    if (products.length == 0) return <h1 className="text-3xl text-center">Loading...</h1>;

    return (
        <>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;
