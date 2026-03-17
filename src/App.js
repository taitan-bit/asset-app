import React, { useState } from "react";

function App() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      type: "crypto",
      name: "USDT",
      quantity: 15800,
      avgPrice: 27000,
      currentPrice: 27400,
    },
    {
      id: 2,
      type: "gold",
      name: "DOJI",
      quantity: 3.1,
      avgPrice: 175000000,
      currentPrice: 180000000,
    },
  ]);

  const total = assets.reduce(
    (sum, a) => sum + a.quantity * a.currentPrice,
    0
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Asset Manager</h1>

      <h2>Total: {total.toLocaleString()} VND</h2>

      {assets.map((a) => {
        const value = a.quantity * a.currentPrice;
        const pnl = (a.currentPrice - a.avgPrice) * a.quantity;

        return (
          <div key={a.id} style={{ marginTop: 10 }}>
            <h3>{a.name}</h3>
            <div>Type: {a.type}</div>
            <div>Value: {value.toLocaleString()}</div>
            <div>
              PnL:{" "}
              <span style={{ color: pnl >= 0 ? "green" : "red" }}>
                {pnl.toLocaleString()}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;