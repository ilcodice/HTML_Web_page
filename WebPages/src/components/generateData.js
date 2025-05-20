export default function generateData(count, { min, max }) {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      x: '' + (i + 1),
      y: Math.floor(Math.random() * (max - min + 1)) + min
    });
  }
  return data;
}
