export function formatLocation(location) {
  const { city, country, postalCode } = location;
  return `${city}, ${country} ${postalCode}`;
}

export function formatTimezone(timezone) {
  return `UTC ${timezone}`;
}
