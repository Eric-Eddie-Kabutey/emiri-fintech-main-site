import React from 'react';

const EmiriLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 400 100" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <text 
        x="50%" 
        y="50%" 
        dominantBaseline="central" 
        textAnchor="middle" 
        fontSize="120" 
        fontWeight="900" 
        letterSpacing="0.1em"
        fontFamily="Arial Black, Arial, sans-serif"
      >
        EMIRI
      </text>
    </svg>
  );
};

export default EmiriLogo;