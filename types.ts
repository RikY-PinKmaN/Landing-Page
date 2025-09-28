// FIX: Import `ReactNode` to fix "Cannot find namespace 'React'" error.
import type { ReactNode } from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  // FIX: Use `ReactNode` type directly instead of `React.ReactNode`.
  icon: ReactNode;
  title: string;
  description: string;
  details: string[];
  benefits: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
  logoUrl: string;
}

export interface CaseStudy {
  client: string;
  problem: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
}