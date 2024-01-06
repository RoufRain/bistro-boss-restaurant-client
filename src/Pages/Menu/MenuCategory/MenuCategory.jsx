import { Link } from "react-router-dom";
import CoverBanner from "../../../Shared/CoverBanner";
import MenuItem from "../../../Shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && (
        <CoverBanner bgimg={coverImg} title={title}>
          {" "}
        </CoverBanner>
      )}
      <div className="grid md:grid-cols-2 gap-10 mb-8 mt-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4  items-center justify-center mb-4">
          Order Your Favourite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
