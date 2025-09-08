import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`rounded-xl px-4 py-2 text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 ${className}`}
    >
      {children}
    </span>
  );
}
