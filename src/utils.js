function suggestLocation(typedLocation, info) {
  const { location } = info;
  const place = location.split(",");
  if (typedLocation.toLowerCase() === place[0].toLowerCase()) {
    return info;
  }
  console.log(`You meant ${location}`);
  return info;
}

export { suggestLocation };
