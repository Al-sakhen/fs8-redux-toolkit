import { NavLink, useParams } from "react-router-dom";
import ProductReview from "../components/products/ProductReview";
import {
    useAddToCartMutation,
    useGetProductByIdQuery,
} from "../services/TariqApi";
import { toast } from "react-toastify";

const ShowProduct = () => {
    const { id } = useParams();
    const params = useParams();
    console.log(params);
    const { isLoading, isSuccess, data } = useGetProductByIdQuery(id);
    const [
        addToCart,
        { isError: failedToAdd, isSuccess: addedSuccessfully, error },
    ] = useAddToCartMutation();
    console.log({
        failedToAdd,
        addedSuccessfully,
        error,
    });

    const handleAddToCart = () => {
        addToCart(id);
    };
    if (addedSuccessfully) {
        toast.success("Added Successfully");
    }

    if (isLoading) {
        return <h1 className="text-3xl text-center">Loading...</h1>;
    }
    if (failedToAdd) {
        toast.error("Product already exist in the cart !");
    }
    return (
        <>
            <NavLink
                to={`/products`}
                className="p-2 px-4 text-xl font-semibold underline bg-red-400 rounded-lg "
            >
                Back
            </NavLink>

            <button
                onClick={handleAddToCart}
                className="p-2 ml-6 font-semibold bg-orange-700 rounded-2xl"
            >
                Add to cart
            </button>
            <div className="grid mt-8 md:grid-cols-3">
                <div>
                    <div className="flex justify-center">
                        <img
                            className="object-cover w-96"
                            src={data.product.mainImage?.secure_url}
                        />
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-3xl font-semibold text-center underline ">
                        {data.product.name}
                    </h1>
                    <div className="mt-12 pb-7">
                        <p className="text-xl font-semibold">
                            {data.product.description}
                        </p>
                        <p className="inline-block p-3 mt-6 text-xl font-semibold border rounded-lg">
                            <span className="text-2xl">Price: </span>$
                            {data.product.finalPrice}
                        </p>
                    </div>
                    <hr />
                    <div className="mt-7">
                        <h2 className="pb-4 text-2xl font-semibold underline">
                            Reviews :
                        </h2>
                        <div className="grid gap-3 md:grid-cols-2">
                            {data.product.reviews?.map((review) => (
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
