
export default async function handler(req, res) {
  const { airportCode } = req.query;
  const metarResponse = await fetch(`https://aviationapi.com/api/weather/metar/${airportCode}`);
  const tafResponse = await fetch(`https://aviationapi.com/api/weather/taf/${airportCode}`);

  const metar = await metarResponse.json();
  const taf = await tafResponse.json();

  res.status(200).json({ metar, taf });
}
