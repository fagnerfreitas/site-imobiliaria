import { url } from 'inspector';
import styles from './styles.module.scss';

function CardBairros({ name, img }) {
    return (

        <div className={styles.cardBairro} style={{ backgroundImage: `url(${img})` }}>
            <h3>{name}</h3>
        </div>

    )
}

export const DestaqueBairros = () => {
    return (
        <div className={styles.container}>
            <h2>Bairros em destaque</h2>
            <div className={styles.containerGrid}>
                <CardBairros name="Nome Bairro 1" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/itaipava.jpg" />
                <CardBairros name="Nome Bairro 2" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/alto.jpg" />
                <CardBairros name="Nome Bairro 3" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/lucas.jpg" />
                <CardBairros name="Nome Bairro 4" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/pq-imbui.jpg" />
                <CardBairros name="Nome Bairro 5" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/pq-imbui.jpg" />

                <CardBairros name="Nome Bairro 6" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/agrioes.jpg" />
                <CardBairros name="Nome Bairro 7" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/centro.jpg" />
                <CardBairros name="Nome Bairro 8" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/comary.jpg" />
                <CardBairros name="Nome Bairro 9" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/nunes.jpg" />
                <CardBairros name="Nome Bairro 10" img="https://premium.portalunsoft.com.br/assets/img/home/bairros/comary.jpg" />
            </div>
        </div>
    )
}