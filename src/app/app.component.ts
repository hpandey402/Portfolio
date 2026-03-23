import { Component, inject } from "@angular/core";

import { RouterOutlet } from "@angular/router";
import { NavComponent } from "./core/nav/nav.component";
import { ThemeService } from "./core/theme/theme.service";
import { cubeTransition } from "./core/page-transition/page-transition.animations";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  animations: [cubeTransition],
  template: `
    <app-nav></app-nav>

    <main class="page-container">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>
  `,
  styles: [
    `
      main {
        position: relative;
        min-height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  theme = inject(ThemeService);
}
