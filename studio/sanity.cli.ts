import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: { projectId: "jsqssfsb", dataset: "production" },
  // El Studio se publica en https://dipz.sanity.studio
  studioHost: "dipz",
  deployment: { autoUpdates: true },
});
