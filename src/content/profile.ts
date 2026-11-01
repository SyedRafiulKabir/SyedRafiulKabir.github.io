export type Profile = {
  name: string
  role: string
  location: string
  summary: string
  contact: {
    email: string
    linkedin: string
    github: string
  }
  photo: {
    src: string
    alt: string
  }
}

export const profile: Profile = {
  name: 'Syed Rafiul Kabir',
  role: 'Software Engineer (.NET | nopCommerce | AI-DLC)',
  location: 'Dhaka, Bangladesh',
  summary:
    'Software Engineer with 3+ years of experience engineering high-performance e-commerce platforms, enterprise CMS solutions, and scalable backend integrations in the .NET ecosystem. Core expertise in nopCommerce (4.60–4.90) plugin architecture, ERP & accounting integrations, and EPiServer/Optimizely CMS 11 platforms. A leading practitioner of AI-enabled engineering and AI-DLC (AI-Driven Software Development Life Cycle)—leveraging spec-driven development (SDD), structured codebase context, and AI workflows to accelerate product delivery, elevate code quality, and help engineering teams successfully adopt and master modern AI-DLC practices.',
  contact: {
    email: 'mailto:rafiulkabir01.rucse@gmail.com',
    linkedin: 'https://www.linkedin.com/in/syedrafiulkabir/',
    github: 'https://github.com/SyedRafiulKabir',
  },
  photo: {
    src: `${import.meta.env.BASE_URL}${import.meta.env.VITE_PROFILE_PHOTO || 'shanto.png'}`,
    alt: 'Portrait of Syed Rafiul Kabir',
  },
}
