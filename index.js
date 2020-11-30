function objectExposes(obj, path = ".") {
  return Object.entries(obj).reduce((p, [k, v]) => {
    const kPath = `${path}/${k}`;

    if (typeof v === "object") {
      return {
        ...p,
        ...objectExposes(v, kPath),
      };
    }

    return {
      ...p,
      [kPath]: v,
    };
  }, {});
}

module.exports = objectExposes;
