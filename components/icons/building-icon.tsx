import React from 'react';
const BuildingIcon = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 21V10.0833C4 9.53681 4.21071 9.01255 4.58579 8.63748L10.5858 2.63748C11.3668 1.85643 12.6332 1.85643 13.4142 2.63748L19.4142 8.63748C19.7893 9.01255 20 9.53681 20 10.0833V21H14V15H10V21H4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default BuildingIcon;