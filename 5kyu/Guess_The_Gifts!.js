//Guess The Gifts!
function guessGifts(wishlist, presents) {
  const res = [];
  for (let i = 0; i < presents.length; i++) {
    const present = [
      presents[i].size,
      presents[i].clatters,
      presents[i].weight,
    ];
    for (let j = 0; j < wishlist.length; j++) {
      const wish = [wishlist[j].size, wishlist[j].clatters, wishlist[j].weight];
      if (
        wish.filter((el, i) => el == present[i]).length == 3 &&
        res.indexOf(wishlist[j].name) === -1
      ) {
        res.push(wishlist[j].name);
      }
    }
  }
  return res;
}
