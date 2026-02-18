async function getPsData(username, days = 365) {
  const url = `https://lichess.org/api/storm/dashboard/${encodeURIComponent(username)}?days=${days}`;
  const res = await fetch(url, { method: "GET" }); // no extra headers
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json();
}
