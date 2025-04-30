import * as React from "react"

import { cn } from "@/lib/utils"

interface CardProps extends React.ComponentProps<"div"> {
  rotate?: boolean;
  rotateInfo?: React.ReactNode;
}

function Card({ className, rotate, rotateInfo, children, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(
        "group h-full w-full [perspective:800px]", // Perspective on parent
        className
      )}
      {...props}
    >
      <div className={cn(
        "h-full w-full transition-transform duration-300 ease-in-out",
        "[transform-style:preserve-3d]", // Transform style here
        "shadow-lg hover:shadow-xl",
        "rounded-lg",
        "bg-white",
        rotate ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)_translateZ(20px)]"
      )}>
        {/* Front Content */}
        <div className="[backface-visibility:hidden] absolute inset-0">
          {children}
        </div>
        
        {/* Back Content */}
        <div className="[backface-visibility:hidden] absolute inset-0 [transform:rotateY(180deg)]">
          {rotateInfo}
        </div>
      </div>
    </div>
  );
}


export { Card }
