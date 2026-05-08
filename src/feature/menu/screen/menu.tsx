import categories from "@/src/feature/menu/samples/categories.json";
import menu from "@/src/feature/menu/samples/foods.json";

import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";

import { useMemo, useState } from "react";

import { Text, TouchableOpacity, View } from "react-native";

import { useCartStore } from "../../cart/store/cart.store";

import { CategoryTabs } from "../components/CategoryTabs";
import { FloatingCheckoutButton } from "../components/FloatingButton";
import { MenuCard } from "../components/MenuCard";
import { MenuDetailModal } from "../components/MenuDetailModal";
import { SearchBar } from "../components/SearchBar";

import s from "../styles/menu.style";

import { router } from "expo-router";
import { SelectedOption } from "../../cart/types/cart.type";
import { MenuItem } from "../types/menu.type";

export function MenuScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const addToCart = useCartStore((state) => state.addToCart);

  const totalItems = useCartStore((state) => state.totalItems);
  const cart = useCartStore((state) => state.cart);
  console.log(cart);
  const filteredMenu = useMemo(() => {
    return menu.filter((item) => {
      const matchCategory =
        selectedCategory === 0 || item.category_id === selectedCategory;

      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [search, selectedCategory]);

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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#111",
      }}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 18,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={s.searchWrapper}>
          <SearchBar value={search} onChange={setSearch} />
        </View>

        <TouchableOpacity
          style={s.cartButton}
          activeOpacity={0.8}
          onPress={() => router.push("/cart")}
        >
          <Ionicons name="bag-handle" size={22} color="#fff" />

          {totalItems > 0 && (
            <View style={s.badge}>
              <Text style={s.badgeText}>{totalItems}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
      <CategoryTabs
        categories={categories}
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
          Menu
        </Text>

        <Text
          style={{
            color: "#999",
            marginTop: 4,
          }}
        >
          Discover delicious food 🍣
        </Text>
      </View>
      <FlashList
        data={filteredMenu}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          backgroundColor: "#111",
          paddingHorizontal: 20,
          paddingBottom: 140,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        renderItem={({ item }) => (
          <MenuCard
            item={item}
            onPress={() => openMenuDetail(item)}
            onClickIncreaseQty={(item) => openMenuDetail(item)}
          />
        )}
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
