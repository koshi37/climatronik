import { Component, HostListener, Inject } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Renderer2 } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  imports: [NgFor, NgClass, MatIconModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  isOpen = false;
  isDarkMode = false;
  isScrolled = false;
  cartCount = 0;

  navItems = [
    { name: 'Home', routing: '/' },
    { name: 'Montaż', routing: '/service' },
    { name: 'Klimatyzatory', routing: '/store' },
    { name: 'O nas', routing: '/about' },
    { name: 'Kontakt', routing: '/contact' },
  ];

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.updateBodyOverflow();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
    this.updateBodyOverflow();
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }

  private updateBodyOverflow(): void {
    if (this.document && this.document.body) {
      this.renderer.setStyle(
        this.document.body,
        'overflow',
        this.isOpen ? 'hidden' : 'unset'
      );
    }
  }
}