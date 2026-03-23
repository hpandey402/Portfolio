import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  desc: string;
  year: string;
  emoji: string;
  gradient: string;
  featured?: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {
  activeFilter = signal<string>('All');

  filters = ['All', 'Frontend', 'Backend', 'Full-Stack', 'Creative'];

  projects: Project[] = [
    {
      id: 1, title: 'RealTime Analytics Dashboard', category: 'Full-Stack',
      tags: ['Angular', 'GraphQL', 'AWS', 'D3.js'],
      desc: 'High-performance analytics platform processing 50k+ events/sec with live visualisations, predictive insights, and role-based access control.',
      year: '2024', emoji: '⚡', gradient: 'linear-gradient(135deg,#1a1209,#2d1f05)',
      featured: true
    },
    {
      id: 2, title: 'AI Code Review Bot', category: 'Backend',
      tags: ['Node.js', 'Python', 'LLMs', 'WebSockets'],
      desc: 'Autonomous PR review system leveraging large language models to catch bugs, enforce patterns, and suggest improvements inline.',
      year: '2024', emoji: '🧠', gradient: 'linear-gradient(135deg,#0d1120,#1a0d2a)'
    },
    {
      id: 3, title: 'Decentralised Finance App', category: 'Full-Stack',
      tags: ['React Native', 'Rust', 'Blockchain', 'Web3'],
      desc: 'Cross-chain DeFi wallet with real-time portfolio tracking, yield farming strategies, and hardware wallet support.',
      year: '2023', emoji: '🚀', gradient: 'linear-gradient(135deg,#0a1a0a,#0d2a10)'
    },
    {
      id: 4, title: 'Global CDN Management Console', category: 'Full-Stack',
      tags: ['Next.js', 'PostgreSQL', 'Redis', 'Go'],
      desc: 'Full-featured control plane for a distributed CDN spanning 40+ PoPs with intelligent traffic routing and anomaly detection.',
      year: '2023', emoji: '🌐', gradient: 'linear-gradient(135deg,#0a1a1a,#0d2d2d)'
    },
    {
      id: 5, title: 'Generative Art Platform', category: 'Creative',
      tags: ['WebGL', 'Three.js', 'GLSL', 'NFT'],
      desc: 'Browser-based creative coding environment with GPU-accelerated rendering, an NFT minting pipeline, and a community gallery.',
      year: '2023', emoji: '🎨', gradient: 'linear-gradient(135deg,#1a0a1a,#2d0d2a)',
      featured: true
    },
    {
      id: 6, title: 'Microservices Orchestrator', category: 'Backend',
      tags: ['Go', 'Kubernetes', 'gRPC', 'Prometheus'],
      desc: 'Zero-downtime deployment engine with service mesh, circuit breakers, distributed tracing, and intelligent auto-scaling.',
      year: '2022', emoji: '🔬', gradient: 'linear-gradient(135deg,#0a1209,#0d200f)'
    },
    {
      id: 7, title: 'Design System Library', category: 'Frontend',
      tags: ['Angular', 'Storybook', 'SCSS', 'a11y'],
      desc: 'Comprehensive component library with 60+ accessible components, dark mode support, and automated visual regression testing.',
      year: '2022', emoji: '🎛️', gradient: 'linear-gradient(135deg,#180a1a,#1a0d22)'
    },
    {
      id: 8, title: 'Real-Estate Marketplace', category: 'Full-Stack',
      tags: ['Vue', 'Django', 'ElasticSearch', 'Maps API'],
      desc: 'Property discovery platform with intelligent search, 3D virtual tours, mortgage calculator, and agent CRM integration.',
      year: '2022', emoji: '🏡', gradient: 'linear-gradient(135deg,#1a1209,#1a1400)'
    },
  ];

  get filtered(): Project[] {
    const f = this.activeFilter();
    return f === 'All' ? this.projects : this.projects.filter(p => p.category === f);
  }

  setFilter(f: string) { this.activeFilter.set(f); }

  ngAfterViewInit() {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}
