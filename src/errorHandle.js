class ErrorManager {
  static dateError() {
    const error = new Error(
      "You entered an invalid date, please select a different one."
    );
    error.name = "dateError";
    return error;
  }

  static locationError() {
    const error = new Error("Bad request. Check if the location is correct");
    error.name = "locationError";
    return error;
  }
}

export { ErrorManager };
