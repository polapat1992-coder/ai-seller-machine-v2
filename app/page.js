"use client";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState(null);

  const generate = async () => {
    setResult({
      hook: "🔥 สินค้าตัวนี้ขายดีมาก!",
      caption: `${product} ราคา ${price} คุ้มมาก รีบซื้อ`,
      hashtags: "#ขายดี #tiktok #shopee"
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>AI Seller Machine V2</h1>

      <input
        placeholder="ชื่อสินค้า"
        value={product}
        onChange={(e) => setProduct(e.target.value)}
        style={{ display: "block", margin: 10 }}
      />

      <input
        placeholder="ราคา"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        style={{ display: "block", margin: 10 }}
      />

      <button onClick={generate}>
        สร้าง AI
      </button>

      {result && (
        <div>
          <h3>Hook</h3>
          <p>{result.hook}</p>

          <h3>Caption</h3>
          <p>{result.caption}</p>

          <h3>Hashtag</h3>
          <p>{result.hashtags}</p>
        </div>
      )}
    </div>
  );
        }
