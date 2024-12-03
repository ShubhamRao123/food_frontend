import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { fetchRestaurants } from "../../services";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import Offer from "../../component/offer";

function Home() {
  const [restaurants, setRestaurants] = useState([]);
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

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  return (
    <div>
      <div className={styles.container}>
        <Navbar />

        <div className={styles.cover}>
          <div className={styles.coverContent}>
            <span className={styles.coverContentSpan}>
              Order Restaurant food, takeaway and groceries.
            </span>
            <h2>
              Feast Your Senses, <br />
              <span>Fast and Fresh</span>
            </h2>
            <p>Enter a postcode to see what we deliver</p>
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className={styles.postcodeInput}
              />
              <button className={styles.searchButton}>Search</button>
            </div>
          </div>
          <div className={styles.coverImgContainer}>
            <div className={styles.imgContainer}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732598857/Untitled-1_1_iyupoo.png"
                alt="Main Image"
              />
            </div>
            <div className={styles.img2Container}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732599620/Untitled-2_1_b9xitz.png"
                alt="Secondary Image"
              />
            </div>
            <div className={styles.orangeBackground}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732604111/image_1_ghdn3z.png"
                alt=""
              />
            </div>
            <div className={styles.blueBackground}>
              <div className={styles.imgReplacement}>
                <img
                  className={styles.orderUkLogo}
                  src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610306/LOGO_2_mpcnuk.png"
                  alt="Another Rectangle Box"
                />
                <h6>now</h6>
                <h5>
                  We’ve Received your order!{" "}
                  <img
                    className={styles.trackingLogo}
                    src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610617/Tracking_ubzttq.png"
                    alt=""
                  />
                </h5>
                <p>Awaiting Restaurant acceptance </p>
              </div>
            </div>

            <div className={styles.blueBackground1}>
              <div className={styles.imgReplacement1}>
                <img
                  className={styles.orderUkLogo1}
                  src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610306/LOGO_2_mpcnuk.png"
                  alt="Another Rectangle Box"
                />
                <h6>now</h6>
                <h5>
                  Order Accepted! !{" "}
                  <img
                    className={styles.trackingLogo1}
                    src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610617/Tick_Box_vx08ho.png"
                    alt=""
                  />
                </h5>
                <p>Your order will be delivered shortly </p>
              </div>
            </div>

            <div className={styles.blueBackground2}>
              <div className={styles.imgReplacement2}>
                <img
                  className={styles.orderUkLogo2}
                  src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610306/LOGO_2_mpcnuk.png"
                  alt="Another Rectangle Box"
                />
                <h6>now</h6>
                <h5>
                  Order Accepted! !{" "}
                  <img
                    className={styles.trackingLogo2}
                    src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732610617/Tick_Box_vx08ho.png"
                    alt=""
                  />
                </h5>
                <p>Your order will be delivered shortly </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.subNavbarContainer}>
          <div className={styles.subNavbar2}>
            <div className={styles.logoContainer}>
              <h2 className={styles.logoh2}>
                Up to -40% 🎊 Order.uk exclusive deals
              </h2>
            </div>

            <div className={styles.navLinks2}>
              <a className={styles.navItem2} href="#">
                Vegan
              </a>
              <a className={styles.navItem2} href="#">
                Sushi
              </a>
              <a className={styles.navItem2} href="#">
                Pizza & Fast food
              </a>
              <a className={styles.navItem2} href="#">
                Others
              </a>
            </div>
          </div>
        </div>

        <Offer />

        <div className={styles.subNavbar2}>
          <h2 className={styles.logoh2}>Order.uk Popular Categories 🤩</h2>
        </div>

        <div className={styles.dishCategories}>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621626/Rectangle_13_kvpehu.png"
              alt="Dish 1"
            />
            <div className={styles.dishItemDescription}>
              <h4>Burgers & Fast food</h4>
              <p>21 Restaurants</p>
            </div>
          </div>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621626/Rectangle_15_yo5tgh.png"
              alt="Dish 2"
            />
            <div className={styles.dishItemDescription}>
              <h4>Salads</h4>
              <p>32 Restaurants</p>
            </div>
          </div>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621626/Rectangle_17_epfbym.png"
              alt="Dish 3"
            />
            <div className={styles.dishItemDescription}>
              <h4>Pasta & Casuals</h4>
              <p>4 Restaurants</p>
            </div>
          </div>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621625/Rectangle_19_qnvq1w.png"
              alt="Dish 4"
            />
            <div className={styles.dishItemDescription}>
              <h4>Pizza</h4>
              <p>32 Restaurants</p>
            </div>
          </div>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621625/Rectangle_21_wruxnu.png"
              alt="Dish 5"
            />
            <div className={styles.dishItemDescription}>
              <h4>Breakfast</h4>
              <p>4 Restaurants</p>
            </div>
          </div>
          <div className={styles.dishItem}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732621625/Rectangle_23_mbk6pr.png"
              alt="Dish 6"
            />
            <div className={styles.dishItemDescription}>
              <h4>Soups</h4>
              <p>32 Restaurants</p>
            </div>
          </div>
        </div>

        <div className={styles.restaurantContainer}>
          <div className={styles.restaurantNav}>
            <h2 className={styles.restaurantNavLogo}>Popular Restaurants </h2>
          </div>
          <div className={styles.grid}>
            {restaurants.map((restaurant) => (
              <div
                key={restaurant._id}
                className={styles.card}
                onClick={() => handleRestaurantClick(restaurant._id)}
              >
                <div className={styles.imageContainer}>
                  <img
                    src={restaurant.restaurantImageUrl}
                    alt={restaurant.name}
                    className={styles.image}
                  />
                </div>
                <p className={styles.name}>{restaurant.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.coverAdvertisement}>
          <div className={styles.coverAdvertisementImg}>
            <div className={styles.coverAdvertisementImgContainer}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732631428/friends-laughing-using-mobiles_2_clguo1.png"
                alt="Main Image"
              />
            </div>
          </div>

          <div className={styles.coverAdvertisementContent}>
            <div className={styles.advertisementLogoContainer}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732632395/LOGO_1_1_ddsqev.png"
                alt="Logo"
              />
              <span className={styles.advertisementSpan}>ing is more</span>
            </div>
            <p className={styles.advertisementHeading}>
              Personalised{" "}
              <span className={styles.advertisementHeadingSpan}>& Instant</span>
            </p>

            <p className={styles.advertisementDescription}>
              Download the Order.uk app for faster ordering
            </p>
            <div className={styles.advertisementBadges}>
              <img
                src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732447465/app-store-badges-en_1_v3ljd2.png"
                alt="App Store Badges"
              />
            </div>
          </div>
        </div>

        <div className={styles.partner}>
          <div className={styles.partnerCard}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732640928/Group_10_1_p0uis4.png"
              alt="Partner with us"
            />
          </div>
          <div className={styles.partnerCard}>
            <img
              src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732640928/Group_16_xhoria.png"
              alt="Ride with us"
            />
          </div>
        </div>

        <div className={styles.aboutUs}>
          <div className={styles.subNavbarContainer}>
            <div className={styles.subNavbar2}>
              <div className={styles.logoContainer}>
                <h2 className={styles.logoh2}>Know more about us!</h2>
              </div>

              <div className={styles.navTabs}>
                <a className={styles.navTabsItem2}>Frequent Questions</a>
                <a className={styles.navTabsItem2}>Who we are?</a>
                <a className={styles.navTabsItem2}>Partner Program</a>
                <a className={styles.navTabsItem2}>Help & Support</a>
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.faq}>
              <ul>
                <li>How does Order.UK work?</li>
                <li>What payment methods are accepted?</li>
                <li>Can I track my order in real-time?</li>
                <li>
                  Are there any special discounts or promotions available?
                </li>
                <li>Is Order.UK available in my area?</li>
              </ul>
            </div>
            <div className={styles.stepsContainer}>
              <div className={styles.steps}>
                <div className={styles.step}>
                  <h4>Place an Order!</h4>
                  <img src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732691510/order-food_1_un32ng.png" />
                  <p>Place your order through our website or Mobile app</p>
                </div>
                <div className={styles.step}>
                  <h4>Track Progress</h4>
                  <img src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732691510/food_1_btiu2s.png" />
                  <p>You can track your order status with delivery time</p>
                </div>
                <div className={styles.step}>
                  <h4>Get your Order!</h4>
                  <img src="https://res.cloudinary.com/dfrujgo0i/image/upload/v1732691510/order_1_dck7b2.png" />
                  <p>Receive your order at a lightning fast speed!</p>
                </div>
              </div>
              <p className={styles.description}>
                Order.UK simplifies the food ordering process. Browse through
                our diverse menu, select your favorite dishes, and proceed to
                checkout. Your delicious meal will be on its way to your
                doorstep in no time!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.milesStone}>
          <div>
            <p>546+</p>
            <p>Registered Riders</p>
          </div>
          <div>
            <p>789,900+</p>
            <p>Orders Delivered</p>
          </div>
          <div>
            <p>690+</p>
            <p>Restaurants Partnered</p>
          </div>
          <div>
            <p>17,457+</p>
            <p>Food Items</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
