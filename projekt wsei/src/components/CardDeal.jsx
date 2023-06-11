import { card } from '../assets';
import styles,  { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Aenean dapibus massa non interdum cursus.
      <br className="sm:block hidden"/>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>In commodo auctor sapien in ornare.
       Vivamus sed lectus tincidunt, scelerisque felis sed, vestibulum neque. Donec efficitur sapien id tortor gravida convallis.</p>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]"/>

    </div>

  </section>

)

export default CardDeal