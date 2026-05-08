import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ETABox } from "../components/ETABox";
import { OrderStatusCard } from "../components/OrderStatusCard";
import { OrderTimeline } from "../components/OrderTimeline";

import { OrderStatus } from "../constant/order-status";

import s from "../styles/order.styles";

const statuses: OrderStatus[] = [
  "pending",
  "confirmed",
  "preparing",
  "ready",
  "served",
];

export default function OrderTrackingScreen() {
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("pending");

  const [eta, setEta] = useState(25);
  useEffect(() => {
    let index = 0;

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
  }, []);

  return (
    <View style={s.container}>
      {/* HEADER */}
      <View style={s.header}>
        <Text style={s.title}>Order Tracking</Text>

        <Text style={s.subtitle}>Table T001</Text>
      </View>

      {/* STATUS CARD */}
      <OrderStatusCard status={currentStatus} />

      {/* ETA */}
      <ETABox eta={eta} />

      {/* TIMELINE */}
      <OrderTimeline currentStatus={currentStatus} />
    </View>
  );
}
