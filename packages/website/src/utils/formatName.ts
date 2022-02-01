const formatName = (id: string) => {
  return id
    .split("-")
    .map((token) => {
      return token.replace(/^./u, (char) => {
        return char.toUpperCase();
      });
    })
    .join(" ");
};

export { formatName };
