import React from "react";
import Link from "next/link";

type ViewMushroomProps = {
    tokenId: string;
    className?: string;
};

const ViewMushroom: React.FC<ViewMushroomProps> = (props) => {
    const { tokenId, className } = props;
    return props ? (
        <Link href={`https://nft-test-server.herokuapp.com/view/${tokenId}`}>
            <div className={"block " + className}>
                <img src={`https://nft-test-server.herokuapp.com/view/${tokenId}`} alt="" />
                <div className="flex items-center mt-2 justify-between">
                    <span className="text-white font-display text-center text-xl w-full block">
                        {" "}
                        {`#${tokenId}`.toUpperCase()}
                    </span>
                </div>
            </div>
        </Link>
    ) : null;
};

export default ViewMushroom;