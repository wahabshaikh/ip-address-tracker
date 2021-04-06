export function formatLocation(location) {
  const { city, region, country, postalCode } = location;
  return `
  ${city}, ${region} ${country} ${postalCode}`;
}

export function formatTimezone(timezone) {
  return `UTC ${timezone}`;
}
