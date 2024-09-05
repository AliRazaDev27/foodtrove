import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const RatingStar = ({ rating }:{rating:number}) => {
  console.log("rating",rating)
  if(!rating) rating = 0
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  console.log(emptyStars)

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className="text-yellow-400" />
      ))}
      {hasHalfStar && <FaStarHalfAlt className="text-yellow-400" />}
      {emptyStars > 0 && [...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className="text-yellow-400" />
      ))}
    </div>
  );
};

export default RatingStar;
