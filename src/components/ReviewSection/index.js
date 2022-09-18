import './index.css'
import {AiFillStar} from 'react-icons/ai'
import ReactPopUp from '../ReactPopUp'

const ReviewSection = () => (
  <>
    <div className="reviews-container">
      <h1 className="review-heading">Reviews</h1>
      <div className="stars-button-container">
        <div className="stars-container">
          <AiFillStar />
          5/5
          <p className="no-of-reviews">136 Reviews</p>
        </div>
        <div>
          <button type="submit" className="button">
            Write a review
          </button>
        </div>
      </div>
      <ul className="reviews-list-container">
        <li className="list-item">
          <img
            src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1657032568/Teddy_bear_edvwfm.png"
            alt=""
            className="teddy-bear"
          />
          <div className="desc-rtg-con">
            <p className="description1">
              Truly a professional people to get your service done with them.
            </p>
            <AiFillStar />
          </div>
        </li>
        <li className="list-item">
          <img
            src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1657032568/Teddy_bear_edvwfm.png"
            alt=""
            className="teddy-bear"
          />
          <div className="desc-rtg-con">
            <p className="description1">
              The quality of their work is impeccable and simply amazing!!
            </p>
            <AiFillStar />
          </div>
        </li>
        <li className="list-item">
          <img
            src="https://res.cloudinary.com/djfaxrxbf/image/upload/v1657032568/Teddy_bear_edvwfm.png"
            alt=""
            className="teddy-bear"
          />
          <div className="desc-rtg-con">
            <p className="description1">
              Great ambience, fully equipped, superb professionals..
            </p>
            <AiFillStar />
          </div>
        </li>
      </ul>
      <p className="description2">View all reviews</p>
      <ReactPopUp />
    </div>
  </>
)
export default ReviewSection
