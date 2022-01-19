const base_url = `https://www.alphavantage.co/`;
const search = `query?function=SYMBOL_SEARCH&keywords=?&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`;

export const searchURL = (security) => `${base_url}${search}`;
