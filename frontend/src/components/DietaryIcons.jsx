export default function DietaryIcons({ tags }) {
  if (tags == null) {
    return "";
  }
  return (
    <>
      {tags.includes("D") ? (
        <img className="diet-icon" src="../images/Dairy.png" />
      ) : (
        ""
      )}
      {tags.includes("V") ? (
        <img className="diet-icon" src="../images/Vegan.webp" />
      ) : (
        ""
      )}
      {tags.includes("C") ? (
        <img className="diet-icon" src="../images/Shellfish.png" />
      ) : (
        ""
      )}
      {tags.includes("G") ? (
        <img className="diet-icon" src="../images/Gluten.png" />
      ) : (
        ""
      )}
      {tags.includes("S") ? (
        <img className="diet-icon" src="../images/Spicy.jpg" />
      ) : (
        ""
      )}
    </>
  );
}
