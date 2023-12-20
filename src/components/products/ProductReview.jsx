const ProductReview = ({ review }) => {
    return (
        <>
            <div className="p-2 mb-4 border rounded-2xl">
                <div className="flex items-center gap-6 font-bold border-b border-dashed">
                    <p className="text-xl ">{review.createdBy.userName}</p>
                    <p className="text-xl ">{review.rating}/5</p>
                </div>
                <p className="text-lg">{review.comment}</p>
            </div>
        </>
    );
};

export default ProductReview;
