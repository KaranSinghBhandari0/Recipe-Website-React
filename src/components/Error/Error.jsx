import { useState, useEffect } from 'react';
import styles from './Error.module.css'

export default function Error({ dish }) {
    const [showNoDishMessage, setShowNoDishMessage] = useState(false);

    useEffect(() => {
        if (dish !== "") {
            const timer = setTimeout(() => {
                setShowNoDishMessage(true);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            setShowNoDishMessage(false);
        }
    }, [dish]);

    return (
        <div className={styles.errorDiv}>
            {dish === "" &&
                <div>
                    <img src="/images/HungryEmoji.avif" alt="Hungry Emoji" />
                    <h3>Try searching out some Dishes</h3>
                </div>
            }
            {dish !== "" && showNoDishMessage &&
                <div>
                    <img src="/images/thinking.png" alt="Thinking" />
                    <h3>No dish found for {dish}</h3>
                    <p>There are no dishes that match your current filters. Try removing some of them to get better results.</p>
                </div>
            }
        </div>
    );
}
