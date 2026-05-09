import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Text, View } from "react-native";

import { useCartStore } from "../../cart/store/cart.store";
import { SelectedOption } from "../../cart/types/cart.type";

import { CategoryTabs } from "../components/CategoryTabs";
import { FloatingCheckoutButton } from "../components/FloatingButton";
import { MenuDetailModal } from "../components/MenuDetailModal";

import { useCategories } from "../hooks/useCategories";
import { useMenu } from "../hooks/useMenu";
import { useMenuFilter } from "../hooks/useMenuFilter";

import { ErrorComponent as MenuError } from "@/src/components/Error";
import { Loading as MenuLoading } from "@/src/components/Loading";
import { MenuHeader } from "../components/MenuHeader";
import { MenuList } from "../components/MenuList";
import { MenuItem } from "../types/menu.type";

export function MenuScreen() {
  const { table } = useLocalSearchParams<{
    table: string;
  }>();
  const { t } = useTranslation();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);
  const totalItems = useCartStore((state) => state.totalItems);

  const {
    data: menu,
    isLoading,
    isFetching,
    isError,
    refetch,
  } = useMenu(table);

  const { data: categories } = useCategories();

  const filteredMenu = useMenuFilter({
    menu: (menu as MenuItem[]) ?? [],
    search,
    selectedCategory,
  });

  function openMenuDetail(item: MenuItem) {
    setSelectedItem(item);

    setOpen(true);
  }

  function closeModal() {
    setOpen(false);

    setTimeout(() => {
      setSelectedItem(null);
    }, 200);
  }

  function handleAddToCart(item: MenuItem, selectedOptions: SelectedOption[]) {
    addToCart(item, selectedOptions);

    closeModal();
  }

  if (isLoading) {
    return <MenuLoading />;
  }

  if (isError) {
    return <MenuError onRetry={refetch} />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <MenuHeader
        search={search}
        onSearch={setSearch}
        totalItems={totalItems}
        onPressCart={() => router.push("/cart")}
      />

      <CategoryTabs
        categories={Array.isArray(categories) ? categories : []}
        selected={selectedCategory}
        onSelect={(id) => setSelectedCategory((prev) => (prev === id ? 0 : id))}
      />

      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 18,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          }}
        >
          {t("menu.title")}
        </Text>

        <Text
          style={{
            color: "#999",
            marginTop: 4,
          }}
        >
          {t("menu.subtitle")}
        </Text>
      </View>

      <MenuList
        data={filteredMenu}
        refreshing={isFetching}
        onRefresh={refetch}
        onPressItem={openMenuDetail}
      />

      <FloatingCheckoutButton />

      <MenuDetailModal
        visible={open}
        item={selectedItem}
        onClose={closeModal}
        onClickAdd={handleAddToCart}
      />
    </View>
  );
}
