import {useRef, useState} from "react";
import {createPortal} from "react-dom";
import {useDispatch} from "react-redux";
import {closeCardModal} from "../../appState/appSlice";
import useFirestore from "../../hooks/useFirestore";
import useClickOutside from "../../hooks/useClickOutside";
import numberValidate from "../../helpers/numberValidate/numberValidate";
import nameValidation from "../../helpers/nameValidation/nameValidation";
import visaIcon from "./../../icons/visa.svg";
import warningIcon from "./../../icons/warning.svg";
import "./AddCardModal.css";

export default function AddCardModal({closeModal, elemRef, allCards}) {
  const [numbers, setNumbers] = useState({input1: "", input2: "", input3: "", input4: ""});
  const [cardHolderName, setCardHolderName] = useState("");
  const [expirationDate, setExpirationDate] = useState({month: "", year: ""});
  const [ccv, setCcv] = useState("");
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [error, setError] = useState("")
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const cardHolderRef = useRef();
  const ref = useRef();
  useClickOutside(ref, closeModal, elemRef);
  const {addCard} = useFirestore();
  const dispatch = useDispatch();

  function handleNumbers(key, value, ref) {
    if (value.length === 4 && +value >= 0) {
      setNumbers(prev => {
        return {
          ...prev,
          [key]: value
        }
      });

      ref.current.focus();
    } else if (numberValidate(+value) && value.length <= 4 && +value >= 0) {
      setNumbers(prev => {
        return {
          ...prev,
          [key]: value
        }
      });
    }
  }

  function handleName(evt) {
    if (nameValidation(evt.target.value)) {
      setCardHolderName(evt.target.value);
    }
  }

  function handleExpMonth(evt) {
    setExpirationDate(prev => {
      return {
        ...prev,
        month: evt.target.value
      };
    });
  }

  function handleExpYear(evt) {
    setExpirationDate(prev => {
      return {
        ...prev,
        year: evt.target.value
      };
    });
  }

  function cardFlip(evt) {
    evt.stopPropagation();
    setIsCardFlipped(true);
  }

  function cardUnFlip(evt) {
    evt.stopPropagation();
    setIsCardFlipped(false);
  }

  function handleCCV(evt) {
    if (numberValidate(+evt.target.value)) {
      setCcv(evt.target.value);
    }
  }

  function submit(evt) {
    evt.preventDefault();

    if(
      numbers.input1.length === 4
      && numbers.input2.length === 4
      && numbers.input3.length === 4
      && numbers.input4.length === 4
    ) {
      if(cardHolderName) {
        if(expirationDate.month && expirationDate.year) {
          if(ccv.length === 3) {
            const data = {
              id: Date.now(),
              numbers: numbers.input4,
              name: cardHolderName.toUpperCase()
            }

            addCard(data, allCards);
            dispatch(closeCardModal());
          } else {
            setError("Invalid CCV");
          }
        } else {
          setError("Please set expiration date");
        }
      } else {
        setError("Please fill card holder name");
      }
    } else {
      setError("Card numbers length must be 16 digits");
    }
  }

  return createPortal(
    <div className="AddCardModal">
      <div ref={ref} className="checkout">
        <div className={`credit-card-box ${isCardFlipped ? "hover" : ""}`}>
          <div className="flip">
            <div className="front">
              <div className="chip"/>
              <div className="logo">
                <img src={visaIcon} alt="Visa Logo"/>
              </div>
              <div className="number">
                <p>{numbers.input1}</p>
                <p>{numbers.input2}</p>
                <p>{numbers.input3}</p>
                <p>{numbers.input4}</p>
              </div>
              <div className="card-holder">
                <label>Card holder</label>
                <p>{cardHolderName}</p>
                <div/>
              </div>
              <div className="card-expiration-date">
                <label>Expires</label>
                <p>{(expirationDate.month || expirationDate.year)
                  && `${expirationDate.month}/${expirationDate.year.slice(2)}`}</p>
              </div>
            </div>
            <div className="back">
              <div className="strip"/>
              <div className="logo">
                <img src={visaIcon} alt="Visa Logo"/>
              </div>
              <div className="ccv">
                <label>CCV</label>
                <p>{ccv}</p>
              </div>
            </div>
          </div>
        </div>
        <form className="form" autoComplete="off" noValidate onClick={cardUnFlip}>
          <fieldset>
            <label htmlFor="card-number">Card Number</label>
            <input
              ref={inputRef1}
              type="text"
              className="input-cart-number"
              onChange={(evt) => handleNumbers("input1", evt.target.value, inputRef2)}
              maxLength="4"
            />
            <input
              ref={inputRef2}
              type="text"
              className="input-cart-number"
              onChange={(evt) => handleNumbers("input2", evt.target.value, inputRef3)}
              maxLength="4"
            />
            <input
              ref={inputRef3}
              type="text"
              className="input-cart-number"
              onChange={(evt) => handleNumbers("input3", evt.target.value, inputRef4)}
              maxLength="4"
            />
            <input
              ref={inputRef4}
              type="text"
              className="input-cart-number"
              onChange={(evt) => handleNumbers("input4", evt.target.value, cardHolderRef)}
              maxLength="4"
            />
          </fieldset>
          <fieldset>
            <label htmlFor="card-holder">Card holder</label>
            <input ref={cardHolderRef} type="text" onChange={handleName}/>
          </fieldset>
          <div className="expAndCcv_wrapper">
            <fieldset className="fieldset-expiration">
              <label htmlFor="card-expiration-month">Expiration date</label>
              <div className="select">
                <select id="card-expiration-month" onChange={handleExpMonth}>
                  <option/>
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                  <option>04</option>
                  <option>05</option>
                  <option>06</option>
                  <option>07</option>
                  <option>08</option>
                  <option>09</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </select>
              </div>
              <div className="select">
                <select id="card-expiration-year" onChange={handleExpYear}>
                  <option/>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
                </select>
              </div>
            </fieldset>
            <fieldset className="fieldset-ccv">
              <label htmlFor="card-ccv">CCV</label>
              <input
                type="text"
                maxLength="3"
                onChange={handleCCV}
                onClick={cardFlip}
              />
            </fieldset>
          </div>
          <button className="btn" onClick={submit}>Submit</button>
          <div className="card_error">
            {error && (
              <>
                <img src={warningIcon} alt="Warning Icon"/>
                <p>{error}</p>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
    ,
    document.body
  );
}