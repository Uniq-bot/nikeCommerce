import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../Card/ProductCard.jsx';

const normalize = (s = '') => s.toString().toLowerCase().trim();

const highlight = (text, query) => {
  if (!query) return text;
  const q = normalize(query);
  const t = text?.toString() || '';
  const lower = t.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return t;
  const before = t.slice(0, idx);
  const match = t.slice(idx, idx + q.length);
  const after = t.slice(idx + q.length);
  return (
    <>
      {before}
      <mark className="bg-yellow-200 text-black rounded px-0.5">{match}</mark>
      {after}
    </>
  );
};

const SearchResults = ({ data = [] }) => {
  const [params] = useSearchParams();
  const q = params.get('q') || '';

  const results = useMemo(() => {
    const query = normalize(q);
    if (!query) return [];
    return data.filter((item) => {
      const fields = [
        item.name,
        item.category,
        item.label,
        item.for,
      ]
        .filter(Boolean)
        .map(normalize);
      return fields.some((f) => f.includes(query));
    });
  }, [data, q]);

  return (
    <div className="min-h-screen bg-gray-50 font-[han]">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Search</h1>
          <p className="text-gray-600">Results for: <span className="font-medium">{q}</span></p>
        </div>

        {q && results.length === 0 && (
          <div className="bg-white rounded-lg p-6 shadow-sm text-center text-gray-600">
            No products found.
          </div>
        )}

        {results.length > 0 && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {results.map((item) => (
                <div key={item.id} className="min-w-0">
                  <ProductCard item={item} />
                  <div className="mt-1 text-xs text-gray-600 truncate">
                    <div className="truncate">{highlight(item.name, q)}</div>
                    <div className="truncate">{highlight(item.category, q)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
