import { Link } from 'react-router-dom';

export function SiteFooter() {
    return (
      <footer className="border-grid border-t py-6 md:px-8 md:py-0 mt-8 z-40">
        <div className="container-wrapper">
          <div className="container py-4">
            <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left text-gray-800 dark:text-white">
              Built by the team members of{" "}
              <Link
                to="https://royalcollege.lk/"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Royal College
              </Link>
              . For {" "}
              <Link
                to="https://en.wikipedia.org/wiki/Devi_Balika_Vidyalaya"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                INTELLECTA’25
              </Link>
              .
            </div>
          </div>
        </div>
      </footer>
    )
  }
