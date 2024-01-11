export const addDecimals = num => {
	return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
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

            return state;
}