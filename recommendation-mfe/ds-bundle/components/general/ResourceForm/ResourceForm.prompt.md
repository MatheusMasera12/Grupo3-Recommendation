ResourceForm from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.ResourceForm` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ResourceFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (dto: CreateResourceDto) => Promise<void>;
  resource?: any;
}
```
