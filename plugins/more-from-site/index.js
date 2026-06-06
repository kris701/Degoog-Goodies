let pluginEnabled = true;

export const slot = {
  isClientExposed: true,
  id: "more-from-site",
  name: "More From Site",
  description: "Adds an option to show more results from a single site.",

  settingsSchema: [
    {
      key: "enabled",
      label: "Enabled",
      type: "toggle",
    },
  ],

  async init(ctx) {
  },

  configure(settings) {
    pluginEnabled = settings?.enabled !== "false";
  },

  trigger(query) {
    console.log("trig");
  },

  async execute(query, context) {
    console.log("exec");
  },
};

export default { slot };