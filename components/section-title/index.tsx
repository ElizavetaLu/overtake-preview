
export default function SectionTitle({ title = '' }) {
    return (
        <div className="flex justify-center items-center gap-8">
            <span className="h-px w-10 md:w-16 bg-[#959595] rounded" />
            <h3 className="font-audiowide uppercase tracking-wider text-nowrap">{title}</h3>
            <span className="h-px w-10 md:w-16 bg-[#959595] rounded" />
        </div>
    )
}
