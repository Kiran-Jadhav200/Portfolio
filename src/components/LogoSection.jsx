import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  if (icon.type === "image") {
    return (
      <div className="flex-none flex-center marquee-item">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    );
  } else if (icon.type === "icon" && icon.icon) {
    const IconComponent = icon.icon;
    return (
      <div className="flex-none flex-center marquee-item">
        <IconComponent size={64} title={icon.name} color="#686878" />
      </div>
    );
  }
  return null;
};

const LogoShowcase = () => (
  <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}

        {logoIconsList.map((icon, index) => (
          <LogoIcon key={index} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default LogoShowcase;
