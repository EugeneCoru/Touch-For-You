


export interface BurgerButtonProps{
    isActive?: boolean;
    color?: string;
    size?: number;
    menuContent?: React.ReactNode;
    onClick?: () => void;
    func?: () => void;
}