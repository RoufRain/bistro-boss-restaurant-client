import FoodCard from "../../Shared/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-10 items-center">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default OrderTab;
