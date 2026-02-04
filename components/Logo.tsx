import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10" }) => {
  const imageUrl = "https://res.cloudinary.com/dsrlyil1l/image/upload/v1770021504/Logo_ITA_No_BG_edit2_lcuxvh.png";
  
  return (
    <img 
      src={imageUrl}
      alt="PT Indah Tjandra Abadi Logo"
      className={`${className} object-contain`}
    />
  );
};

export default Logo;