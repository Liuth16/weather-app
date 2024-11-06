const ErrorManager = {
  dateError() {
    const error = new Error(
      "You entered an invalid date (past or non-existent), please select a different one."
    );
    error.name = "dateError";
    return error;
  },

  locationError() {
    const error = new Error("Bad request. Check if the location is correct");
    error.name = this.locationError;
    return error;
  },
};

export { ErrorManager };
