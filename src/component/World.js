// 각 컴포넌트에 사용할 css를 만들어라
import styles from "./World.module.css"
export default function World() {
    return (
     <>
    <h2 className={styles.fg}>World</h2>
    <div className={styles.box}></div>
    </>
    )
    
}   