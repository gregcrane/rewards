import BannerMarquee from '../banner-marquee/banner-marquee.component';
import image from '../../assets/images/wd.jpeg';

const Footer = () => {
  return (
    <div className="bg-background-dark">
      <BannerMarquee>
        <div className="flex items-center my-5">
          <img className="max-w-[100px] mx-4 rounded-lg" src={image} alt="William Defoe1" />
          <span className="text-primary">AND THERE WAS A FIREFIGHT</span>
          <img className="max-w-[100px] mx-4 rounded-lg" src={image} alt="William Defoe2" />
        </div>
      </BannerMarquee>
    </div>
  );
};

export default Footer;
