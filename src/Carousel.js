import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state forward by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Increments currCardIdx state back by 1
  function goBack() {
    setCurrCardIdx(currCardIdx - 1);
  }

  const isLeftHidden = currCardIdx === 0 ? "leftHidden" : "";
  const isRightHidden = currCardIdx === total - 1 ? "rightHidden" : "";

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${isLeftHidden}`}
          onClick={goBack}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${isRightHidden}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
