import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    "Avtomobil məhsulları",
    "Uşaq məhsulları",
    "Kosmetika",
    "Musiqi aksesuarları ",
    "Multibrend mağazalar",
    "Geyim, ayaqqabı, aksesuarlar",
    "İdman məhsulları",
    "Məişət texnikası və elektronika",
    "Ev və təmir üçün məhsullar",
    "Maraq və hobbi",
    "Kitab",
    "Ev əşyaları",
  ],

  stores: [
    {
      id: 1,
      name: "aloparca",
      category: "Avtomobil məhsulları",
      logo: "https://kango.az/storage/shops/59.png",
      url: "https://www.aloparca.com/",
    },
    {
      id: 2,
      name: "panco",
      category: "Uşaq məhsulları",
      logo: "https://kango.az/storage/shops/83.png",
      url: "https://www.panco.com.tr/",
    },
    
  ],
};

const storesSlice = createSlice({
  name: "stores",
  initialState,
  reducers: {
    selectStores: (state, action) => {
      state.selectedStores = action.payload;
    },
  },
});

export const { selectSlice } = storesSlice.actions;
export default storesSlice.reducer;
