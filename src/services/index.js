// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const BACKEND_URL = "https://food-backend-eb7q.onrender.com";

export const register = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred");
    }

    return response.json();
  } catch (error) {
    console.error("Register API error:", error.message);
    throw error;
  }
};

export const login = async (data) => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/user/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "An error occurred during login");
    }

    return response.json();
  } catch (error) {
    console.error("Login API error:", error.message);
    throw error;
  }
};

export const fetchRestaurants = async () => {
  try {
    const response = await fetch(`${BACKEND_URL}/api/restaurant/restaurants`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error fetching restaurants");
    }

    return response.json();
  } catch (error) {
    console.error("Fetch Restaurants API error:", error.message);
    throw error;
  }
};

export const fetchRestaurantDetails = async (id) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/restaurant/restaurant/${id}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error fetching restaurant details");
    }

    return response.json();
  } catch (error) {
    console.error("Fetch Restaurant Details API error:", error.message);
    throw error;
  }
};

export const searchFoodItems = async (query) => {
  try {
    const response = await fetch(
      `${BACKEND_URL}/api/restaurant/restaurants/search?query=${encodeURIComponent(
        query
      )}`
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error searching for food items");
    }

    return response.json();
  } catch (error) {
    console.error("Search Food Items API error:", error.message);
    throw error;
  }
};
