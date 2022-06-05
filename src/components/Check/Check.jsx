import CheckItem from "./CheckItem/CheckItem";
import instagramQR from "./../../icons/instagram_qr.svg";
import "./Check.css";

export default function Check({item}) {
  const totalAmount = item.products.reduce((aggr, val) => aggr += val.count * val.price, 0);

  return (
    <div className="Check">
      <div className="check_start" />
      <div className="check_content">
        <div className="check_title">
          <h3>Magnat Hookah ©</h3>
          <p>{item.date}</p>
          <p>{`Purchase ID: ${item.id}`}</p>
        </div>
        <div className="check_products">
          {item.products.map(product => <CheckItem key={product.id} product={product}/>)}
        </div>
        <div className="check_total">
          <p>Total Amount:</p>
          <p>{`${totalAmount}$`}</p>
        </div>
        <div className="check_card">
          <p>VISA:</p>
          <p>{`**** **** **** ${item.card}`}</p>
        </div>
        <div className="check_footer">
          <p>- Thanks For Shopping -</p>
          <img src={instagramQR} alt="Git QR" className="icon32"/>
        </div>
      </div>
      <div className="check_end" />
    </div>
  );
}