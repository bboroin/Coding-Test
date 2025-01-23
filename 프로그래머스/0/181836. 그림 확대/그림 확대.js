const solution = (picture, k) =>
    picture
        .map(line => [...line].map(char => char.repeat(k)).join(''))
        .flatMap(line => Array(k).fill(line));