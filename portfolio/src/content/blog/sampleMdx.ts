export const sampleMdx = `
# Optimizing React Performance with Memoization

> Mid-senior frontend lens: balance readability, a11y, and perf.

## Quick wins I ship by default

- Use \`React.memo\` for stable presentational components that take primitive props.
- Guard heavy selectors with \`useMemo\` and keep dependencies tight.
- Prefer event handlers defined with \`useCallback\` when passed to deep children.
- Budget re-renders by lifting state *only* when necessary; avoid prop drilling with context slices.

## Pattern: memo + stable handlers

\`\`\`tsx
import React, { memo, useCallback } from "react";

type Props = { label: string; onSelect: (value: string) => void };

export const Pill = memo(({ label, onSelect }: Props) => {
  const handleClick = useCallback(() => onSelect(label), [onSelect, label]);
  return (
    <button className="pill" onClick={handleClick}>
      {label}
    </button>
  );
});
\`\`\`

## When *not* to memo

- Components that are pure layout wrappers (cost < cost of memo).
- When prop objects are recreated each render—stabilize them first.
- If the subtree uses context values that change frequently.

## Measure

- Lighthouse / Web Vitals in CI for regressions.
- React Profiler to spot wasted renders.
- Watch heap + CPU on low-end devices (Moto G4, iPhone 8).

---

If you want the full deep dive with code samples and profiler traces, ping me and I’ll publish the long-form version here.
`;
