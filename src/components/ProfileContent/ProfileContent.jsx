import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {closeCardModal, handleAddCardModal} from "../../appState/appSlice";
import AddCardModal from "../AddCardModal/AddCardModal";
import settingsIcon from "./../../icons/settings.svg";
import creditCardIcon from "./../../icons/creditCard.svg";
import noCardsIcon from "./../../icons/no_cards.svg";
import historyIcon from "./../../icons/history.svg";
import banIcon from "./../../icons/ban.svg";
import CreditCardItem from "../CreditCardItem/CreditCardItem";
import "./ProfileContent.css";
import getSortedArrFromObj from "../../helpers/getSortedArrFromObj";
import ProfileInput from "./ProfileInput/ProfileInput";
import Check from "../Check/Check";

export default function ProfileContent({user = {}}) {
  const isCardModalOpen = useSelector(state => state.app.isCardModalOpen);
  const elemRef = useRef();
  const dispatch = useDispatch();
  const cards = getSortedArrFromObj(user.cards);

  function handleModal() {
    dispatch(handleAddCardModal());
  }

  function closeModal() {
    dispatch(closeCardModal());
  }

  return (
    <div className="ProfileContent">
      <div className="left">
        <div>
          <div className="profile_content_title">
            <img src={settingsIcon} alt="User Settings Icon"/>
            <p>User Settings</p>
          </div>
          <ProfileInput value={user.fullName}/>
        </div>
        <div className="profile_content_title">
          <img src={creditCardIcon} alt="Credit Card Icon"/>
          <p>Credit Cards</p>
          <div ref={elemRef} className="add_credit_card" onClick={handleModal}>
            <p>+ Add Card</p>
          </div>
        </div>
        <div className="credit_cards">
          {cards.map(card => (
            <CreditCardItem
              key={card.id}
              card={card}
              allCards={cards}
              currentCard={user.currentCard}
            />
          ))}
          {!cards.length && (
            <div className="empty_cards">
              <img src={noCardsIcon} alt="No Cards Icon" className="icon24"/>
              <p>There are no cards</p>
            </div>
          )}
        </div>
      </div>
      <div className="right">
        <div className="profile_content_title">
          <img src={historyIcon} alt="Shopping History Icon"/>
          <p>Purchases</p>
        </div>
        <div className="history">
          {user.history.length ? (
            user.history.map(item => <Check item={item}/>
            )) : (
              <div className="no_purchases">
                <img src={banIcon} alt="Ban Icon" className="icon24"/>
                <p>No completed purchases</p>
              </div>
          )}
        </div>
      </div>
      {isCardModalOpen && <AddCardModal closeModal={closeModal} elemRef={elemRef} allCards={user.cards}/>}
    </div>
  );
}