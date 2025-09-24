const API_KEY = 'AIzaSyD5o3hS0yPvgZ0HTICXe4ogmYS8dWtMD8Y';
const API_URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`;

export async function getFontVariants(fontName: string): Promise<number[]> {
    const res = await fetch(API_URL);
    const data = await res.json();
    const items = data.items as { family: string; variants: string[] }[];
    const font = items.find(item => item.family === fontName);
    if (!font) return [];

    const weights = font.variants
    .map((variant: string) => {
        const match = variant.match(/\d+/);
        return match ? parseInt(match[0]) : 400;
    })
    .filter((weight: number) => !isNaN(weight));

    return Array.from(new Set(weights)).sort((a, b) => a - b);
}