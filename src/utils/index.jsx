import axios from "axios";
const productionUrl = "https://sonnatrendy.onrender.com/api/v1";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

const formatPrice = (price) => {
  const nairaAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  }).format(price / 100);
  return nairaAmount;
};

export const generateAmountOption = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={index} value={amount}>
        {amount}
      </option>
    );
  });
};

export default formatPrice;
