import { useCatImage } from '@/hooks/use-cat-image';
import { Wrapper, Form, Label, Button, ImageBox } from './cat-form.styled';
import { useEffect, useState } from 'react';

export const CatForm = () => {
  const { imageUrl, loading, error, getCatImage } = useCatImage();
  
  const [isEnabled, setIsEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const handleEnabledChange = () => setIsEnabled(prev => !prev);
  const handleAutoRefreshChange = () => setAutoRefresh(prev => !prev);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    getCatImage();
  };

  useEffect(() => {
    if (!isEnabled || !autoRefresh) return;

    const interval = setInterval(() => {
      getCatImage();
    }, 5000);

    return () => clearInterval(interval);
  }, [isEnabled, autoRefresh]);

  return (
   <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Label>
          <input type="checkbox" onChange={handleEnabledChange} checked={isEnabled} />
          Enabled
        </Label>
        <Label>
          <input type="checkbox" onChange={handleAutoRefreshChange} checked={autoRefresh} disabled={!isEnabled}/>
          Auto-refresh every 5 seconds
        </Label>
        <Button type="submit" disabled={loading || !isEnabled}>
          {loading ? 'Loading...' : 'Get cat'}
        </Button>
      </Form>

      <ImageBox>
        {error && <p>{error}</p>}
        {imageUrl && <img src={imageUrl} alt="Cat" />}
      </ImageBox>
    </Wrapper>
  );
};