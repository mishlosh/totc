import { AlignCenterHorizontal } from "phosphor-react";

export default function MenuCategoryHeader({ header }) {
  return (
    <div>
      <hr />
      <h1 className="MenuCategoryHeader">{header}</h1>
      <hr />
    </div>
  );
}
