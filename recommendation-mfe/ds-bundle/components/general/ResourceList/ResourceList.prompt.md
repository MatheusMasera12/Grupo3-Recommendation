ResourceList from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.ResourceList` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface ResourceListProps {
  resources: Resource[];
  loading: boolean;
  error: string;
  onAdd: () => void;
  onEdit: (resource: Resource) => void;
  onDelete: (id: string) => Promise<void>;
  onRetry?: () => void;
}
```
