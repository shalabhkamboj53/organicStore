import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import { describe, it, vi, expect } from "vitest";
import "@testing-library/jest-dom";
import ProductGrid from "../components/ProductGrid";

vi.mock("../components/ProductComp", () => ({
  default: ({ el }: any) => <p>{el.productName}</p>,
}));

vi.mock("../components/Loading", () => ({
  default: () => <div>Loading...</div>,
}));

vi.mock("../components/Error", () => ({
  default: ({ error }: { error: string }) => <div>Error: {error}</div>,
}));

vi.mock("react-redux", () => ({
  useSelector: vi.fn(), // Ensure it's a function
}));

describe("ProductGrid Component", () => {
  it("should render a product with the name 'Assorted Coffee'", () => {
    //@ts-ignore
    (useSelector as vi.Mock)
      .mockReturnValueOnce([
        {
          id: '1',
          img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
          productName: "Assorted Coffee",
          category: "Groceries",
          rate: 35,
          onSale: false,
          saleRate: 32,
        },
      ]);

    render(
      <ProductGrid
        details={{
          title: "Best Selling Products",
          products: [
            {
              id: '1',
              img: "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2018/06/coffee-asorted.jpg",
              productName: "Assorted Coffee",
              category: "Groceries",
              rate: 35,
              onSale: false,
              saleRate: 32,
            },
          ],
        }}
      />
    );

    expect(screen.getByText("Assorted Coffee")).toBeInTheDocument();
  });
});
