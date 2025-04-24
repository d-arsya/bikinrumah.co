type TestimoniProps = {
    text: string,
    author: string,
    position: string,
}
export default function Testimoni({
    text, author, position
}: TestimoniProps) {
    return (
        <>
            <div className="text-center mt-6">
                <img src="assets/kutip.png" alt="kutip" className="w-8 m-auto" />
                <p className="mt-2 text-gray-300">
                    {text}
                </p>
                <br />
                <h4 className="font-bold">{author}</h4>
                <h5 className="mt-2 text-gray-300"><i>{position}</i></h5>
            </div>
        </>
    )
}