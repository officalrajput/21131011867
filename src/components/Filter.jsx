// src/components/Filter.jsx
import React from 'react';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const Filter = ({ filters, setFilters, fetchProducts }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchProducts();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel>Company</InputLabel>
        <Select name="company" value={filters.company} onChange={handleChange}>
          <MenuItem value="AMZ">AMZ</MenuItem>
          <MenuItem value="FLP">FLP</MenuItem>
          <MenuItem value="SNP">SNP</MenuItem>
          <MenuItem value="MYN">MYN</MenuItem>
          <MenuItem value="AZO">AZO</MenuItem>
        </Select>
      </FormControl>
      <TextField name="category" label="Category" value={filters.category} onChange={handleChange} />
      <TextField name="minPrice" label="Min Price" type="number" value={filters.minPrice} onChange={handleChange} />
      <TextField name="maxPrice" label="Max Price" type="number" value={filters.maxPrice} onChange={handleChange} />
      <Button type="submit">Apply Filters</Button>
    </form>
  );
};

export default Filter;
