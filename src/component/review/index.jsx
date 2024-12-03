import React, { useState } from "react";
import styles from "./review.module.css";

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "St Glx",
      location: "South London",
      date: "24th September, 2023",
      text: "The positive aspect was undoubtedly the efficiency of the service. The queue moved quickly, the staff was friendly, and the food was up to the usual McDonald's standard – hot and satisfying.",
      rating: "⭐⭐⭐⭐⭐",
      avatar:
        "https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804752/Ellipse_3_dtq435.png",
    },
    {
      id: 2,
      name: "John Doe",
      location: "Central London",
      date: "18th October, 2023",
      text: "The service was quick and the staff was polite. However, the seating area could have been cleaner. Overall, a good experience.",
      rating: "⭐⭐⭐⭐",
      avatar:
        "https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804752/Ellipse_3_dtq435.png",
    },
    {
      id: 3,
      name: "Jane Smith",
      location: "East London",
      date: "5th November, 2023",
      text: "Excellent service! The staff was incredibly friendly, and the food was perfect. Would highly recommend.",
      rating: "⭐⭐⭐⭐⭐",
      avatar:
        "https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804752/Ellipse_3_dtq435.png",
    },
    {
      id: 4,
      name: "Mike Taylor",
      location: "West London",
      date: "12th November, 2023",
      text: "Great experience overall. Quick service and tasty food, but the fries could be fresher.",
      rating: "⭐⭐⭐⭐",
      avatar:
        "https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804752/Ellipse_3_dtq435.png",
    },
    {
      id: 5,
      name: "Alice Cooper",
      location: "North London",
      date: "20th November, 2023",
      text: "The food was great, but it took too long to get my order. The staff was friendly though.",
      rating: "⭐⭐⭐",
      avatar:
        "https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804752/Ellipse_3_dtq435.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= reviews.length - 3 ? 0 : prevIndex + 1
    );
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

  return (
    <div className={styles.reviewSection}>
      <div className={styles.slidingButtons}>
        <button onClick={handlePrev} className={styles.navButton}>
          &#8592;
        </button>
        <button onClick={handleNext} className={styles.navButton}>
          &#8594;
        </button>
      </div>
      <h2>Customer Reviews</h2>
      <div className={styles.reviewContainer}>
        {visibleReviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.header}>
              <div className={styles.profile}>
                <img
                  src={review.avatar}
                  alt={review.name}
                  className={styles.avatar}
                />
                <div className={styles.separator}></div>
                <div className={styles.revieweName}>
                  <h4>{review.name}</h4>
                  <p className={styles.location}>{review.location}</p>
                </div>
              </div>
              <div className={styles.rating}>{review.rating}</div>
            </div>
            <div className={styles.date}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732804417/Time_Span_ssqxf7.png"
                alt=""
              />
              <p>{review.date}</p>
            </div>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.bottomImg}>
        <img
          src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732799592/Rectangle_62_invdt9.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default CustomerReviews;
