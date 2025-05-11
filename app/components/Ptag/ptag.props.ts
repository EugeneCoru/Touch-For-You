import { DetailedHTMLProps, HTMLAttributes } from "react";


export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   children?: React.ReactNode;
   font?: 'extra-light' | 'light' | 'regular' | 'medium';
   size?: 'small' | 'medium' | 'large';
   className?: string;
   

}

