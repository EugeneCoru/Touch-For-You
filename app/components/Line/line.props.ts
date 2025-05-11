import { CSSProperties } from "react";


export interface NeonPathProps extends React.SVGProps<SVGPolygonElement> {
    path: string;
    strokeWidth?: number;
    className?: string;
    style?: CSSProperties;
    duration?: number;
    delay?: number;
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    glowIntensity?: number;
  }