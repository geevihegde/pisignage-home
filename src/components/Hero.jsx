import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoPerisher from '@/images/logos/perisher.jpeg'
import logoMinarch from '@/images/logos/minnesota_orchestra.jpg'
import logoAus from '@/images/logos/australian_hearing.png'
import logoSatavsion from '@/images/logos/satavision.png'
import logoInsiderTv from '@/images/logos/insidertv.png'
import logoWctel from '@/images/logos/wctel.net.png'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Do-it-yourself{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Signage</span>
        </span>{' '}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl sm:text-lg tracking-tight text-slate-700">
       Build Signage solutions using Raspberry Pi, Android TV and more
       {<br />}
       Used by thousands since 2014 - Scalable, lean and reliable
      </p>
      
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">SIGN UP FOR FREE</Button>
        <Button
          href="https://www.youtube.com/watch?v=P7qm4E1dwDw"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>
      <p className="mx-auto max-w-2xl italic tracking-tight sm:text-md text-sm font-semibold mt-2 text-blue-600">
      2 player licenses and subscription free for lifetime
      </p>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-700">
        Numbers that make us proud </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'managed players', count:'90950', message:`Total players added so far`, subText:`(managed and on-premises)` },
              { name: 'last 30 days', count:'1457', message:`Players added in last 30 days`,subText:`(managed and on-premises)` },
              { name: 'online', count:'23308', message:`Players online now`,subText:`(reporting at pisignage.com)` },
            ]
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="">
                    {/*<Image src={company.logo} alt={company.name} unoptimized />*/}
                    <h1 className='mx-auto max-w-4xl font-display text-xl font-medium tracking-tight text-slate-800 sm:text-xl'>{company.count}</h1> {/** Added by geevi */}
                    <p className='mx-auto mt-1 max-w-2xl tracking-tight text-sm text-slate-700'>{company.message}</p> {/** Added by geevi */}
                    <p className='mx-auto max-w-2xl tracking-tight text-sm text-slate-700'>{company.subText}</p> {/** Added by geevi */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
