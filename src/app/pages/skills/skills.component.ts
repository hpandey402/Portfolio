import { Component, AfterViewInit } from '@angular/core';

interface Skill { name: string; level: number; }
interface SkillGroup { label: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {
  groups: SkillGroup[] = [
    {
      label: 'Frontend', icon: '🖥',
      skills: [
        { name: 'Angular / TypeScript', level: 95 },
        { name: 'React / Next.js',      level: 90 },
        { name: 'SCSS / Animations',    level: 92 },
        { name: 'WebGL / Three.js',     level: 72 },
      ]
    },
    {
      label: 'Backend', icon: '⚙️',
      skills: [
        { name: 'Node.js / Express',  level: 88 },
        { name: 'Python / FastAPI',   level: 82 },
        { name: 'Go',                 level: 70 },
        { name: 'GraphQL / REST',     level: 90 },
      ]
    },
    {
      label: 'Data & Cloud', icon: '☁️',
      skills: [
        { name: 'PostgreSQL / MongoDB', level: 85 },
        { name: 'Redis / Kafka',        level: 78 },
        { name: 'AWS / GCP',            level: 80 },
        { name: 'Docker / Kubernetes',  level: 76 },
      ]
    },
    {
      label: 'Craft', icon: '🎨',
      skills: [
        { name: 'System Design',     level: 85 },
        { name: 'UI/UX Principles',  level: 88 },
        { name: 'Performance Tuning',level: 84 },
        { name: 'Open Source',       level: 78 },
      ]
    },
  ];

  tools = [
    'VS Code', 'Git / GitHub', 'Figma', 'Postman',
    'Storybook', 'Nx Monorepo', 'Terraform', 'DataDog',
    'Linear', 'Notion', 'Vercel', 'Netlify',
  ];

  ngAfterViewInit() {
    // Reveal on scroll
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          // Animate bars
          e.target.querySelectorAll<HTMLElement>('.bar-fill').forEach(bar => {
            const level = bar.dataset['level'] ?? '0';
            setTimeout(() => { bar.style.width = level + '%'; }, 150);
          });
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }
}
