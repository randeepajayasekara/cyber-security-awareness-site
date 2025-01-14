import { TextHoverEffect } from "@/components/animations/text-hover-effect"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black h-screen">
      <div className="h-screen flex flex-col items-center justify-center">
        <TextHoverEffect text="404" />
        <Button variant="outline" className="text-black dark:text-white">You have Reached an Unknown Page</Button>
      </div>
    </div>
  )
}