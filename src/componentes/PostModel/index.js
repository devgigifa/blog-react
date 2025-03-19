import styles from './PostModel.module.css';

export default function PostModel({ children, fotoCapa, title }) {
    return (
        <article className={styles.postModelContainer}>
            <div
                className={styles.fotoCapa}
                style={{ backgroundImage: `url(${fotoCapa})` }}
            ></div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}