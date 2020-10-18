//Return substring instance count - 2

function searchSubstr(fullText, searchText, allowOverlap) {
  let count = 0;
  if (searchText.length == 0) return 0;
  for (let i = 0; i < fullText.length; i++) {
    if (fullText.slice(i, i + searchText.length) == searchText) {
      if (!allowOverlap) {
        i += searchText.length;
      }
      count++;
    }
  }
  return count;
}
