import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => (
  
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row
    flex-col mb-8 w-full`}>
      <div>
        <img
        src={logo}
        alt="hoobank"
        className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
        Cras et congue justo. Sed non ultrices tellus
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row
      justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) =>(
        <div key={footerLink.key} className="flex flex-col 
        ss:my-0 my-4 min-w-[150px]">
          <h4 className='font-poppins font-medium text-[18px]
           leading-[27px] text-white'>
            {footerLink.title}
          </h4>
          <ul>
            {footerLink.links.map((link, index) => (
              <li key={link.name}
                className={`font-poppins font-normal text-[16px]
                leading-[24px] text-dimWhite
                hover:text-secondary cursor-pointer`}>
                  {link.name}
                </li>
            ))}
          </ul>

        
        
        </div>
        ))}

      </div>
    </div>
  </section>
)

export default Footer