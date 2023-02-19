import { Fragment} from 'react'
import {useTheme} from 'next-themes'
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
import Link from 'next/link'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'

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
    name: 'About',
    description: 'Get know about GuardianWalleth better!',
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
export default function Header({updateParentState, parentState}){
  const {theme, setTheme} = useTheme()
  const router = useRouter();
  async function logout(){
    updateParentState({loggedIn: false, user: "", provider: null});

  }

  async function connectToMetaMask(event) {
    event.preventDefault();
      const accounts = await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{
            eth_accounts: {}
        }]
    }).then(() => ethereum.request({
        method: 'eth_requestAccounts'
    }))
    
    router.push(event.target.href)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const account = accounts[0]
    updateParentState({loggedIn: true, user: accounts[0], provider: provider});

  }

  function notLoggedIn(){
      return(
  <Popover className="fixed w-full z-10 h-24 bg-white dark:bg-black">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span className="sr-only">Guardian WallETH</span>
          {/* <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          /> */}
          <span className="text-lg font-semibold">Guardian WallETH</span>
        </a>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md dark:bg-black bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden space-x-10 md:flex">
        <a href="/transactions" className="text-base font-medium text-gray-500 hover:text-blue">
          Approve TXNS
        </a>
  
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                )}
              >
                <span className='hover:text-blue '>FAQs</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
  
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white dark:bg-black dark:text-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black px-5 py-6 sm:gap-8 sm:p-8">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-blue">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <a href="/create" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue">
          Create Wallet
        </a>
        <Link
          href="/dashboard"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue"
          onClick={connectToMetaMask}
        >Connect Wallet</Link>
        <button
  aria-label="Toggle Dark Mode"
  type="button"
  className="p-3 h-12 w-12 order-2 md:order-3"
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  ></button>
      </div>
    </div>
  </div>
  
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                  <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="space-y-6 py-6 px-5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
              Pricing
            </a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
              Docs
            </a>
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-blue hover:text-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue"
            >
              Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
              <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="p-3 h-12 w-12 order-2 md:order-3"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >Dark</button>
            </p>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
  </Popover>  
      )
  }
  
  function loggedIn(){
      return(
        
  <Popover className="relative bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black">
  <div className="mx-auto max-w-7xl px-6">
    <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div className="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
        </a>
      </div>
      <div className="-my-2 -mr-2 md:hidden">
        <Popover.Button className="inline-flex items-center justify-center rounded-md dark:bg-black bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span className="sr-only">Open menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>
      <Popover.Group as="nav" className="hidden space-x-10 md:flex">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={classNames(
                  open ? 'text-gray-900' : 'text-gray-500',
                  'group inline-flex items-center rounded-md bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                )}
              >
                <span className='hover:text-blue '>FAQs</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? 'text-gray-600' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-gray-500'
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
  
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="relative grid gap-6 bg-white dark:bg-black dark:text-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black px-5 py-6 sm:gap-8 sm:p-8">
                      {resources.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                        >
                          <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                          <div className="ml-4">
                            <p className="text-base font-medium text-blue">{item.name}</p>
                            <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>
      <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        <p className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-blue">
          {parentState.user}
        </p>
        <Link
          href="/"
          className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue"
          onClick={logout}
        >LogOut</Link>
        <button
  aria-label="Toggle Dark Mode"
  type="button"
  className="p-3 h-12 w-12 order-2 md:order-3"
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  ></button>
      </div>
    </div>
  </div>
  
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
      <div className="divide-y-2 divide-gray-50 rounded-lg bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <div>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white dark:bg-black dark:bg-black dark:bg-black dark:bg-black dark:bg-black p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8">
              {solutions.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                >
                  <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                  <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="space-y-6 py-6 px-5">
          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
              Pricing
            </a>
  
            <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
              Docs
            </a>
            {resources.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-blue hover:text-gray-700"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-md border border-transparent bg-blue px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue"
            >
              Sign up
            </a>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
              Existing customer?{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Sign in
              </a>
              <button
    aria-label="Toggle Dark Mode"
    type="button"
    className="p-3 h-12 w-12 order-2 md:order-3"
    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  >Dark</button>
            </p>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Transition>
  </Popover> 
   
      )
  }

  return( parentState.loggedIn ? loggedIn() : notLoggedIn());

}

