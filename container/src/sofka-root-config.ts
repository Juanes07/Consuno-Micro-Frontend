import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });
registerApplication({
  name: "@sofka/mf-header",
  app: () => System.import("@sofka/mf-header"),
  activeWhen: ["/react"]
});
registerApplication({
  name: "@mf-poke",
  app: () => System.import("@mf-poke"),
  activeWhen: ["/angular"]
});

start({
  urlRerouteOnly: true,
});
