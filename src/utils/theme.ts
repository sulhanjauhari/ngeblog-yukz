export const getTheme = (variableName: string, el?: string): string =>
  window
    .getComputedStyle(el === "root" ? document.documentElement : document.body)
    .getPropertyValue(variableName);
