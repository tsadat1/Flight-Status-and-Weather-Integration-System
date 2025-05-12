
export default async function handler(req, res) {
  const { airportCode } = req.query;
  const response = await fetch(`https://aviationapi.com/api/charts/${airportCode}`);
  const data = await response.json();
  res.status(200).json(data);
}
