import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./product.module.css";
import { fetchRestaurantDetails } from "../../services";
import { fetchRestaurants } from "../../services";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import { useNavigate } from "react-router-dom";
import ProductCover from "../../component/productCoverContainer";
import ProductNavbar3 from "../../component/productNavbar3";
import ProductDeliveryInformation from "../../component/productDeliveryInformation";
import MapComponent from "../../component/map";
import CustomerReviews from "../../component/review";
import ProductDiscountImage from "../../component/productDiscountImage";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Cart from "../cart";

const Product = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [isCartVisible, setCartVisible] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const loadRestaurants = async () => {
      try {
        const data = await fetchRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Error loading restaurants:", error.message);
      }
    };
    loadRestaurants();
  }, []);

  useEffect(() => {
    const loadRestaurantDetails = async () => {
      try {
        const data = await fetchRestaurantDetails(id);
        setRestaurant(data);
      } catch (error) {
        console.error("Error loading restaurant details:", error.message);
      }
    };
    loadRestaurantDetails();
  }, [id]);

  const handleAddToCart = (foodItem, categoryName) => {
    dispatch(addToCart({ ...foodItem, category: categoryName }));
    setCartVisible(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  // Filter food items based on the search query
  const filteredCategories = restaurant.foodCategories.map((category) => ({
    ...category,
    foodItems: category.foodItems.filter((foodItem) =>
      foodItem.name.toLowerCase().includes(searchQuery)
    ),
  }));

  return (
    <div>
      <div className={styles.container}>
        <Navbar />
        <ProductCover />

        <div className={styles.subNavbar2}>
          <div className={styles.logoContainer}>
            <h2 className={styles.logoh2}>
              Up to -40% 🎊 Order.uk exclusive deals
            </h2>
          </div>

          <div className={styles.navLinks2}>
            <div className={styles.searchContainer}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732785920/Search_More_lesxpp.png"
                alt="Search Icon"
                className={styles.searchIcon}
              />
              <input
                type="text"
                className={styles.navItem2}
                placeholder="Search from menu..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>

        <ProductNavbar3 />
        <ProductDiscountImage />

        <div className={styles.productPage}>
          <div className={styles.categories}>
            {filteredCategories.map((category, index) =>
              category.foodItems.length > 0 ? (
                <div key={index} className={styles.category}>
                  <h2 className={styles.categoryName}>
                    {category.categoryName}
                  </h2>
                  <div className={styles.foodItems}>
                    {category.foodItems.map((foodItem, index) => (
                      <div key={index} className={styles.foodCard}>
                        <div className={styles.foodDetails}>
                          <h3>{foodItem.name}</h3>
                          <p>{foodItem.description}</p>
                          <h4>₹{foodItem.price}</h4>
                        </div>
                        <div className={styles.imageWrapper}>
                          <img
                            src={foodItem.imageUrl}
                            alt={foodItem.name}
                            className={styles.foodImage}
                          />
                          <div className={styles.plusIcon}>
                            <img
                              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732788158/Plus_1_epmbyc.png"
                              alt="Plus"
                              onClick={() =>
                                handleAddToCart(foodItem, category.categoryName)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null
            )}
          </div>

          {isCartVisible && (
            <div className={styles.cartContainer}>
              <Cart />
            </div>
          )}
        </div>

        <ProductDeliveryInformation />
        <MapComponent />
        <CustomerReviews />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
