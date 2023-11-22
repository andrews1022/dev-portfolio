type ExperienceLink = {
  title: string;
  url: string;
};

export type Experience = {
  date: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
  links: ExperienceLink[];
};

export type Project = {
  description: string;
  iamge: string;
  link: string;
  technologies: string[];
  title: string;
};
