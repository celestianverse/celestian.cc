export type Types =
  | "boolean"
  | "number"
  | "string"
  | "array"
  | "object"
  | "function"
  | "null"
  | "undefined";

export const getType = (value: unknown): Types => {
  if (value === null) return "null";

  if (Array.isArray(value)) return "array";

  const result = typeof value;

  switch (result) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
    case "function":
      return result;
    default:
      return "object";
  }
};
