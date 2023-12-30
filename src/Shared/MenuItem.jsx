const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div className="flex space-x-4 mb-2">
      <img
        // style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[120px] rounded-r-full rounded-b-full "
        src={image}
        alt=""
      />
      <div>
        <h2 className="uppercase">{name}----------</h2>
        <p>{recipe}</p>
        <h4>${price}</h4>
      </div>
    </div>
  );
};

export default MenuItem;
