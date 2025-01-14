import { Outlet, Link } from "react-router-dom";
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  MegaphoneIcon,
  Bars3Icon,
  RocketLaunchIcon,
  GlobeAsiaAustraliaIcon,
  WindowIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  UserGroupIcon,
  EnvelopeIcon,
} from "@heroicons/react/20/solid";

import { ModeToggle } from "./components/theme/mode-toggle";

const products = [
  {
    name: "Experience",
    description: "Navigate the Digital World Confidently.",
    href: "#",
    icon: RocketLaunchIcon,
  },
  {
    name: "Problem Statement",
    description: "Explore growing cybersecurity threats faced by Sri Lankans.",
    href: "#",
    icon: GlobeAsiaAustraliaIcon,
  },
  {
    name: "Overview",
    description: "Quick summary of what users can expect to find on the website",
    href: "#",
    icon: WindowIcon,
  },
  {
    name: "Call to Action",
    description: "Explore and Access Resources",
    href: "#",
    icon: MegaphoneIcon,
  },
];
const callsToAction = [
  { name: "Feedback", href: "#", icon: EnvelopeIcon },
  { name: "About sUs", href: "#", icon: UserGroupIcon },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white/25 dark:bg-black/10 backdrop-blur-sm fixed inset-x-0 top-0 lg:z-20 text-black dark:text-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Crypticus Vigilance Lanka</span>
              <img
                alt=""
                src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/shield-ok-icon.png"
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                <Link to="/">
                  Home
                </Link>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-zinc-950 ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="size-6 text-gray-600 group-hover:text-indigo-600"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 dark:text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-zinc-900">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 dark:text-gray-200 hover:bg-gray-100"
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-5 flex-none text-gray-400"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            <Link to="/security-tips">
              <span className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                Tips
              </span>
            </Link>
            <Link to="/awareness-local">
              <span className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                Aware
              </span>
            </Link>
            <Link to="/resource-tools">
              <span className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                Resources
              </span>
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <ModeToggle />
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white/30 dark:bg-black/10 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Crypticus Vigilance Lanka</span>
                <img
                  alt=""
                  src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/shield-ok-icon.png"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                      <Link to="/">
                        Home
                      </Link>
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products, ...callsToAction].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                  <Link
                    to="/security-tips"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
                  >
                    Tips
                  </Link>
                  <Link
                    to="/awareness-local"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
                  >
                    Aware
                  </Link>
                  <Link
                    to="/resource-tools"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
                  >
                    Resources
                  </Link>
                </div>
                <div className="py-6">
                  <div
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-black dark:text-white"
                  >
                    <ModeToggle />
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
