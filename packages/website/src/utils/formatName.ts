const formatName = (id: string) => {
  return id
    .split("-")
    .map((segment) => {
      return segment.replace(/^./u, (char) => {
        return char.toUpperCase();
      });
    })
    .join(" ");
};

export { formatName };
