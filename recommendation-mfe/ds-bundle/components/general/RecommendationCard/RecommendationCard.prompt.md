RecommendationCard from @grupo3/recommendation-mfe. Use via `window.RecommendationMfe.RecommendationCard` (bundle loaded from the root `_ds_bundle.js`). Wrap the tree in `<DesignSystemProvider>` (full provider chain in README.md — components read theme/i18n from that context).

## Props

```ts
interface RecommendationCardProps {
  recommendation: Recommendation;
  onSelect?: (id: string) => void;
}
```
