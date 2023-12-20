import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import ProductReview from "../components/products/ProductReview";

const ShowProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const getProduct = async () => {
        const { data } = await axios.get(
            `https://ecommerce-node4.vercel.app/products/${id}`
        );
        setProduct(data.product);
        console.log(data.product);
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (Object.keys(product).length === 0) {
        return <h1 className="text-3xl text-center">Loading...</h1>;
    }
    return (
        <>
            <NavLink
                to={`/products`}
                className="p-2 px-4 text-xl font-semibold underline bg-red-400 rounded-lg "
            >
                Back
            </NavLink>
            <div className="grid mt-8 md:grid-cols-3">
                <div>
                    <div className="flex justify-center">
                        <img
                            className="object-cover w-96"
                            src={product.mainImage?.secure_url}
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-3xl font-semibold text-center underline ">
                        {product.name}
                    </h1>
                    <div className="mt-12 pb-7">
                        <p className="text-xl font-semibold">
                            {product.description}
                        </p>
                        <p className="inline-block p-3 mt-6 text-xl font-semibold border rounded-lg">
                            <span className="text-2xl">Price: </span>$
                            {product.finalPrice}
                        </p>
                    </div>
                    <hr />
                    <div className="mt-7">
                        <h2 className="pb-4 text-2xl font-semibold underline">
                            Reviews :
                        </h2>
                        <div className="grid gap-3 md:grid-cols-2">
                            {product.reviews?.map((review) => (
                                <ProductReview
                                    key={review._id}
                                    review={review}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProduct;
