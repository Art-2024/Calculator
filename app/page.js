"use client";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(expression).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setResult("");
      setExpression("");
    } else if (value === "sqrt") {
      try {
        const evalResult = Math.sqrt(parseFloat(expression)).toString();
        setResult(evalResult);
        setExpression(evalResult);
      } catch (error) {
        setResult("Error");
      }
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
    "C",
    "sqrt", // Add square root button
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Calculator</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-xs">
        <input
          type="text"
          className="w-full mb-2 text-2xl border-b-2 border-gray-400 focus:outline-none text-right"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-full text-3xl font-bold mb-4 focus:outline-none text-right"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className={`text-2xl p-4 rounded-lg ${
                btn === "=" || btn === "C"
                  ? "bg-orange-400 text-white"
                  : btn === "sqrt"
                  ? "bg-gray-500 text-white" // Style for square root button
                  : "bg-gray-200 text-black"
              } hover:bg-gray-300 active:bg-gray-400 focus:outline-none`}
            >
              {btn === "sqrt" ? "√" : btn}{" "}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
