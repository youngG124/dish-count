import { useState, useEffect } from "react";

export default function MultiplyCalculator({ dishCount }) {
  const [perDish, setPerDish] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const perDishNum = Number(perDish);
    if (!isNaN(perDishNum) && dishCount != null) {
      setResult(perDishNum * dishCount);
    } else {
      setResult(null);
    }
  }, [perDish, dishCount]);

  return (
    <div>
      <input
        type="number"
        value={perDish}
        onChange={(e) => setPerDish(e.target.value)}
        placeholder="$ per dish"
      />
      <div>
        총 금액: {result !== null ? `${result} won` : "계산할 수 없음"}
      </div>
    </div>
  );
}