import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "../components";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Olaegbe's Portfolio",
  description: 'Passionate frontend developer dedicated to transforming concepts into visually appealing and seamlessly functional websites.',
  keywords: ['Olaegbe Abdul-Rahmon', 'youngtechie'],
  creator: 'Olaegbe Abdul-Rahmon',
  openGraph: {
    type: 'website',
    url: 'https://oa-3dportfolio.netlify.app/',
    title: "Olaegbe's Portfolio",
    description: 'Passionate frontend developer dedicated to transforming concepts into visually appealing and seamlessly functional websites.',
    images: '/ogImage.png'
  },
  icons: {
    icon: [{ url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' }]
  }
}

export default function Home() {
  return (
    <main className="relative z-0 bg-primary overflow-x-hidden">
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>

      <About />
      <Tech />
      <Experience />
      <Works />
      <Feedbacks />
      <div className='relative z-0'>
        <Contact />
      </div>
    </main>
  )
}
