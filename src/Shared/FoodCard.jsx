const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} />
      </figure>
      <div className="card-body">
        <p className="absolute bg-slate-900 top-4 right-4 text-white px-4 py-1">
          ${price}
        </p>
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-orange-400 bg-slate-300  border-b-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
