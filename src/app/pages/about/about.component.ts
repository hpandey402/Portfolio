import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  timeline = [
    { year: '2019', role: 'Junior Frontend Developer', company: 'Creative Agency Co.', desc: 'Built responsive interfaces for 15+ client brands, mastering Angular & design systems.' },
    { year: '2020', role: 'Full-Stack Developer', company: 'SaaS Startup', desc: 'Led frontend architecture for a B2B analytics platform with 10k+ daily active users.' },
    { year: '2022', role: 'Senior Engineer', company: 'FinTech Corp', desc: 'Designed real-time data pipelines & micro-frontend architecture serving 1M+ transactions/day.' },
    { year: '2024', role: 'Freelance & Open Source', company: 'Independent', desc: 'Building premium digital products, mentoring developers, and contributing to the Angular ecosystem.' },
  ];

  ngAfterViewInit() {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }
}
