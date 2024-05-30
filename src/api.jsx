// src/api.js
const BASE_URL = "http://20.244.56.144/test";

export const fetchProducts = async (company, category, top, minPrice, maxPrice) => {
  try {
    const url = `${BASE_URL}/companies/${company}/categories/${category}/products/top-${top}?minPrice=${minPrice}&maxPrice=${maxPrice}`;
    const response = await fetch(url);

    const text = await response.text(); // Get response text

    if (!response.ok) {
      console.log("API response error data:", text);
      throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
    }

    const data = JSON.parse(text); // Parse JSON if valid
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};
