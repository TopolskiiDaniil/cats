import { useState } from 'react';
import { fetchCatImage } from '@/services/api';

export function useCatImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getCatImage = async () => {
    try {
      setLoading(true);
      const url = await fetchCatImage();
      setImageUrl(url);
      setError(null);
    } catch {
      setError('Failed to load image');
    } finally {
      setLoading(false);
    }
  };

  return { imageUrl, loading, error, getCatImage };
}