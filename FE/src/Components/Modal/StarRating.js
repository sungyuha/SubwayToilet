import React, {useState} from "react";
import {FaStar} from "react-icons/fa";
import "./StarRating.scss";

const StarRating = ({rating, setRating}) => {
    
    const [hover, setHover] = useState(null);

    return (
        <div className='star_rating'>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={ratingValue}>
                        <input type="radio" name='rating' value={ratingValue} onClick={() => setRating(ratingValue)} />
                        <FaStar className='star' color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} size={20} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                    </label>
                );
            })}
            <p>{rating}/5</p>
        </div>
    );
};

export default StarRating;