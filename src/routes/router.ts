import { Router } from "express";
import glob from "glob";

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + "/**/*.routes.*");
  routes.map((route: string) => initialize(route, router));
}

function initialize(routePath: string, router: Router) {
  const route = require(routePath);
  route.initialize(router);
}
