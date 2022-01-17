import React from "react";

export type LogoProps = {
    className?: string;
    variant?: "dark" | "light";
};

const Logo: React.FC<LogoProps> = ({ className, variant }) => {
    return (
        <div className={className + " font-display"}>
            <span className={variant == "dark" ? "text-main-dark" : "text-main-light logoshadow1"}>
                HI
            </span>
            <span> </span>
            <span className="text-main-contrast logoshadow2">TONY</span>
        </div>
    );
};

export default Logo;
