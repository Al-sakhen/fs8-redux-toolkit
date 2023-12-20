import ProductCard from "./../components/products/ProductCard";
import { useGetProductsQuery } from "../services/TariqApi";
import { useState } from "react";
const Products = () => {
    const [limit, setLimit] = useState(5);
    const { isSuccess, isLoading, isFetching, data, refetch } =
        useGetProductsQuery(limit);

    const handleLimit = (e) => {
        setLimit(e.target.value);
        refetch();
    };
    if (isLoading) return <h1 className="text-3xl text-center">Loading...</h1>;

    return (
        <>
            limit
            <select onChange={handleLimit} className="ml-4 w-14 mb-9">
                <option value="1" selected={limit == 1}>
                    1
                </option>
                <option value="2" selected={limit == 2}>
                    2
                </option>
                <option value="5" selected={limit == 5}>
                    5
                </option>
                <option value="8" selected={limit == 8}>
                    8
                </option>
                <option value="100" selected={limit == 100}>
                    100
                </option>
            </select>
            <datalist id="browsers">
                <option value="Edge" />
                <option value="Firefox" />
                <option value="Chrome" />
                <option value="Opera" />
                <option value="Safari" />
            </datalist>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {data.products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Products;
