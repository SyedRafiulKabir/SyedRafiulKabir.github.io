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
  role: 'Software Engineer (.NET | Optimizely CMS | nopCommerce)',
  location: 'Dhaka, Bangladesh',
  summary:
    'Software Engineer with 3+ years of experience building scalable backend systems and enterprise integrations in the .NET ecosystem. Specialized in ASP.NET Core, SQL Server, EPiServer/Optimizely CMS, and nopCommerce, with hands-on delivery of OAuth2, OData, and third-party API integrations for e-commerce, CMS, and ERP platforms. Proven ability to design maintainable architectures, optimize large datasets, and ship production-ready software in Agile, distributed teams.',
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
