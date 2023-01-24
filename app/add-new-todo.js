"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });
  refresh();
}

export default function AddTodo() {
  const router = useRouter();
  const [value, setValue] = useState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
      />
      <button
        onClick={async () => {
          await addTodo(value, router.refresh);
          setValue("");
        }}
      >
        Add
      </button>
    </div>
  );
}
