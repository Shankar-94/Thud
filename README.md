# neo-ui

An accessible, themeable **neobrutalist** React component library, written in TypeScript.

> Thick borders. Hard shadows. Buttons that press down like real keys.

## Status
Building in public. Components so far: **Button**, **Input**.

## Design decisions
| Decision | Choice | Why |
|---|---|---|
| Styling | CSS Modules + CSS variable tokens | Zero runtime cost, themeable without JS |
| Theming | `data-theme="dark"` on any ancestor | Swap tokens, not components |
| Accessibility | Tested with jest-axe + Storybook a11y | Accessibility is part of "done" |
| Colour rule | Meaning never relies on colour alone | e.g. errors always include text |

## Usage
```tsx
import { Button, Input } from 'neo-ui';
import 'neo-ui/styles.css';

<Input label="Email" error="Enter a valid email address." />
<Button variant="primary">Save changes</Button>
```

## Develop
```bash
npm install
npm run storybook   # component workshop at :6006
npm test            # unit + a11y tests
npm run build       # library bundle in dist/
```

## Roadmap
- [ ] Modal/Dialog (focus trap, Esc to close, return focus)
- [ ] Tabs, Select, Toast, Checkbox/Radio/Switch
- [ ] Data Table, Date Picker
- [ ] Publish to npm with Changesets
