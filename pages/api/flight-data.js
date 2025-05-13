export default async function handler(req, res) {
  const response = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
  const { pilots } = await response.json();
  res.status(200).json(pilots);
}
