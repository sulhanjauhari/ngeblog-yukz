export const getTheme = (variableName: string): string =>
  window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(variableName);
