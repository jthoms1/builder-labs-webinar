import { figmaMapping } from "@builder.io/dev-tools/figma";

figmaMapping({
  designTokenMapper(token) {
    if (token.startsWith("color-")) {
      return `var(--${token})`;
    }
    if (token.startsWith("grey-")) {
      return `var(--${token})`;
    }
  },
});
