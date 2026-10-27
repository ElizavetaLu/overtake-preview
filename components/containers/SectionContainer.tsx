import { PropsWithChildren } from "react";

export default function SectionContainer({ children }: PropsWithChildren) {
    return (
        <section className="px-2 md:px-5 flex flex-col gap-8">{children}</section>
    )
}
