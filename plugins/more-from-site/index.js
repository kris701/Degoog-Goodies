const INFO_HTML =
  `<div class="command-result"><p>Adds an option to show more results from a single site.</p></div>`;

export default {
  isClientExposed: false,
  name: "More From Site",
  description: "Adds an option to show more results from a single site.",
  settingsSchema: [],
  trigger: "more",
  aliases: ["m"],

  execute() {
    return { title: "More from site", html: INFO_HTML };
  },
};