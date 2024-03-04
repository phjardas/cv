module.exports = () => {
  const domain = process.env.URL ?? process.env.VERCEL_URL;
  const url = domain ? `https://${domain}` : "http://localhost:8080";

  return {
    title: "Philipp Jardas",
    subtitle: "Agile Full-Stack Software Engineer",
    url,
    languages: ["de", "en"],
  };
};
