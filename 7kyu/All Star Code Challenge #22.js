function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minute = Math.floor((seconds % 3600) / 60);
  return `${hours} hour(s) and ${minute} minute(s)`;
}
