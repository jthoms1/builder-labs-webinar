import { figmaMapping } from "@builder.io/dev-tools/figma";

figmaMapping({
  designTokenMapper(token) {
    const knownTokens = {
      colorChartsPink500: "var(--color-charts-pink-500-tccj7z, #c33d69)",
      colorChartsBlue2300: "var(--color-charts-blue-2-300-sh1kxw, #688ae8)",
    };
    if (token.startsWith("Data-viz-palette")) {
      let newToken = token
        .replace(/\//g, " ")
        .replace("Data-viz-palette", "color")
        .replace(/-([a-z])/g, (match) => match[1].toUpperCase())
        .replace(/-/g, "");

      if (newToken in knownTokens) {
        return knownTokens[newToken as keyof typeof knownTokens];
      }
    }
  },
});
