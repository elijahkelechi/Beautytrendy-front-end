import { customFetch } from "../utils";
import Filters from "../components/Filters";
import ProductsContainer from "../components/ProductsContainer";
import { useLoaderData } from "react-router-dom";
import PaginationContainer from "../components/PaginationContainer";

const url = "/products";

const allProductsQuery = (queryParams) => {
  const { search, brand, category, freeShipping, price, page } = queryParams;
  return {
    queryKey: [
      "products",
      search ?? "",
      brand ?? "all",
      category ?? "all",
      freeShipping ?? false,
      price ?? 10000000,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    try {
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      const response = await queryClient.ensureQueryData(
        allProductsQuery(params)
      );

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

const Products = () => {
  return (
    <div className="pt-[7.5rem] md:pt-28 md:relative">
      <div className="fixed md:hidden">
        <Filters />
      </div>
      <ProductsContainer />
      <div className="z-50 ">
        <PaginationContainer />
      </div>
    </div>
  );
};

export default Products;
