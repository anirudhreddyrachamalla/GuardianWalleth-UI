import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {useTheme} from 'next-themes'
import Image from 'next/image';
import Illustration1 from '../public/undraw_bitcoin_p2p_re_1xqa (1).svg';
import Illustration2 from '../public/undraw_fingerprint_re_uf3f.svg';
import Illustration3 from '../public/undraw_secure_server_re_8wsq.svg';
import Link from 'next/link';import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Create Wallet', href: '#' },
  { name: 'Connect Wallet', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Approve TXNS', href: '#' },
]
const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: ArrowPathIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: LifebuoyIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Home({parentState}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {theme, setTheme} = useTheme()

  return (
    <>
    <div className="isolate">
    
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="flex gap-x-8 mx-16 py-16 sm:py-48 lg:py-32">

            <div className="text-left w-150">
              <h1 className="text-7xl font-bold tracking-tight text-gray-900 dark:text-blue">Guardian-Walleth
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-white">
                A Wallet which provides security through both social recovery and multi-sig. Social recovery feature comes to rescue when a user loses his/her private keys. With the help of guardians, owner of the wallet can be changed from previosuly compramised EOA to a new EOA. Multi-sig provides Multi-factor authentication for every transaction. This prevents hackers doing transaction from the wallet.
              </p>
            <div className='flex gap-x-4 '>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href='/create'
                  className="rounded-md bg-blue px-3.5 py-1.5 text-xl font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create Wallet
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/dashboard"
                  className="rounded-md bg-blue px-3.5 py-1.5 text-xl font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Connect Wallet
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/transactions"
                  className="rounded-md bg-blue px-3.5 py-1.5 text-xl font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Approve TXNS
                </Link>
              </div>
              </div>
            </div>
            <div className='w-144'>
  <Image src={Illustration1}/>
</div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg
              className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#9089FC" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div class="flex justify-center gap-x-12 text-white text-center p-40">
      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-blue xl:aspect-w-7 xl:aspect-h-8 p-8">
          <Image src={Illustration3} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-98 w-full object-cover object-center group-hover:opacity-75" />
        
        <h2 class="mt-8 mb-8 text-5xl font-bold">Social Recovery?</h2>
        <p class="mt-1 text-2xl font-medium">The Social Recovery feature comes to rescue when a user loses his/her private keys. With the help of guardians.</p>
        </div>
      </a>

      <a href="#" class="group">
        <div class="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-blue xl:aspect-w-7 xl:aspect-h-8 p-8">
          <Image src={Illustration2}  class="h-72 w-full object-cover object-center group-hover:opacity-75" />
        <h3 class="mt-8 mb-8 text-5xl font-bold" >Multi-Sig</h3>
        <p class="mt-1 text-2xl font-medium">Multi-Sig provides multi-factor authentication for every transaction. This prevents hackers from doing transactions from the wallet.</p>
        </div>
      </a>
    </div>
      </main>
     
    </div>
    </>
  )
}
