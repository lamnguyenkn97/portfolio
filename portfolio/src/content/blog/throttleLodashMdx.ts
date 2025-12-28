export const throttleLodashMdx = `
# Update Real Time with Throttle in Lodash

> Optimizing real-time updates with lodash throttle for better performance and UX.

## The Problem

When building real-time features like search suggestions, scroll handlers, or resize listeners, you often need to update the UI frequently. However, calling expensive operations on every event can lead to performance issues and a poor user experience.

Consider a search input that makes an API call on every keystroke. If a user types "react hooks", that's 12 API calls in rapid succession—unnecessary load on both client and server.

## The Solution: Throttle

\`throttle\` from lodash limits how often a function can be called. Unlike \`debounce\`, throttle ensures the function executes at regular intervals, making it perfect for real-time updates where you want periodic execution rather than waiting for a pause.

**Key difference:**
- **Throttle**: Executes at most once per X milliseconds (e.g., every 300ms)
- **Debounce**: Waits for X milliseconds of inactivity before executing

## Basic Usage

\`\`\`typescript
import { throttle } from 'lodash';

// Throttle a function to run at most once per 300ms
const throttledUpdate = throttle((value: string) => {
  // Expensive operation: API call, DOM update, etc.
  updateSearchResults(value);
}, 300);

// Use in event handler
input.addEventListener('input', (e) => {
  throttledUpdate(e.target.value);
});
\`\`\`

## React Hook Example

\`\`\`tsx
import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Create throttled function that persists across renders
  const throttledSearch = useMemo(
    () =>
      throttle(async (searchQuery: string) => {
        if (!searchQuery.trim()) {
          setResults([]);
          setLoading(false);
          return;
        }
        
        setLoading(true);
        try {
          const response = await fetch(\`/api/search?q=\${encodeURIComponent(searchQuery)}\`);
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error('Search failed:', error);
        } finally {
          setLoading(false);
        }
      }, 300),
    [] // Empty deps - function is stable
  );

  useEffect(() => {
    throttledSearch(query);
    
    // Cleanup: cancel pending calls on unmount
    return () => {
      throttledSearch.cancel();
    };
  }, [query, throttledSearch]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      {loading && <span>Searching...</span>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

## Advanced: Throttle Options

Lodash throttle accepts an options object for fine-grained control:

\`\`\`typescript
const throttledFn = throttle(
  (value: string) => {
    console.log('Executed:', value);
  },
  300,
  {
    leading: true,   // Execute on the leading edge (immediately)
    trailing: true,  // Execute on the trailing edge (after delay)
  }
);
\`\`\`

**Common patterns:**
- \`{ leading: true, trailing: true }\` - Execute immediately and after delay (default)
- \`{ leading: false, trailing: true }\` - Only execute after delay (similar to debounce)
- \`{ leading: true, trailing: false }\` - Execute immediately, skip trailing calls

## Custom Hook: useThrottle

For better reusability, create a custom hook:

\`\`\`tsx
import { useMemo, useRef, useCallback } from 'react';
import { throttle } from 'lodash';

function useThrottle<T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): T {
  const callbackRef = useRef(callback);
  
  // Update ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const throttledFn = useMemo(
    () =>
      throttle((...args: Parameters<T>) => {
        callbackRef.current(...args);
      }, delay),
    [delay]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      throttledFn.cancel();
    };
  }, [throttledFn]);

  return throttledFn as T;
}

// Usage
function MyComponent() {
  const handleSearch = useThrottle((query: string) => {
    // Search logic
  }, 300);

  return <input onChange={(e) => handleSearch(e.target.value)} />;
}
\`\`\`

## Key Points

- **Throttle vs Debounce**: Throttle executes at regular intervals; debounce waits for a pause
- **Cleanup**: Always cancel throttled functions in cleanup to prevent memory leaks
- **Timing**: 300ms is a good default for search, but adjust based on your use case:
  - Search: 300-500ms
  - Scroll/resize: 100-200ms
  - Mouse move: 16ms (60fps)
- **Options**: Use \`{ leading: true, trailing: true }\` to control execution timing

## When to Use Throttle

- ✅ Real-time search suggestions
- ✅ Scroll event handlers (infinite scroll, parallax)
- ✅ Window resize listeners
- ✅ Mouse move tracking (drag & drop, tooltips)
- ✅ Any frequent event that needs periodic updates

## When NOT to Use Throttle

- ❌ Form validation (use debounce instead)
- ❌ Button clicks (no throttling needed)
- ❌ One-time API calls
- ❌ When you need the latest value immediately after user stops typing (use debounce)

## Performance Benefits

By throttling expensive operations, you can:
- **Reduce API calls by up to 90%** - Fewer requests mean lower server costs
- **Improve UI responsiveness** - Less work per event means smoother interactions
- **Lower server load** - Especially important for high-traffic applications
- **Better battery life on mobile devices** - Fewer computations save power

## Real-World Example

Here's a complete example with error handling and loading states:

\`\`\`tsx
import { useState, useEffect, useMemo } from 'react';
import { throttle } from 'lodash';

interface SearchResult {
  id: string;
  title: string;
  description: string;
}

function AdvancedSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const performSearch = useMemo(
    () =>
      throttle(async (searchQuery: string) => {
        if (!searchQuery.trim()) {
          setResults([]);
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);

        try {
          const response = await fetch(
            \`/api/search?q=\${encodeURIComponent(searchQuery)}\`
          );
          
          if (!response.ok) {
            throw new Error(\`Search failed: \${response.statusText}\`);
          }

          const data = await response.json();
          setResults(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Search failed');
          setResults([]);
        } finally {
          setLoading(false);
        }
      }, 300),
    []
  );

  useEffect(() => {
    performSearch(query);
    return () => {
      performSearch.cancel();
    };
  }, [query, performSearch]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        disabled={loading}
      />
      {loading && <div>Searching...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h3>{result.title}</h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

---

Throttle is a simple but powerful tool for optimizing real-time features. Use it wisely to balance user experience with performance!
`;
