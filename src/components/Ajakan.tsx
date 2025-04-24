export default function Ajakan({ title, img }: { title: string, img: string }) {
    return (
        <div className="m-5 w-full md:w-1/5 bg-white text-center p-4 rounded-md">
            <h4 className="text-black text-sm">{title}</h4>
            <img className="rounded-md aspect-square bg-clip-content mt-3" src={img} alt="" />
        </div>
    )
}