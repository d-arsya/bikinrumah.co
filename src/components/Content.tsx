type ContentProps = {
    img: string,
    title: string,
    desc: string,
}
export default function Content({ img, title, desc }: ContentProps) {
    return (
        <div
            className="p-1 lg:p-5 my-6 flex items-start w-full lg:w-1/2 gap-6"
        >
            <img
                src={img}
                alt="icon"
                className="w-16 rounded-full"
            />
            <div className="text-left">
                <h3 className="text-black font-extrabold text-xl mb-3">{title}</h3>
                <h4 className="text-gray-400 text-lg">{desc}</h4>
            </div>
        </div>
    )
}