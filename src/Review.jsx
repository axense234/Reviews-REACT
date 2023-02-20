// React Icons
import { GoQuote } from "react-icons/go";

const Review = ({ img, name, role, reviewContent }) => {
  return (
    <div className='review-container'>
      <div id='img-container'>
        <img src={img} alt='' id='photo' />
        <GoQuote id='quote-id' />
      </div>
      <h4 id='name'>{name}</h4>
      <h5 id='role'>{role}</h5>
      <p id='review-content'>{reviewContent}</p>
    </div>
  );
};

export default Review;
