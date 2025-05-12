
export default async function handler(req, res) {
  const { id } = req.query;
  const response = await fetch(`https://aviationapi.com/api/airports/${id}`);
  const data = await response.json();
  res.status(200).json(data);
}
