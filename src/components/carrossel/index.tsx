
import styles from './styles.module.scss';

import { CardImovel } from "../cardimovel";
import { useState } from 'react';

export const Carrossel = ({ imoveis }) => {

    const [scrollX, setScollX] = useState(0);

   
    const handlerLefArrow = () => {

        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }

        setScollX(x);
    }

    const handlerRightArrow = () => {
        let x = scrollX - Math.round(320);

        let listW = imoveis.length * 321;

        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW);
        }

        setScollX(x)
    }

    return (
        <>
            <div className={styles.containerCarrossel}>
                <h2>Oportunidades em destaque</h2>
                <div className={styles.containerAreaCarrossel}>
                    <div className={styles.scroll} style={{ marginLeft: scrollX }}>
                        {imoveis.map((imovel,key)=>(
                            <CardImovel key={key} imovel={imovel} />
                        ))}
                    </div>
                </div>
                <div className={styles.controls}>
                    <div onClick={handlerLefArrow} className={styles.iconCircle}>
                        <span className="material-icons"> chevron_left</span>
                    </div>
                    <div onClick={handlerRightArrow} className={styles.iconCircle}>
                        <span className="material-icons"> chevron_right </span>
                    </div>
                </div>
            </div>

        </>
    )

}