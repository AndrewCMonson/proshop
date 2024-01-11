import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: localStorage.getItem('cartItems')
		? JSON.parse(localStorage.getItem('cartItems'))
		: { cartItems: [] },
};

const addDecimals = num => {
	return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload;

			const existingItem = state.cartItems.find(x => x._id === item._id);

			if (existingItem) {
				state.cartItems = state.cartItems.map(x =>
					x._id === existingItem._id ? item : x
				);
			} else {
				state.cartItems = [...state.cartItems, item];
			}

			// Calculate items price
			state.itemsPrice = addDecimals(
				state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
			);
			// Calulate the shipping price (if order is over $100, shipping is free, else $15 shipping)
			state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 15);
			// Calculate the tax price
			state.taxPrice = addDecimals(
				Number((0.08 * state.itemsPrice).toFixed(2))
			);
			// Calculate the total price
			state.totalPrice = (
				Number(state.itemsPrice) +
				Number(state.shippingPrice) +
				Number(state.taxPrice)
			).toFixed(2);

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
		},
	},
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;