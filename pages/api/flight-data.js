
export default async function handler(req, res) {
  const response = await fetch('https://aviationapi.com/api/vatsim/pilots');
  const data = await response.json();
  res.status(200).json(data);
}
