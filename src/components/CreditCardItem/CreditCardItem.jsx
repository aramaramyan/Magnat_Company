import useFirestore from "../../hooks/useFirestore";
import visaIcon from "./../../icons/visa.svg";
import trashIcon from "./../../icons/trash.svg";
import "./CreditCardItem.css";

export default function CreditCardItem({card, allCards, currentCard}) {
  const {setCurrentCard, removeCard} = useFirestore();

  function setCurrent(evt) {
    evt.stopPropagation();
    if(card.id === currentCard.id) {
      setCurrentCard({id: null, name: null, numbers: null});
    } else {
      setCurrentCard(card);
    }
  }

  function deleteCard (evt) {
    evt.stopPropagation();
    if(card.id === currentCard.id) {
      setCurrentCard({id: null, name: null, numbers: null});
    }
    removeCard(card.id, allCards);
  }

  return (
    <div className="CreditCardItem" onClick={setCurrent}>
      <div className={`visa_logo ${card.id === currentCard.id? "current" : ""}`}>
        <img src={visaIcon} alt="Visa Logo"/>
      </div>
      <div className="credit_card_title">
        <h3>{`**** **** **** ${card.numbers}`}</h3>
        <p>{card.name}</p>
      </div>
      <div className="credit_card_delete" onClick={deleteCard}>
        <p>DELETE</p>
        <img src={trashIcon} alt="Trash Icon"/>
      </div>
    </div>
  );
}