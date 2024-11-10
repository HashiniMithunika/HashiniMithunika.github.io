import './polyfills.server.mjs';
import {
  NgClass,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  mergeApplicationConfig,
  provideClientHydration,
  provideRouter,
  provideServerRendering,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵtext
} from "./chunk-DPG3LASN.mjs";

// src/app/app.component.ts
var _c0 = (a0) => ({ "active": a0 });
var _c1 = () => ({ exact: true });
var AppComponent = class _AppComponent {
  constructor() {
    this.isMenuOpen = false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  // Close the menu when a link is clicked
  closeMenu() {
    this.isMenuOpen = false;
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 11, consts: [[1, "logo"], [1, "navbar", 3, "ngClass"], ["routerLink", "/", "routerLinkActive", "active-link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/about", "routerLinkActive", "active-link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/projects", "routerLinkActive", "active-link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/contact", "routerLinkActive", "active-link", 3, "click", "routerLinkActiveOptions"], [1, "hamburger", 3, "click"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "nav")(2, "div", 0);
        \u0275\u0275text(3, "Hashini Mithunika");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "ul", 1)(5, "li")(6, "a", 2);
        \u0275\u0275listener("click", function AppComponent_Template_a_click_6_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(7, "Home");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "li")(9, "a", 3);
        \u0275\u0275listener("click", function AppComponent_Template_a_click_9_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(10, "About");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "li")(12, "a", 4);
        \u0275\u0275listener("click", function AppComponent_Template_a_click_12_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(13, "Projects");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "li")(15, "a", 5);
        \u0275\u0275listener("click", function AppComponent_Template_a_click_15_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275text(16, "Contact");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(17, "div", 6);
        \u0275\u0275listener("click", function AppComponent_Template_div_click_17_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275text(18, "\u2630");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "main");
        \u0275\u0275element(20, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "footer")(22, "p");
        \u0275\u0275text(23, "\xA9 2024 Hashini Mithunika. All rights reserved.");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(5, _c0, ctx.isMenuOpen));
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(7, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(8, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c1));
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c1));
      }
    }, dependencies: [RouterModule, RouterOutlet, RouterLink, RouterLinkActive, NgClass], styles: ['\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n[_ngcontent-%COMP%]:root {\n  --secondary-color: #041540;\n  --primary-color: #0d3da5;\n  --accent-color: #5c5e60;\n  --background-color: #9a9797;\n  --text-color: #ffffff;\n  --white: #fff;\n  --dark-background: #212121;\n}\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: "Arial", sans-serif;\n  color: var(--text-color);\n  background-color: var(--background-color);\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 2rem;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: var(--dark-background);\n  color: var(--white);\n  text-align: center;\n  font-size: 1rem;\n  margin-top: auto;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  color: var(--white);\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem 2rem;\n}\n.logo[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  color: var(--background-color);\n}\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  list-style-type: none;\n  gap: 2rem;\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--white);\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: background-color 0.3s, color 0.3s;\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--primary-color);\n  color: var(--white);\n}\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\n  background-color: var(--secondary-color);\n  color: var(--white);\n  font-weight: bold;\n  border-bottom: 3px solid var(--primary-color);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 2rem;\n  color: var(--white);\n  cursor: pointer;\n}\n@media (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 60px;\n    right: 0;\n    background-color: var(--dark-background);\n    flex-direction: column;\n    width: 100%;\n    text-align: center;\n    display: none;\n  }\n  .navbar.active[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 1rem 0;\n    border-bottom: 1px solid #444;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: block;\n  }\n  nav[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n}\n@media (min-width: 601px) {\n  .navbar[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=app.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 13 });
})();

// src/app/home/home.component.ts
var HomeComponent = class _HomeComponent {
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "home"], [1, "banner-container"], ["src", "assets/222.jpg", "alt", "Banner image", 1, "banner"], ["src", "assets/Hashini Mithunika.jpg", "alt", "Overlay image", 1, "overlay-image"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "img", 2)(3, "img", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h1");
        \u0275\u0275text(5, "Hashini Mithunika");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "jdhf");
        \u0275\u0275elementEnd();
      }
    }, styles: ["\n\n.banner-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n}\n.banner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  opacity: 0.3;\n  z-index: 0;\n}\n.overlay-image[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n  z-index: 1;\n  width: 200px;\n  height: auto;\n  border-radius: 50%;\n  border: 3px solid #000000;\n}\n/*# sourceMappingURL=home.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 10 });
})();

// src/app/about/about.component.ts
var AboutComponent = class _AboutComponent {
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 0, consts: [[1, "about"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "About Me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "p");
        \u0275\u0275text(4, "[Your bio here]");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "h3");
        \u0275\u0275text(6, "Skills");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "ul")(8, "li");
        \u0275\u0275text(9, "HTML");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "li");
        \u0275\u0275text(11, "CSS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "li");
        \u0275\u0275text(13, "JavaScript");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "li");
        \u0275\u0275text(15, "Angular");
        \u0275\u0275elementEnd()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\about\\about.component.ts", lineNumber: 10 });
})();

// src/app/projects/projects.component.ts
var ProjectsComponent = class _ProjectsComponent {
  static {
    this.\u0275fac = function ProjectsComponent_Factory(t) {
      return new (t || _ProjectsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 0, consts: [[1, "projects"], [1, "project-card"], ["href", "#"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "h3");
        \u0275\u0275text(5, "Project Title 1");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Description of the project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "a", 2);
        \u0275\u0275text(9, "View Project");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 1)(11, "h3");
        \u0275\u0275text(12, "Project Title 2");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "p");
        \u0275\u0275text(14, "Description of the project");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 2);
        \u0275\u0275text(16, "View Project");
        \u0275\u0275elementEnd()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\projects\\projects.component.ts", lineNumber: 10 });
})();

// src/app/contact/contact.component.ts
var ContactComponent = class _ContactComponent {
  static {
    this.\u0275fac = function ContactComponent_Factory(t) {
      return new (t || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 0, consts: [[1, "contact"], ["for", "name"], ["id", "name", "type", "text"], ["for", "email"], ["id", "email", "type", "email"], ["for", "message"], ["id", "message"], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "h2");
        \u0275\u0275text(2, "Contact Me");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "form")(4, "label", 1);
        \u0275\u0275text(5, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "input", 2);
        \u0275\u0275elementStart(7, "label", 3);
        \u0275\u0275text(8, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "input", 4);
        \u0275\u0275elementStart(10, "label", 5);
        \u0275\u0275text(11, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "textarea", 6);
        \u0275\u0275elementStart(13, "button", 7);
        \u0275\u0275text(14, "Send");
        \u0275\u0275elementEnd()()();
      }
    } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\contact\\contact.component.ts", lineNumber: 10 });
})();

// src/app/app.routes.ts
var routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};

// src/app/app.config.server.ts
var serverConfig = {
  providers: [
    provideServerRendering()
  ]
};
var config = mergeApplicationConfig(appConfig, serverConfig);

// src/main.server.ts
var bootstrap = () => bootstrapApplication(AppComponent, config);
var main_server_default = bootstrap;

export {
  main_server_default
};
//# sourceMappingURL=chunk-MW2S2RG4.mjs.map
