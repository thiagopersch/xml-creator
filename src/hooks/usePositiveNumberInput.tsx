import { useState } from "react";

export function usePositiveNumberInput(initialValue = 0) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: HTMLInputElement | HTMLTextAreaElement) => {
    const newValue =
      event instanceof HTMLInputElement
        ? event.value
        : (event as any).target.value;
    if (newValue < 0) {
      setValue(0);
    } else {
      setValue(newValue);
    }
  };

  return { value, handleChange };
}
