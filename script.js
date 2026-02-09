function dateDiffInDays(date1, date2) {
  // Parse input dates
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);
  
  // Get UTC timestamps to avoid timezone issues
  const utc1 = Date.UTC(
    firstDate.getFullYear(),
    firstDate.getMonth(),
    firstDate.getDate()
  );
  
  const utc2 = Date.UTC(
    secondDate.getFullYear(),
    secondDate.getMonth(),
    secondDate.getDate()
  );
  
  // Calculate difference in milliseconds
  const diffInMs = utc2 - utc1;
  
  // Convert milliseconds to days
  const msPerDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
  const diffInDays = Math.floor(diffInMs / msPerDay);
  
  return diffInDays;
}
// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));
