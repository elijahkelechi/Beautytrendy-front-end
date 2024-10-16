import {
  Form,
  useLoaderData,
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import FormSelectInput from "./FormSelectInput";
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";
import { useState, useEffect } from "react";

const FiltersForm = () => {
  const { products } = useLoaderData();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Local state for the form
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectFreeDelivery, setSelectFreeDelivery] = useState(false);

  const uniqueBrands = [
    "all",
    ...new Set(products.map((product) => product.brand)),
  ];

  const uniqueCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Update local state based on searchParams
  useEffect(() => {
    setSelectedBrand(searchParams.get("brand") || "all");
    setSelectedCategory(searchParams.get("category") || "all");
    setSelectedPrice(Number(searchParams.get("price")) || 0);
    setSelectFreeDelivery(searchParams.has("freeShipping"));
  }, [searchParams]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete("page");
    newSearchParams.delete("limit");

    // Add selected values to search params
    if (selectedBrand !== "all") newSearchParams.set("brand", selectedBrand);
    if (selectedCategory !== "all")
      newSearchParams.set("category", selectedCategory);
    if (selectedPrice) newSearchParams.set("price", selectedPrice);
    if (selectFreeDelivery) newSearchParams.set("freeShipping", "true");

    navigate(`?${newSearchParams.toString()}`);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="grid rounded-md py-2 md:py-4 gap-x-2 gap-y-2 md:gap-x-3 items-center border-base-200"
    >
      <FormSelectInput
        name="brand"
        label="Select Brand"
        list={uniqueBrands}
        size="select-sm"
        value={selectedBrand} // Controlled component
        onChange={(e) => setSelectedBrand(e.target.value)} // Handle change
      />
      <FormSelectInput
        name="category"
        label="Select Category"
        list={uniqueCategories}
        size="select-sm"
        value={selectedCategory} // Controlled component
        onChange={(e) => setSelectedCategory(e.target.value)} // Handle change
      />
      <FormRange
        name="price"
        label="Select Price Range: "
        size="range-sm"
        value={selectedPrice} // Controlled component
        onChange={(e) => setSelectedPrice(Number(e.target.value))} // Handle change
      />
      <FormCheckBox
        name="freeShipping"
        label="Free Delivery"
        size="checkbox-sm"
        checked={selectFreeDelivery} // Controlled component
        onChange={() => setSelectFreeDelivery(!selectFreeDelivery)} // Toggle state
      />
      <button type="submit" className="btn btn-sm">
        Search
      </button>
      <Link className="btn btn-sm" to="/products">
        Reset
      </Link>
    </Form>
  );
};

export default FiltersForm;
