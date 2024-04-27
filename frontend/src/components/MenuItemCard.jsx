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
      <div className="card mb-3" style={{ maxWidth: "75rem" }}>
        <div className="row">
          <div className="col menuImageFrame">
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
          <div className="col">
            <div className="card-body">
              {}
              <h5 className="card-title">{itemName}</h5>
              <p className="card-text">{description}</p>
              <a href="#" className="btn btn-primary">
                +
              </a>
            </div>
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
