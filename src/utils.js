function suggestLocation(typedLocation, info) {
  const { location } = info;
  const place = location.split(",");
  const result = {
    ...info,
    isExactMatch: typedLocation.toLowerCase() === place[0].toLowerCase(),
    suggestedLocation: location,
  };
  return result;
}
export { suggestLocation };
