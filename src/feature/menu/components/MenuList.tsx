import { FlashList } from "@shopify/flash-list";

import { RefreshControl, View } from "react-native";

import { Empty as MenuEmpty } from "@/src/components/Empty";
import { MenuCard } from "../components/MenuCard";

import { MenuItem } from "../types/menu.type";

type Props = {
  data: MenuItem[];

  refreshing: boolean;

  onRefresh: () => void;

  onPressItem: (item: MenuItem) => void;
};

export function MenuList({ data, refreshing, onRefresh, onPressItem }: Props) {
  return (
    <FlashList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#FF8C32"
          colors={["#FF8C32"]}
        />
      }
      contentContainerStyle={{
        backgroundColor: "#111",
        paddingHorizontal: 20,
        paddingBottom: 140,
      }}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 18,
          }}
        />
      )}
      ListEmptyComponent={<MenuEmpty />}
      renderItem={({ item }) => (
        <MenuCard
          item={item}
          onPress={() => onPressItem(item)}
          onClickIncreaseQty={() => onPressItem(item)}
        />
      )}
    />
  );
}
