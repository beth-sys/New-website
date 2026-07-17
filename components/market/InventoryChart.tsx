"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { monthlyStats } from "@/data/marketReports";

export default function InventoryChart() {
  const data = monthlyStats.map((m) => ({ month: m.month, "Active listings": m.inventory }));

  return (
    <div className="rounded-2xl border border-stone-light bg-white/60 p-6">
      <p className="text-sm text-charcoal mb-4">Active inventory, trailing 12 months</p>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D8D2C6" />
          <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#948B7E" }} axisLine={{ stroke: "#D8D2C6" }} tickLine={false} />
          <YAxis tick={{ fontSize: 11, fill: "#948B7E" }} axisLine={false} tickLine={false} width={45} />
          <Tooltip
            formatter={(value: number) => [value.toLocaleString(), "Active listings"]}
            contentStyle={{ borderRadius: 8, borderColor: "#D8D2C6", fontSize: 13 }}
          />
          <Bar dataKey="Active listings" fill="#D4B483" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
