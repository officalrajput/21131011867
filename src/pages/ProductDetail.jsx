// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import ProductCard from '../components/ProductCard';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Typography>Product not found</Typography>;
  }

  return (
    <Container>
      <ProductCard product={product} />
    </Container>
  );
};

export default ProductDetail;
