import { Injectable, signal, effect } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ThemeService {
  isDark = signal<boolean>(false);

  constructor() {
    const saved = localStorage.getItem("portfolio-theme");
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(saved === "dark" ? true : false);

    effect(() => {
      const dark = this.isDark();
      document.documentElement.setAttribute(
        "data-theme",
        dark ? "dark" : "light",
      );
      localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    });
  }

  toggle() {
    this.isDark.update((v) => !v);
  }
}
