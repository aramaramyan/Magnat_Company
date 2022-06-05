import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isBurgerOpen: false,
  isProfileModalOpen: false,
  isCardModalOpen: false,
  descriptionsArray: [
    "The base is made of aviation aluminum, which is lightweight and particularly durable.Soft-touch coated houses are of good quality, they do not bend and are very pleasant to the touch.",
    "A distinctive feature of MAGNAT hookahs is the ability of the base to rotate smoothly 360°, while the shaft and saucer remain stationary. This solution avoids shaking the hookah when transferring the hose.",
    "The ports for the connector and the blow valve are equipped with a magnetic lock. They can be replaced with special connectors for simultaneous use of two hoses.",
    "It is possible to apply the logo individually by milling",
    "A stainless tube passes through the shaft made of radiator design."
  ]
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    handleBurger(state) {
      state.isBurgerOpen = !state.isBurgerOpen;
    },

    handleProfileModal(state) {
      state.isProfileModalOpen = !state.isProfileModalOpen;
    },

    closeModal(state) {
      state.isProfileModalOpen = false;
    },

    handleAddCardModal(state) {
      state.isCardModalOpen = !state.isCardModalOpen;
    },

    closeCardModal(state) {
      state.isCardModalOpen = false;
    },
  }
});

export const {
  closeModal,
  handleBurger,
  closeCardModal,
  handleAddCardModal,
  handleProfileModal
} = appSlice.actions;
export default appSlice.reducer;