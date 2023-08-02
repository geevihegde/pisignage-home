import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { GetStarted } from '@/components/GetStarted'
import { UseCases } from '@/components/UseCases'

export default function Home() {
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <GetStarted />
      <UseCases />
      <CallToAction />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  )
}
