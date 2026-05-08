import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChange: (text: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <View style={s.container}>
      <Ionicons name="search" size={18} color="#999" />

      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder="Search menu..."
        placeholderTextColor="#777"
        style={s.input}
      />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: "#1E1E1E",
    borderRadius: 16,
    height: 54,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    flex: 1,
    color: "#fff",
    marginLeft: 10,
  },
});
