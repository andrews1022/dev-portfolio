const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // add 1 to month since months are zero-indexed
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${month}-${day}-${year}`;
};

export { formatDate };
