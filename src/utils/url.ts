export const trimPath = (path: string): string => {
  return path.replace(/^\//, "").replace(/\/$/, "");
};
