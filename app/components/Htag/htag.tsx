import { JSX } from "react"
import { HtagProps } from "./htag.props"
import classNames from "classnames";
import styles from "./htag.module.scss"





export const Htag = ({children, size, className, ...props}: HtagProps): JSX.Element => {
    
        switch (size) {
            case 'large':
                return <h1 className={classNames(styles.htag,className, {
                    [styles.large]: true
                })} {...props}>{children}</h1>;
            case 'medium':
                return <h2 className={classNames(styles.htag,className, {
                    [styles.medium]: true
                })} {...props}>{children}</h2>;
            case 'small':
                return <h3 className={classNames(styles.htag,className, {
                    [styles.small]: true
                })} {...props}>{children}</h3>;
            default:
                return <></>;
        }

}
