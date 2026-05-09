import { FlashList } from "@shopify/flash-list";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Category = {
  id: number;
  name: string;
};

type Props = {
  categories: Category[];
  selected: number;
  onSelect: (id: number) => void;
};

export function CategoryTabs({ categories, selected, onSelect }: Props) {
  return (
    <FlashList
      horizontal
      data={categories}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={s.container}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <Text style={{ width: 12 }} />}
      renderItem={({ item }) => {
        const active = selected === item.id;

        return (
          <TouchableOpacity
            style={[s.button, active && s.activeButton]}
            onPress={() => onSelect(item.id)}
            activeOpacity={0.8}
            accessibilityLabel={`Filter by category: ${item.name}`}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
          >
            <Text style={[s.text, active && s.activeText]}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },

  button: {
    backgroundColor: "#1E1E1E",
    borderRadius: 14,
    height: 44,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  activeButton: {
    backgroundColor: "#FF8C32",
  },

  text: {
    color: "#999",
  },

  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
});
