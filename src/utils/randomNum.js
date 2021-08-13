export default function randomColor() {
  const min = 0;
  const max = 255;
  return Math.floor(Math.random() * (max - min) + min);
}
