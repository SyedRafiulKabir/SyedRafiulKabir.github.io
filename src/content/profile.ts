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
  role: 'Software Engineer (.NET | Angular | ERP Integration)',
  location: 'Mirpur DOHS, Dhaka, Bangladesh',
  summary:
    'Software Engineer with 2+ years of experience building production-grade backend systems, enterprise integrations, and scalable web applications using ASP.NET Core, SQL Server, and Angular.',
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
