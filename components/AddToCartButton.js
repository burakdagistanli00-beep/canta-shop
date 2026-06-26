"use client";
import { useState } from "react";
import { useCart } from "../lib/cart-context";

export default function AddToCartButton({ product }) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center border border-ink/20">
        <button
          className="px-3 py-2"
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          aria-label="Azalt"
        >
          −
        </button>
        <span className="px-3">{qty}</span>
        <button
          className="px-3 py-2"
          onClick={() => setQty((q) => q + 1)}
          aria-label="Artır"
        >
          +
        </button>
      </div>
      <button onClick={handleAdd} className="btn-primary flex-1">
        {added ? "Sepete eklendi ✓" : "Sepete Ekle"}
      </button>
    </div>
  );
}
