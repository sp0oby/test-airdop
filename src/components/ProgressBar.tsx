import React, { useRef } from "react";

type ProgressBarProps = {
    total: number;
    current: number;
    className?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    const { total, current, className } = props;
    const completeness = (current / total) * 100;
    return (
        <div className={className}>
            <div className="w-full h-4 flex bg-white bg-opacity-20 relative">
                <div className="w-full bg-red-500 h-4 absolute" style={{ width: `${completeness}%` }} />
            </div>
        </div>
    );
};

export default ProgressBar;
