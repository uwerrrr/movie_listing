export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const dateFormatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return dateFormatter.format(date);
};
