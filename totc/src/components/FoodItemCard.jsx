function FoodItemCard({ foodName, description, price, category, filter }) {
  return (
    <>
      {
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            {}
            <h5 className="card-title">{foodName}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      }
    </>
  );
}

export default FoodItemCard;
