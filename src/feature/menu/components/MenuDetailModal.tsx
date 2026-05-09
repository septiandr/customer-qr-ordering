import { useEffect, useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

import { useTranslation } from "react-i18next";
import { SelectedOption } from "../../cart/types/cart.type";
import { MenuItem } from "../types/menu.type";

type Props = {
  item: MenuItem | null;
  visible: boolean;
  onClose: () => void;
  onClickAdd: (item: MenuItem, selectedOptions: SelectedOption[]) => void;
};

export function MenuDetailModal({ item, visible, onClose, onClickAdd }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (!visible) setSelectedOptions([]);
  }, [visible]);

  if (!item) return null;

  function selectOption(group: any, option: any) {
    setSelectedOptions((prev) => {
      const filtered = prev.filter((x) => x.group_id !== group.id);

      return [
        ...filtered,
        {
          group_id: group.id,
          group_name: group.name,

          option_id: option.id,
          option_name: option.name,

          price_modifier: option.price_modifier,
        },
      ];
    });
  }

  function isSelected(optionId: number) {
    return selectedOptions.some((x) => x.option_id === optionId);
  }
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      {/* BACKDROP */}
      <Pressable
        onPress={onClose}
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)",
          justifyContent: "flex-end",
        }}
      >
        {/* SHEET */}
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: "#1A1A1A",
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
            padding: 20,
            maxHeight: "90%",
          }}
        >
          <ScrollView>
            {/* TITLE */}
            <Text
              style={{
                color: "#fff",
                fontSize: 24,
                fontWeight: "800",
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                color: "#999",
                marginTop: 6,
              }}
            >
              {item.description}
            </Text>

            {/* VARIANTS */}
            {item.customization_groups.map((group) => (
              <View
                key={group.id}
                style={{
                  marginTop: 24,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 18,
                    fontWeight: "700",
                  }}
                >
                  {group.name}
                </Text>

                {group.required && (
                  <Text
                    style={{
                      color: "#FF8C32",
                      marginTop: 4,
                    }}
                  >
                    {t("common.required")}
                  </Text>
                )}

                {/* OPTIONS */}
                {group.options.map((option) => {
                  const active = isSelected(option.id);

                  return (
                    <TouchableOpacity
                      key={option.id}
                      onPress={() => selectOption(group, option)}
                      accessibilityLabel={`${option.name}, extra price $${option.price_modifier.toFixed(2)}`}
                      accessibilityRole="radio"
                      accessibilityState={{ selected: active }}
                      accessibilityHint={t("menu.customization_hint")}
                      style={{
                        backgroundColor: active ? "#FF8C32" : "#222",
                        borderRadius: 16,
                        padding: 16,
                        marginTop: 12,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                          }}
                        >
                          {option.name}
                        </Text>

                        <Text
                          style={{
                            color: active ? "#111" : "#FF8C32",
                          }}
                        >
                          +$
                          {option.price_modifier.toFixed(2)}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ))}

            {/* ADD TO CART */}
            <TouchableOpacity
              style={{
                marginTop: 32,
                minHeight: 58,
                paddingVertical: 12,
                backgroundColor:
                  selectedOptions.length > 0 ? "#FF8C32" : "#222",
                borderRadius: 18,
                justifyContent: "center",
                alignItems: "center",
              }}
              disabled={selectedOptions.length === 0}
              onPress={() => onClickAdd(item, selectedOptions)}
              accessibilityLabel={t("menu.add_to_cart_a11y", {
                name: item.name,
              })}
              accessibilityRole="button"
              accessibilityState={{ disabled: selectedOptions.length === 0 }}
              accessibilityHint={t("menu.add_hint")}
            >
              <Text
                style={{
                  color: "#111",
                  fontWeight: "800",
                  fontSize: 16,
                }}
              >
                {t("common.add_to_cart")}
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </Pressable>
      </Pressable>
    </Modal>
  );
}
