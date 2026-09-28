import type { Preview } from "@storybook/react";
import "../src/style/global.css"
import "../src/style/custom.css"
import "../src/style/storybook.css"
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
