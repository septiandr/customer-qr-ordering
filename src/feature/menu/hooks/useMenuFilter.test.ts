import { renderHook } from "@testing-library/react-native";
import { MenuItem } from "../types/menu.type";
import { useMenuFilter } from "./useMenuFilter";

describe("useMenuFilter Hook", () => {
  const mockMenu: MenuItem[] = [
    {
      id: 1,
      name: "Nasi Goreng",
      description: "Fried rice with egg",
      price: 25000,
      category_id: 1,
      image_url: "",
      customization_groups: [],
    },
    {
      id: 2,
      name: "Es Teh",
      description: "Iced tea",
      price: 5000,
      category_id: 2,
      image_url: "",
      customization_groups: [],
    },
  ];

  it("should return all items when search is empty and category is 0", () => {
    const { result } = renderHook(() =>
      useMenuFilter({ menu: mockMenu, search: "", selectedCategory: 0 }),
    );
    expect(result.current.length).toBe(2);
  });

  it("should filter by category", () => {
    const { result } = renderHook(() =>
      useMenuFilter({ menu: mockMenu, search: "", selectedCategory: 1 }),
    );
    expect(result.current.length).toBe(1);
    expect(result.current[0].name).toBe("Nasi Goreng");
  });

  it("should filter by search text", () => {
    const { result } = renderHook(() =>
      useMenuFilter({ menu: mockMenu, search: "teh", selectedCategory: 0 }),
    );
    expect(result.current.length).toBe(1);
    expect(result.current[0].name).toBe("Es Teh");
  });

  it("should be case-insensitive", () => {
    const { result } = renderHook(() =>
      useMenuFilter({ menu: mockMenu, search: "NASI", selectedCategory: 0 }),
    );
    expect(result.current.length).toBe(1);
    expect(result.current[0].name).toBe("Nasi Goreng");
  });

  it("should return empty array if no match", () => {
    const { result } = renderHook(() =>
      useMenuFilter({ menu: mockMenu, search: "pizza", selectedCategory: 0 }),
    );
    expect(result.current.length).toBe(0);
  });
});
