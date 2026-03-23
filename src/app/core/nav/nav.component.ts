import { Component, inject, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../theme/theme.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  theme = inject(ThemeService);
  scrolled = signal(false);
  menuOpen = signal(false);

  links = [
    { path: '/home',     label: 'Home',     num: '01' },
    { path: '/about',    label: 'About',    num: '02' },
    { path: '/projects', label: 'Projects', num: '03' },
    { path: '/skills',   label: 'Skills',   num: '04' },
    { path: '/contact',  label: 'Contact',  num: '05' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
