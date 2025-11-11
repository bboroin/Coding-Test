function solution(babbling) {
  const SYLL = ["aya", "ye", "woo", "ma"];

  const ok = (w) => {
    const used = new Set();
    let i = 0;
    while (i < w.length) {
      let hit = false;
      for (const s of SYLL) {
        if (!used.has(s) && w.startsWith(s, i)) {
          used.add(s);
          i += s.length;
          hit = true;
          break;
        }
      }
      if (!hit) return false;
    }
    return true;
  };

  let cnt = 0;
  for (const w of babbling) if (ok(w)) cnt++;
  return cnt;
}