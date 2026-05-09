import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";

import { ETABox } from "../components/ETABox";
import { OrderStatusCard } from "../components/OrderStatusCard";
import { OrderTimeline } from "../components/OrderTimeline";

import { OrderStatus } from "../constant/order-status";

import { useLocalSearchParams } from "expo-router";
import { useTableStore } from "../../home/store/table.store";
import { useOrder } from "../hooks/useOrder";

import s from "../styles/order.styles";

const statuses: OrderStatus[] = [
  "pending",
  "confirmed",
  "preparing",
  "ready",
  "served",
];

export default function OrderTrackingScreen() {
  const currentTable = useTableStore((state) => state.currentTable);
  const { t } = useTranslation();

  const { orderId } = useLocalSearchParams<{
    orderId: string;
  }>();

  const { data: order, isLoading } = useOrder(orderId);

  const initialStatus = useMemo<OrderStatus>(() => {
    return (order as any)?.data?.status || "pending";
  }, [order]);

  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("pending");

  const [eta, setEta] = useState(25);

  useEffect(() => {
    if (initialStatus) {
      setCurrentStatus(initialStatus);
    }
  }, [initialStatus]);

  useEffect(() => {
    let index = statuses.indexOf(currentStatus);

    const interval = setInterval(() => {
      index++;

      if (index >= statuses.length) {
        clearInterval(interval);
        return;
      }

      setCurrentStatus(statuses[index]);

      setEta((prev) => (prev > 5 ? prev - 5 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [currentStatus]);

  if (isLoading) {
    return (
      <View style={[s.container, s.centered]}>
        <ActivityIndicator size="large" />

        <Text style={s.loadingText}>{t("order.loading_order")}</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={s.container}
      contentContainerStyle={s.contentPadding}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.title}>{t("order.title")}</Text>

        <Text style={s.subtitle}>Table {currentTable}</Text>

        <Text style={s.subtitle}>
          Order ID: {(order as any)?.data?.order_id}
        </Text>
      </View>

      <OrderStatusCard status={currentStatus} />

      <ETABox eta={eta} />

      <OrderTimeline currentStatus={currentStatus} />

      {/* ITEMS */}
      <View style={s.section}>
        <Text style={s.sectionTitle}>{t("order.ordered_items")}</Text>

        {(order as any)?.data?.items?.map((item: any) => (
          <View key={`${item.menu_item_id}`} style={s.itemCard}>
            <Text style={s.itemName}>{item.menu_name}</Text>

            <Text style={s.itemText}>
              {t("common.qty")}: {item.quantity}
            </Text>

            <Text style={s.itemText}>${item.subtotal?.toFixed(2)}</Text>

            {item.customizations?.length > 0 && (
              <View style={s.customizationContainer}>
                {item.customizations.map((custom: any) => (
                  <Text key={custom.option_id} style={s.customizationText}>
                    • {custom.option_name}
                  </Text>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>

      {/* SUMMARY */}
      <View style={s.section}>
        <Text style={s.summaryText}>
          {t("common.total_items")}:{" "}
          {(order as any)?.data?.summary?.total_items}
        </Text>

        <Text style={s.summaryText}>
          {t("common.subtotal")}: $
          {(order as any)?.data?.summary?.subtotal?.toFixed(2)}
        </Text>

        <Text style={s.summaryText}>
          {t("order.tax")}: ${(order as any)?.data?.summary?.tax?.toFixed(2)}
        </Text>

        <Text style={s.grandTotal}>
          {t("order.grand_total")}: $
          {(order as any)?.data?.summary?.grand_total?.toFixed(2)}
        </Text>
      </View>

      {/* CUSTOMER NOTE */}
      {!!(order as any)?.data?.customer_note && (
        <View style={s.section}>
          <Text style={s.sectionTitle}>{t("order.customer_note")}</Text>

          <Text style={s.noteText}>{(order as any).data.customer_note}</Text>
        </View>
      )}
    </ScrollView>
  );
}
