import { TeamMember, Project, Service, Company } from './types';
import fs from 'fs';
import path from 'path';

const contentDir = path.join(process.cwd(), 'content');

export function getTeamMembers(): TeamMember[] {
  const teamDir = path.join(contentDir, 'team');

  if (!fs.existsSync(teamDir)) {
    return [];
  }

  const files = fs.readdirSync(teamDir).filter(f => f.endsWith('.json'));

  return files.map(file => {
    const content = fs.readFileSync(path.join(teamDir, file), 'utf-8');
    return JSON.parse(content) as TeamMember;
  });
}

export function getTeamMember(slug: string): TeamMember | null {
  const filePath = path.join(contentDir, 'team', `${slug}.json`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as TeamMember;
}

export function getProjects(): Project[] {
  const filePath = path.join(contentDir, 'projects.json');

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  return data.projects as Project[];
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter(p => p.featured);
}

export function getServices(): Service[] {
  const filePath = path.join(contentDir, 'services.json');

  if (!fs.existsSync(filePath)) {
    return [];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(content);
  return data.services as Service[];
}

export function getCompany(): Company | null {
  const filePath = path.join(contentDir, 'company.json');

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as Company;
}
