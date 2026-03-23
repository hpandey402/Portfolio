import { Component, AfterViewInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  sending = signal(false);
  sent    = signal(false);

  form = { name: '', email: '', subject: '', message: '' };

  socials = [
    { icon: 'GH', label: 'GitHub',   url: '#', handle: '@yourhandle' },
    { icon: 'LI', label: 'LinkedIn', url: '#', handle: 'yourname' },
    { icon: 'TW', label: 'Twitter',  url: '#', handle: '@yourhandle' },
    { icon: 'DR', label: 'Dribbble', url: '#', handle: 'yourhandle' },
  ];

  async submit() {
    this.sending.set(true);
    await new Promise(r => setTimeout(r, 1800));
    this.sending.set(false);
    this.sent.set(true);
    this.form = { name: '', email: '', subject: '', message: '' };
  }

  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}
