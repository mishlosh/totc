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
      <div className="card mb-3" style={{ maxWidth: "80rem" }}>
        <div className="row">
          <div className="col col-sm-6">
            <img
              src="../images/placeholder.png"
              alt=""
              width="500rem"
              height="200rem"
            />
          </div>
          <div className="col col-sm-6">
            <div className="card-body">
              {}
              <h5 className="card-title">{foodName}</h5>
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
