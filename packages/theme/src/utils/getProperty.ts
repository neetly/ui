import { getPropertyName } from "./getPropertyName";

const getProperty = (name: string, value: string | null = null) => {
  if (value !== null) {
    return `var(${getPropertyName(name)}, ${value})`;
  } else {
    return `var(${getPropertyName(name)})`;
  }
};

export { getProperty };
