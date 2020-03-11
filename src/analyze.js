export function analyzeJob(text) {
  const maxScore = rules.filter((r) => r.score > 0).reduce((a, b) => a + b.score, 0);
  const analysis = rules.reduce((analysis, rule) => rule.analyze(analysis), [text]);
  const score = analysis.filter((t) => typeof t === 'object').reduce((a, b) => a + b.score, 0);
  const match = score / maxScore;

  return { text: analysis, match };
}

function containsPhrase(phrasesInput, score) {
  const phrases = (Array.isArray(phrasesInput) ? phrasesInput : [phrasesInput]).map((s) => s.toLocaleLowerCase());

  return {
    score,
    analyze: (text) => {
      for (let tokenIndex = 0; tokenIndex < text.length; tokenIndex++) {
        const token = text[tokenIndex];
        if (typeof token !== 'string') continue;
        for (const phrase of phrases) {
          const index = token.toLocaleLowerCase().indexOf(phrase);
          if (index >= 0) {
            const phraseLength = phrase.length;
            const split = [];
            if (index > 0) split.push(token.substring(0, index));
            split.push({
              text: token.substring(index, index + phraseLength),
              score,
              reason: `Contains the phrase "${phrase}"`,
            });
            if (index + phraseLength < token.length - 1) split.push(token.substring(index + phraseLength));
            return [...text.slice(0, tokenIndex), ...split, ...text.slice(tokenIndex + 1)];
          }
        }
      }

      return text;
    },
  };
}

const rules = [
  containsPhrase(['remote-first', 'remote'], 1),
  containsPhrase(['cross-functional', 'crossfunctional'], 1),
  containsPhrase(['automated tests', 'automating tests'], 1),
  containsPhrase(['AWS'], 1),
  containsPhrase(['React'], 1),
  containsPhrase(['conference'], 1),
  containsPhrase(['challenge', 'challenging'], 1),
  containsPhrase(['love', 'loving'], 1),
  containsPhrase(['Software-as-a-Service', 'SaaS', 'Software as a service'], 1),
  containsPhrase(['self-organising team', 'self-organizing team'], 1),
  containsPhrase(['delivering value', 'deliver value'], 1),
  containsPhrase(['Developers own', 'Teams own', 'Team owns'], 1),
  containsPhrase(['Flexible working hours'], 1),
  containsPhrase(['family-friendly', 'family friendly'], 1),
  containsPhrase(['maintain', 'maintenance'], -1),
  containsPhrase(['SCRUM'], -1),
];
