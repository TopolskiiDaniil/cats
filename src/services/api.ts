const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=1';
const API_KEY = 'DEMO_API_KEY';

export async function fetchCatImage(): Promise<string> {
  const res = await fetch(API_URL, {
    headers: {
      'x-api-key': API_KEY
    },
  });

  if (!res.ok) {
    throw new Error('Ошибка при получении изображения');
  }

  const data = await res.json();
  return data[0].url;
}