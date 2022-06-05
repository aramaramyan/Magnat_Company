import likeIcon from "./../../icons/like.svg";
import dislikeIcon from "./../../icons/dislike.svg";
import "./CommentItem.css";
import getUserNameFirstLetter from "../../helpers/getUserNameFirstLetter/getUserNameFirstLetter";

export default function CommentItem({ type, productID, review, like, dislike }) {
  return (
    <div className="CommentItem">
      <div className="comment_img_wrapper">
        {review.user.image ? <img src={review.user.image} alt="User Image"/> : <p>{getUserNameFirstLetter(review.user.fullName)}</p>}
      </div>
      <div className="comment_content_wrapper">
        <div className="comment_title">
          <p className="comment_username">{review.user.fullName}</p>
          <p className="comment_date">{review.date}</p>
        </div>
        <p className="comment_text">{review.text}</p>
        <div className="comment_like_wrapper">
          <div className="like_button_wrapper">
            <p onClick={() => like(type, productID, review.id)}>LIKE</p>
            <p onClick={() => dislike(type, productID, review.id)}>DISLIKE</p>
          </div>
          {review.likes ? (
            <div className="like_wrapper">
              <img src={likeIcon} alt="Like Icon"/>
              <p>{review.likes}</p>
            </div>
          ) : null}
          {review.dislikes ? (
            <div className="dislike_wrapper">
              <img src={dislikeIcon} alt="Dislike Icon"/>
              <p>{review.dislikes}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}