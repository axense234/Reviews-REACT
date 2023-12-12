// React
import { useState } from "react";
// Data
import { people } from "./data";
// Components
import Review from "./Review";
// React Icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Main = () => {
  const [reviewId, setReviewId] = useState(1);

  const randomReview = () => {
    const number = Math.floor(Math.random() * people.length + 1);
    setReviewId(number);
  };

  const { img, id, name, role, reviewContent } = people.find(
    (person) => person.id === reviewId
  );

  return (
    <div className='reviews-container'>
      <div className='reviews-container__title'>
        <h1 id='title'>Our Reviews</h1>
        <hr />
      </div>
      <section className='reviews-container__review'>
        <Review
          img={img}
          id={id}
          name={name}
          role={role}
          reviewContent={reviewContent}
        ></Review>
        <div className='reviews-container__buttons'>
          <button
            type='button'
            onClick={() =>
              setReviewId((prevReviewId) =>
                prevReviewId - 1 === 0 ? people.length : prevReviewId - 1
              )
            }
          >
            <GrFormPrevious/>
          </button>
          <button type='button' onClick={() => randomReview()}>
            Surprise me
          </button>
          <button
            type='button'
            onClick={() =>
              setReviewId((prevReviewId) =>
                prevReviewId + 1 > people.length ? 1 : prevReviewId + 1
              )
            }
          >
            <GrFormNext/>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Main;
