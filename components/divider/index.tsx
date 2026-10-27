export default function Divider({ className = '' }) {
    return (
        <div className={`w-full h-px bg-linear-to-r from-[#171718] via-[#444444] to-[#171718] ${className}`} />
    )
}
