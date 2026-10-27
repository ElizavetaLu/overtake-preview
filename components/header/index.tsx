export default function Header() {
    return (
        <header className="px-5 fixed py-4 top-0 right-0 left-0 grid grid-cols-2 md:grid-cols-3 items-center">
            <div className="flex justify-start">
                <a href="" className="font-wallpoet text-primary text-6xl leading-10">
                    O
                </a>
            </div>

            <div className="hidden md:flex justify-center gap-14 capitalize">
                <a href="" className="text-[clamp(1rem,0.9063rem+0.47vw,1.1875rem)]">home</a>
                <a href="" className="text-[clamp(1rem,0.9063rem+0.47vw,1.1875rem)]">features</a>
                <a href="" className="text-[clamp(1rem,0.9063rem+0.47vw,1.1875rem)]">about</a>
            </div>

            <div className="flex justify-end">
                <a href="" className="hidden md:block border rounded-full px-12 py-0.75 capitalize text-nowrap text-[clamp(1rem,0.9063rem+0.47vw,1.1875rem)]">contact us</a>

                <button className="relative group md:hidden size-6">
                    <span className="absolute top-0 left-0 size-1.25 bg-white rounded group-hover:w-9 duration-300" />
                    <span className="absolute top-0 right-0 size-1.25 bg-white rounded group-hover:w-9 duration-300" />
                    <span className="absolute bottom-0 left-0 size-1.25 bg-white rounded group-hover:w-9 duration-300" />
                    <span className="absolute bottom-0 right-0 size-1.25 bg-white rounded group-hover:w-9 duration-300" />
                </button>
            </div>


        </header>
    )
}
