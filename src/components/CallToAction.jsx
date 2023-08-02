import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            It’s time to take control of your books. Buy our software so you can
            feel like you’re doing something productive.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Get 6 months free
          </Button>
        </div>
      </Container>
      <Container className="relative mt-6">
        <div className="mx-auto text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Resellers & Digital Signage Solution Providers
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          We offer white-labelled piSignage server which is based on the same code base and has the same features as that of pisignage.com. The logo, various artifacts and domain name are customized. We also customise the UI to suit your needs.More Details.
          </p>
          <Button href="/register" color="white" className="mt-10">
            GET IN TOUCH WITH US
          </Button>
        </div>
      </Container>
    </section>
  )
}
