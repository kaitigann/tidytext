const elements = document.getElementsByTagName('*');

const fReplacementWords = ['frack', 'frick', 'flip', 'fudge', 'flim-flam', 'fraggle'];
const sReplacementWords = ['short', 'snickerdoodle', 'spit', 'sugar', 'poop', 'shoot'];
const dReplacementWords = ['dang', 'darn', 'daggum', 'doggon', 'jam', 'ham', 'spam'];
const aReplacementWords = ['booty', 'ask', 'bum', 'fanny'];
const bReplacementWords = ['birch', 'witch', 'bitcoin', 'beast'];

for (let i = 0; i < elements.length; i += 1) {
  const element = elements[i];

  for (let j = 0; j < element.childNodes.length; j += 1) {
    const node = element.childNodes[j];

    if (node.nodeType === 3) {
      const text = node.nodeValue;
      let replacementText = text;

      while (
        replacementText.toLowerCase().includes('ass')
        || replacementText.toLowerCase().includes('shit')
        || replacementText.toLowerCase().includes('damn')
        || replacementText.toLowerCase().includes('fuck')
        || replacementText.toLowerCase().includes('bitch')
      ) {
        // replacements
        replacementText = replacementText.replace(
          /ass/i,
          aReplacementWords[Math.floor(Math.random() * aReplacementWords.length)],
        );
        replacementText = replacementText.replace(
          /shit/i,
          sReplacementWords[Math.floor(Math.random() * sReplacementWords.length)],
        );
        replacementText = replacementText.replace(
          /damn/i,
          dReplacementWords[Math.floor(Math.random() * dReplacementWords.length)],
        );
        replacementText = replacementText.replace(
          /fuck/i,
          fReplacementWords[Math.floor(Math.random() * fReplacementWords.length)],
        );
        replacementText = replacementText.replace(
          /bitch/i,
          bReplacementWords[Math.floor(Math.random() * bReplacementWords.length)],
        );
      }
      node.replaceWith(document.createTextNode(replacementText));
    }
  }
}
