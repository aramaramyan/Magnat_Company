import {useState} from "react";
import useFirestore from "../../hooks/useFirestore";
import CommentItem from "../CommentItem/CommentItem";
import SendButton from "../SendButton/SendButton";
import getSortedArrFromObj from "../../helpers/getSortedArrFromObj";
import getDate from "../../helpers/getDate";
import commentsIcon from "./../../icons/comments.svg";
import "./Reviews.css";

export default function Reviews({type, user, product}) {
  const [state, setState] = useState("");
  const [placeholder, setPlaceholder] = useState("Write your review here...");
  const {addComment, likeComment, dislikeComment, removeLike, removeDislike} = useFirestore()
  const reviewsArr = getSortedArrFromObj(product.reviews);

  function handleTextarea(evt) {
    setState(evt.target.value);
  }

  function isTextExist() {
    if(!state) {
      setPlaceholder("You can't send empty review!");
      return false;
    } else {
      const comment = {
        id: Date.now(),
        text: state,
        date: getDate(),
        likes: 0,
        dislikes: 0,
        user: {
          fullName: user.fullName,
          image: user.image
        }
      }
      addComment(type, product.id, comment, product.reviews);
      setState("");
      setPlaceholder("Write your review here...");

      return true;
    }
  }

  function like(type, productID, commentID) {
    const isLikeExist = user.likes.some(item => item === commentID);
    const isDislikeExist = user.dislikes.some(item => item === commentID);

    if(!isLikeExist && !isDislikeExist) {
      likeComment(type, productID, commentID);
    } else if(isLikeExist && !isDislikeExist) {
      removeLike(type, productID, commentID);
    } else {
      removeDislike(type, productID, commentID);
      likeComment(type, productID, commentID);
    }
  }

  function dislike(type, productID, commentID) {
    const isDislikeExist = user.dislikes.some(item => item === commentID);
    const isLikeExist = user.likes.some(item => item === commentID);

    if(!isLikeExist && !isDislikeExist) {
      dislikeComment(type, productID, commentID);
    } else if(!isLikeExist && isDislikeExist) {
      removeDislike(type, productID, commentID);
    } else {
      removeLike(type, productID, commentID);
      dislikeComment(type, productID, commentID);
    }
  }

  return (
    <div className="Reviews">
      <div className="review_items">
        {reviewsArr.map(item => <CommentItem
          type={type}
          like={like}
          dislike={dislike}
          review={item}
          key={item.id}
          productID={product.id}
        />)}
      </div>
      <div className="review_textarea_wrapper">
        <textarea
          name="review"
          cols="30" rows="3"
          value={state}
          placeholder={placeholder}
          onChange={handleTextarea}
        />
        <div className="review_textarea_footer">
          <div className="reviews_icon_wrapper">
            <img src={commentsIcon} alt="Comments Icon" className="icon24"/>
            <p>Reviews</p>
          </div>
          <SendButton isTextExist={isTextExist}/>
        </div>

      </div>
    </div>
  );
}