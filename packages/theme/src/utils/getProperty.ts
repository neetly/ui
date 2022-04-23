import { getPropertyName } from "./getPropertyName";

const getProperty = (name: string) => {
  return `var(${getPropertyName(name)})`;
};

export { getProperty };
