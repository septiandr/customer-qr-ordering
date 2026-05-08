import categories from "@/src/feature/menu/samples/categories.json";
import menu from "@/src/feature/menu/samples/foods.json";
import { FlashList } from "@shopify/flash-list";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { CategoryTabs } from "../components/CategoryTabs";
import { MenuCard } from "../components/MenuCard";
import { SearchBar } from "../components/SearchBar";

export function MenuScreen() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(0);

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

  return (
    <View style={{ flex: 1, backgroundColor: "#111" }}>
      {/* SEARCH */}
      <SearchBar value={search} onChange={setSearch} />

      {/* CATEGORY */}
      <CategoryTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={(id) => {
          setSelectedCategory((prev) => (prev === id ? 0 : id));
        }}
      />

      {/* MENU LIST */}
      <View style={{ paddingHorizontal: 20, paddingVertical: 18 }}>
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Menu
        </Text>
      </View>
      <FlashList
        data={filteredMenu}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          backgroundColor: "#111",
          paddingHorizontal: 20,
          paddingBottom: 120,
        }}
        ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
        renderItem={({ item }) => (
          <MenuCard
            item={item}
            onPress={() => {
              console.log("open detail", item);
            }}
          />
        )}
      />
    </View>
  );
}
