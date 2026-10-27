import { PropsWithChildren } from "react";

interface TNestedBorderedContainer extends PropsWithChildren {
    className?: string
}

export default function NestedBorderedContainer({ children, className = '' }: TNestedBorderedContainer) {
    return (
        <div className="bg-[#0B0B0B] border border-[#1C1C1E] rounded-[10px] p-3">
            <div className={`flex flex-col gap-3 py-3 bg-[#171718] rounded-lg ${className}`}>
                {children}
            </div>
        </div>
    )
}
