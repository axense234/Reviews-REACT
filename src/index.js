import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
// CSS
import "./style.css";
// People
import { people } from "./people";
// React Icons
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { GoQuote } from "react-icons/go";

const MainApp = () => {
  const [review, setReview] = useState(1);
  const [isMax, setIsMax] = useState(false);
  const [isMin, setIsMin] = useState(false);

  const changeReview = (direction) => {
    if (direction === "right" && isMax === false) {
      setReview(review + 1);
    } else if (direction === "right" && isMax === true) {
      setReview(1);
      setIsMax(false);
    }
    if (direction === "left" && isMin === false) {
      setReview(review - 1);
    } else if (direction === "left" && isMin === true) {
      setReview(people.length);
      setIsMin(false);
    }
  };

  const randomReview = () => {
    const number = Math.floor(Math.random() * people.length + 1);
    setReview(number);
  };

  useEffect(() => {
    if (review === people.length) {
      setIsMax(true);
    } else if (review === 1) {
      setIsMin(true);
    }
  }, [review]);

  return (
    <>
      <h1 id='title'>Our Reviews</h1>
      <hr />
      <section>
        <Review
          img={people[review - 1].img}
          id={people[review - 1].id}
          name={people[review - 1].name}
          role={people[review - 1].role}
          reviewContent={people[review - 1].reviewContent}
        ></Review>
        <div id='button-container'>
          <button id='chevron-left' onClick={() => changeReview("left")}>
            {/* Chevron Left */}
            <GrFormPrevious></GrFormPrevious>
          </button>
          <button id='chevron-right' onClick={() => changeReview("right")}>
            {/* Chevron Right */}
            <GrFormNext></GrFormNext>
          </button>
        </div>
        <button id='surprise-me-btn' onClick={() => randomReview()}>
          Surprise me
        </button>
      </section>
    </>
  );
};

const Review = (props) => {
  const { img, name, role, reviewContent } = props;
  return (
    <>
      <div className='review-container'>
        <div id='img-container'>
          <img src={img} alt='' id='photo' />
          {/* Quote */}
          <GoQuote id='quote-id'></GoQuote>
        </div>
        <h4 id='name'>{name}</h4>
        <h5 id='role'>{role}</h5>
        <p id='review-content'>{reviewContent}</p>
      </div>
    </>
  );
};

ReactDOM.render(<MainApp></MainApp>, document.getElementById("root"));
