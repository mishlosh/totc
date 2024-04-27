import { AlignBottom, AlignRight } from "phosphor-react";
import "../pages/Menu/Menu.css";
export default function MenuItemCard({
  itemId,
  itemName,
  imagepath,
  foodName,
  description,
  price,
  category,
  filter,
  dietaryTags,
}) {
  return (
    <>
      <div className="card mb-3 menuItem">
        <div className="row">
          <div className="col col-4 menuImageFrame">
            {imagepath == null || imagepath == "null" ? (
              <img
                className="menuImage"
                src="../images/placeholder.png"
                alt=""
              />
            ) : (
              <img className="menuImage" src={imagepath} alt="" />
            )}
          </div>
          <div className="col col-8 card-body">
            <h5 className="card-title">{itemName}</h5>
            <p className="card-text">{description}</p>
            <p className="card-price">${price}</p>
            <a href="#" className="btn btn-primary menuBttn">
              +
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
