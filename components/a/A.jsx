import Link from 'next/link';
import styles from './A.module.css'

export default function A(props) {
    return (
        <Link href={props.href}>
            <a className={`${styles.a} ${props.className}`} style={props.style}>{props.children}</a>
        </Link>
    )
}
