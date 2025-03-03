import { CounterContainer, CounterButton, CounterValue } from "./styles";
import { useState } from "react";

interface CounterProps {
  onChange?: (event: React.FormEvent, value: number) => void;
  className?: string;
  startingValue?: number;
}

export function Counter({ onChange, startingValue = 1 }: CounterProps) {
  const [count, setCount] = useState(startingValue);

  const handleIncrement = (event: React.FormEvent) => {
    const newValue = count + 1;
    setCount(newValue);
    onChange?.(event, newValue);
  };

  const handleDecrement = (event: React.FormEvent) => {
    if (count > 1) {
      const newValue = count - 1;
      setCount(newValue);
      onChange?.(event, newValue);
    }
  };

  return (
    <CounterContainer>
      <CounterButton onClick={handleDecrement}>−</CounterButton>
      <CounterValue>{count}</CounterValue>
      <CounterButton onClick={handleIncrement}>+</CounterButton>
    </CounterContainer>
  );
}
