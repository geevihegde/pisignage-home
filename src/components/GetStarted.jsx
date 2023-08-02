import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import plDetails from '@/images/screenshots/playlist_details.png'
import manageImg from '@/images/screenshots/players.png'
import assetsDetails from '@/images/screenshots/assets.png'
import grpDetails from '@/images/screenshots/group_details.png'
import { useId } from 'react'

import playlists from '@/images/screenshots/playlist_details.png'
import player from '@/images/screenshots/players.png'

const features = [
  {
    name: 'Assemble the Player',
    description:
      `Purchase and assembleRaspberry Pi kit.Download piSignage image and prepare SD card as per the instuctions at github.`,
    image: player,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          	<svg id={id} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  				<path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
			</svg>
        </>
      )
    },
  },
  {
    name:
      'Sign up for free',
    description:
      'By signing up at pisignage.com, you can get started immediately and manage players from anywhere.',
    image: playlists,
    icon: function InventoryIcon() {
      return (
        <>
         <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
 			<path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
		</svg>
        </>
      )
    },
  },
  {
    name:
      'Upload, Arrange & Deploy',
    description:
      'Register the player at the server. Upload files, create a playlist and deploy to the group. Watch the the playlist on TV!',
    image: grpDetails,
    icon: function ContactsIcon() {
      return (
        <>
        	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
  				<path fillRule="evenodd" d="M10.5 3.75a6 6 0 00-5.98 6.496A5.25 5.25 0 006.75 20.25H18a4.5 4.5 0 002.206-8.423 3.75 3.75 0 00-4.133-4.303A6.001 6.001 0 0010.5 3.75zm2.03 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v4.94a.75.75 0 001.5 0v-4.94l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
			</svg>
        </>
      )
    },
  },
]

function Feature({ feature, className, ...props }) {
  return (
    <div
      className='opacity-100'
      {...props}
    >
      <div
        className='w-9 rounded-lg bg-transparent'
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      
      <h3 className="mt-2 font-display text-xl text-white">
        {feature.name}
      </h3>
      <p className="mt-4 text-sm text-white">{feature.description}</p>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" />
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                className="relative"
              />
            ))}
          </Tab.List>
        </>
      )}
    </Tab.Group>
  )
}

export function GetStarted() {


  return (
    <section
      id="get started"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Get started
          </h2>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
	  
    </section>
  )
}
