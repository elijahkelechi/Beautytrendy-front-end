import React from "react";
import Hero from "../components/Hero";
import { customFetch } from "../utils/index";
import FeaturedProducts from "../components/FeaturedProducts";
import SectionTitle from "../components/SectionTitle";
import LandingProducts from "../components/LandingProducts";

const url = "/products";

const queryLandingProducts = {
  queryKey: ["landingProducts"],
  queryFn: () => customFetch(url),
};

export const loader = (queryClient) => async () => {
  try {
    const response = await queryClient.ensureQueryData(queryLandingProducts);
    // Check if response.data is structured as expected
    const products = response.data?.products || []; // Fallback to an empty array if products are missing
    const totalProducts = response.data?.totalProducts || 0; // Fallback to 0 if totalProducts is missing
    const totalPages = response.data?.totalPages;
    const currentPage = response.data?.currentPage;
    const hasMore = response.data?.hasMore;
    return { products, totalProducts, totalPages, currentPage, hasMore }; // Return an object with products and totalProducts
  } catch (error) {
    console.error("Error fetching products:", error);
    return { products: [], totalProducts: 0 }; // Return empty products and total 0 on error
  }
};

const Landing = () => {
  return (
    <div className="overflow-x-hidden">
      {" "}
      <div className="relative w-full">
        {" "}
        <section className="absolute inset-0 mt-28 md:mt-24">
          <Hero />
        </section>
        <section className="absolute inset-0 mt-[29.5rem] md:mt-[29.5rem] lg:mt-[34.5rem] p-2 pb-2">
          <SectionTitle text="Featured Products" />
        </section>
        <FeaturedProducts />
        <section className="relative mt-8">
          <LandingProducts />
        </section>
      </div>
    </div>
  );
};

export default Landing;
