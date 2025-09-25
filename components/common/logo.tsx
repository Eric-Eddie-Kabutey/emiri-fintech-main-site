import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to homepage">
      <svg width="120" height="30" viewBox="0 0 137 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text fill="black" xmlSpace="preserve" style={{whiteSpace: "pre"}} fontFamily="monospace" fontSize="26" fontWeight="bold" letterSpacing="0.05em">
          <tspan x="0" y="25">KEDRUS</tspan>
        </text>
        <rect x="23" y="27" width="28" height="4" fill="#52D452"/>
        <rect x="91" y="10" width="8" height="4" fill="#52D452"/>
      </svg>
    </Link>
  );
};

export default Logo;