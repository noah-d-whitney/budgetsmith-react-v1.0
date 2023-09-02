export function formatDate(date) {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
}

// calcDateDiff()
export function calcDateDiff(startDate, endDate = new Date()) {
  // get difference in days
  const diffInMS = endDate - startDate;
  const diffInDays = Math.floor(diffInMS / 86400000);
  const days = diffInDays % 7;
  const weeks = Math.floor(diffInDays / 7);
  return {
    totalDays: diffInDays,
    days: days,
    weeks: weeks,
  };
}
