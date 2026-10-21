"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { monthlyStats } from "@/data/marketReports";

export default function PriceTrendChart() {
  const data = monthlyStats.map((m) => ({ month: m.month, "Median price": m.medianPrice }));

  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-6">
      <p className="text-sm text-charcoal mb-4">Median price, trailing 12 months</p>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D7DBE2" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#8A95A6" }} axisLine={{ stroke: "#D7DBE2" }} tickLine={false} />
          <YAxis
            tick={{ fontSize: 11, fill: "#8A95A6" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}K`}
            width={50}
          />
          <Tooltip
            formatter={(value: number) => [`$${value.toLocaleString()}`, "Median price"]}
            contentStyle={{ borderRadius: 8, borderColor: "#D7DBE2", fontSize: 13 }}
          />
          <Line type="monotone" dataKey="Median price" stroke="#4870A0" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
