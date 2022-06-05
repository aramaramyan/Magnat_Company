import "./CheckItem.css";

export default function CheckItem({ product }) {
  return (
    <div className="CheckItem">
      <p>{product.title}</p>
      <p>{`${product.count} x`}</p>
      <p>{`${product.price}$`}</p>
      <p>{`${product.count * product.price}$`}</p>
    </div>
  );
}