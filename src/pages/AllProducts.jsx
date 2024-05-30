// src/pages/AllProducts.jsx
import React, { useState, useEffect } from 'react';
import { Grid, Container, CircularProgress, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Filter from '../components/Filter';
import { fetchProducts } from '../api';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    company: 'AMZ',
    category: 'Laptop',
    minPrice: 1,
    maxPrice: 10000,
    top: 10,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching products with filters:", filters);
      const data = await fetchProducts(filters.company, filters.category, filters.top, filters.minPrice, filters.maxPrice);
      console.log("Fetched products data:", data); // Log the fetched data
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [filters]);

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} fetchProducts={getProducts} />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">Error: {error}</Typography>
      ) : products.length > 0 ? (
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>No products found</Typography>
      )}
    </Container>
  );
};

export default AllProducts;
