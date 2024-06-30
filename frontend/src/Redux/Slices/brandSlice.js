import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brands: [
    { name: 'Marka 1', url: "https://kango.az/storage/shops/97.png" },
    { name: 'Marka 2', url: 'https://kango.az/storage/shops/98.png' },
    { name: 'Marka 3', url: 'https://kango.az/storage/shops/99.png' },
    { name: 'Marka 4', url: 'https://kango.az/storage/shops/100.png' },
    { name: 'Marka 5', url: 'https://kango.az/storage/shops/101.png' },
    { name: 'Marka 6', url: 'https://kango.az/storage/shops/102.png' },
    { name: 'Marka 7', url: 'https://kango.az/storage/shops/103.png' },
    { name: 'Marka 8', url: 'https://kango.az/storage/shops/104.png' },
    { name: 'Marka 9', url: 'https://kango.az/storage/shops/105.png' },
    { name: 'Marka 10', url: 'https://kango.az/storage/shops/106.png' }
  ],
};



const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {}
});

export const selectBrands = (state) => state.brands.brands;
export default brandsSlice.reducer;