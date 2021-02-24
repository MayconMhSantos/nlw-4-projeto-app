import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68924739?s=400&u=714afc3027e8278db96bc4a0ccd7853bee076626&v=4" alt="Perfil Maycon Santos"/>
            <div>
                <strong>Maycon Santos</strong>
                <p>
                <img src="icons/level.svg" alt="level"/>
                Level 1</p>
            </div>
        </div>
    )
}