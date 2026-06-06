const INFO_HTML =
  `<div class="command-result"><p>Test.</p></div>`;

export default {
  isClientExposed: false,
  name: "More From Site",
  description: "Adds an option to show more results from a single site.",
  trigger: "highlight",
  aliases: ["hl"],
  settingsSchema: [],

  execute() {
    return { title: "More From Site", html: INFO_HTML };
  },
};