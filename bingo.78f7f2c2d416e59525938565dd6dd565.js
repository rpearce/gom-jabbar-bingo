;(() => {
  // ===========================================================================
  // Constants

  const FREE_ENTRY = `Spoiler Alert: No spoilers`

  const ENTRIES = [
    `Ever heard of them?!`,
    `Spice Morsels`,
    `Indeed`,
    `Hilarious!`,
    `Dune, baby!`,
    `Duncan MF'ing Idaho`,
    `Have you seen him CLIMB?!`,
    `Kwisatz Haderach patrons are now uncomfortable`,
    `Wormy boy`,
    `Marveling over quote`,
    `That is so funny!`,
    `Damnit, Frank!`,
    `…is so much better than "Fear is the mind-killer…`,
    `Those dirty Tleilaxu`,
    `Bashed Brian Herbert & Kevin J. Anderson`,
    `Beef swelling`,
    `Amazing!`,
    `A little bit of column A, a little bit of column B`,
    `So horny`,
    `Put a pin in it for now`,
    `That is so silly!`,
    `Leo's art degree mentioned`,
    `Such a Korba!`,
    `Gaius Helen Mohaim!`,
    `Leo does a "voice"`,
    `My guy…`,
    `[Person] definitely Fs!`,
    `My. Name. Is. Leo! [staccato]`,
    `Some housekeeping / Make Shadout Mapes proud`,
  ];

  // ===========================================================================
  // Helpers

  // Modern Fisher-Yates shuffle algo
  function shuffle(xs) {
    const xsClone = structuredClone(xs);

    for (let i = xsClone.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = xsClone[i];
      xsClone[i] = xsClone[j];
      xsClone[j] = tmp;
    }

    return xsClone;
  }

  function pipe(g, f) {
    return function (x) {
      return f(g(x));
    }
  }

  function takeN(n) {
    return function (xs) {
      return xs.slice(0, n);
    }
  }

  function insertAt(i, item) {
    return function (xs) {
      return xs.toSpliced(i, 0, item);
    }
  }

  const getEntriesForBoard = pipe(
    shuffle,
    insertAt(12, FREE_ENTRY),
    takeN(25)
  );

  // ===========================================================================
  // Main

  function main() {
    const entriesForBoard = getEntriesForBoard(ENTRIES);

    Array.from(document.querySelectorAll('td')).forEach((space, i) => {
      space.innerHTML = `<div>${entriesForBoard[i]}</div>`;
    });
  }

  main();
})();
