type MarqueeProps = {
  children: JSX.Element;
};

const BannerMarquee = ({ children }: MarqueeProps) => {
  return (
    <div className='truncate h-[70px] relative'>
      <div className='animate-marquee absolute text-2xl p-2'>{children}</div>
    </div>
  );
};

export default BannerMarquee;
