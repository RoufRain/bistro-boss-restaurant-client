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
    </div>
  );
};

export default MenuCategory;
