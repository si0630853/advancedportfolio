import { Component } from '@angular/core';
import {
  animate,
  style,
  transition,
  trigger,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

    /* HERO / SECTION SLIDE */
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(60px)' }),
        animate(
          '1000ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),

    /* SINGLE FADE */
    trigger('fadeUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px)' }),
        animate(
          '900ms cubic-bezier(0.23, 1, 0.32, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ]),

    /* STAGGER */
    trigger('staggerFadeUp', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(40px)' }),
            stagger(120, [
              animate(
                '900ms cubic-bezier(0.23, 1, 0.32, 1)',
                style({ opacity: 1, transform: 'translateY(0)' })
              )
            ])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class AppComponent {
  year = new Date().getFullYear();

  profileImage = 'assets/images/profile.png';

  skills = [
    'Angular',
    'ASP.NET Core Web API',
    'Entity Framework Core',
    'SQL Server',
    'PostgreSQL',
    'JWT Authentication',
    'REST APIs',
    'Clean Architecture',
    'QA Testing',
    'Business Analysis'
  ];

  projects = [
    {
      title: 'Flour Management System (ERP)',
      image: 'assets/projects/fms.jpg',
      desc: 'Enterprise ERP system for flour mills covering inventory, sales workflows, and financial reporting.',
      tech: ['Angular', 'ASP.NET Core', 'SQL Server']
    },
    {
      title: 'Construction Management System',
      image: 'assets/projects/cms.jpg',
      desc: 'Construction planning, contractor handling, cost estimation, and project tracking solution.',
      tech: ['Angular', 'ASP.NET Core', 'PostgreSQL']
    },
    {
      title: 'Financial Management System',
      image: 'assets/projects/finance.jpg',
      desc: 'Accounting system with ledgers, vouchers, balance sheets, and financial analytics.',
      tech: ['Angular', 'ASP.NET Core']
    },
    {
      title: 'Doctor Management System',
      image: 'assets/projects/health.jpg',
      desc: 'Healthcare platform for doctors, patients, appointments, and medical records.',
      tech: ['Angular', 'ASP.NET Core']
    },
    {
      title: 'Invoices & Billing System',
      image: 'assets/projects/invoice.jpg',
      desc: 'Smart invoicing solution with tax calculation, PDF export, and reporting.',
      tech: ['Angular', 'ASP.NET Core']
    }
  ];

  showBackToTop = false;
  mobileMenuOpen = false;

  constructor() {
    // Listen to scroll events
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  onScroll() {
    this.showBackToTop = window.scrollY > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
