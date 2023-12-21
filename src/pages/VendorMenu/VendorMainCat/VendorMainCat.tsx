import "./VendorMainCat.scss";
import { IoCaretBackOutline, IoCaretForwardOutline } from "react-icons/io5";

const image =
  "https://i.pinimg.com/564x/5c/42/5a/5c425a68294d82f637c13070a659cd6d.jpg";
const fakecats = [
  { id: 1, iamge: image, title: "Pizza", desc: "some thenal dndfkl kljfds" },
  { id: 2, iamge: image, title: "Pizza", desc: "some thenal dndfkl kljfds" },
  { id: 3, iamge: image, title: "Pizza", desc: "some thenal dndfkl kljfds" },
  { id: 4, iamge: image, title: "Pizza", desc: "some thenal dndfkl kljfds" },
];
const VendorMainCat = () => {
  return (
    <div className="vendor-main-cat-wrapper">
      {fakecats.map((main) => (
        <div key={main.id} className="each-vendor-main-cat">
          <img src={main.iamge} alt="main" />
          <h3>{main.title}</h3>
          <p>{main.desc}</p>
        </div>
      ))}
      <div className="each-vendor-main-cat-switcher">
        <button className="vendor-main-cat-switcher-btn">
          <IoCaretBackOutline />
        </button>
        <button className="vendor-main-cat-switcher-btn">
          <IoCaretForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default VendorMainCat;
