Sidebar from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.Sidebar` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface SidebarProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  items?: SidebarItem[];
  activeItemId?: string;
  footer?: React.ReactNode;
  width?: number;
}
```
