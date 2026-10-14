import type { Preview } from '@storybook/react';
import '../src/styles/tokens.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Theme',
      toolbar: { title: 'Theme', items: ['light', 'dark'], dynamicTitle: true },
    },
  },
  initialGlobals: { theme: 'light' },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme ?? 'light';
      document.documentElement.setAttribute('data-theme', theme);
      return (
        <div style={{ background: 'var(--neo-paper)', padding: 32, minHeight: '100vh', fontFamily: 'var(--neo-font)' }}>
          <Story />
        </div>
      );
    },
  ],
  parameters: { layout: 'fullscreen' },
};
export default preview;
