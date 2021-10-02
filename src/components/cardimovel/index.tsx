
import styles from './styles.module.scss';

export const CardImovel = ({key,imovel}) => {
    return (
        <a href="#" className={styles.card}>
            <div className={styles.img} style={{ backgroundImage:`url(${imovel.urlfotoprincipal})`}}>
            </div>
            <div className={styles.content}>
                <h2>{imovel.titulo}</h2>
                <div className={styles.containerIcons}>
                    <span>{imovel.numeroquartos} Quarto</span>
                    <span>{imovel.numerobanhos} Banheiros</span>
                    <span>{imovel.numerosuite} Suite</span>
                    <span>{imovel.numerovagas} Vaga</span>
                </div>
            </div>
        </a>
    )
}