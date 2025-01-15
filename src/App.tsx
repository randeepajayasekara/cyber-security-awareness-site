import { Outlet, Link } from "react-router-dom";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


import { ModeToggle } from "./components/theme/mode-toggle";


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <header className="bg-white/25 dark:bg-black/10 backdrop-blur-sm fixed inset-x-0 top-0 z-20 text-black dark:text-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Crypticus Vigilance Lanka</span>
              <img
                alt=""
                src="https://i.postimg.cc/VdX7Phh8/logo.png"
                className="h-10 w-auto"
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
          <div className="hidden lg:flex lg:gap-x-12">
            
              <Link to="/">
                <span className="text-sm/6 font-semibold text-gray-900 dark:text-gray-100">
                  Home
                </span>
              </Link>
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
            </div>
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
                  src="https://i.postimg.cc/VdX7Phh8/logo.png"
                  className="h-10 w-auto z-50"
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

                <Link
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800/50"
                  >
                    Home
                  </Link>
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
                  <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-black dark:text-white">
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
