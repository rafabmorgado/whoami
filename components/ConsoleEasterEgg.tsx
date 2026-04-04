"use client";

import { useEffect } from "react";

export default function ConsoleEasterEgg() {
  useEffect(() => {
    console.log("System message: Developer detected.");
  }, []);

  return null;
}
