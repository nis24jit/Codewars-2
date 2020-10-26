function midtownNav(start, end) {
  const s = start.slice(14, 16) - end.slice(14, 16);
  const f = start[0] - end[0];
  return `Walk ${Math.abs(s)} blocks ${
    s > 0 ? "south" : "north"
  }, and ${Math.abs(f)} blocks ${f > 0 ? "east" : "west"}`;
}
