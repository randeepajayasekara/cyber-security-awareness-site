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

{/*
    text,
    duration,
  }: {
    text: string;
    duration?: number;
    automatic?: boolean;
  }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  
    useEffect(() => {
      if (svgRef.current && cursor.x !== null && cursor.y !== null) {
        const svgRect = svgRef.current.getBoundingClientRect();
        const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
        const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
        setMaskPosition({
          cx: `${cxPercentage}%`,
          cy: `${cyPercentage}%`,
        });
      }
    }, [cursor]);
  */}