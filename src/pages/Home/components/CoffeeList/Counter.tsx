import { CounterContainer, CounterButton, CounterValue } from "./styles";
import { useState } from "react";

interface CounterProps {
    onChange?: (value: number) => void;
    className?: string;
    startingValue: number | 1;
  }
  
  export function Counter({ onChange, startingValue }: CounterProps) {
    const [count, setCount] = useState(startingValue);
  
    const handleIncrement = () => {
      const newValue = count + 1;
      setCount(newValue);
      onChange?.(newValue);
    };
  
    const handleDecrement = () => {
      if (count > 1) {
        const newValue = count - 1;
        setCount(newValue);
        onChange?.(newValue);
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
  