

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
   className?: string;
   children: React.ReactNode;
   font: 'extra-light' | 'medium';
   color: 'blue' | 'pink' | 'neon';
   link?: string;
   target?: string;
   targ?: boolean;
}