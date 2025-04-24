import Testimoni from "./Testimoni"

const testimonis = [
    {
        text: '“Alhamdulillah pengerjaanya bagus dan detail sesuai dengan desain, tehnisi lapangan cukup responsif, gesit dan ramah. Respon komplain cepat juga, pokoknya puas dengan hasil kerjanya.. Tq bikinrumah.co, semoga sukses selalu..😊"',
        author: "Aliya Kartika",
        position: "Admedika",
    },
    {
        text: '"Trimakasih bikinrumah.co hasilnya sangat bagus, rapi, dan sesuai harapan."',
        author: "Fernandofd",
        position: "Editor CTIA",
    },
    {
        text: '“Puas banget sama hasilnya. Udah pengerjaanya tepat waktu, tehnisinya juga profesional, free desain pula hehe.. good job bikinrumah.co mantaaabb…"',
        author: "Putra Arifin",
        position: "Commercial Manager",
    },
    {
        text: '“Gak nyangka setelah direnovasi rumah saya jadi sebagus ini, detail halus, pekerjaan cepat karena tukangnya profesional. Pokoknya manteb deh buat bikinrumah.co 👍👍😊"',
        author: "Rahayu Diansyah",
        position: "Wirausaha Baju Muslim",
    },
]

export default function TestimoniSection() {
    return (
        <div className="w-full py-20 md:py-32 px-8 md:px-32 justify-center bg-oren-muda">
            <div className="flex flex-col bg-white rounded-md pb-32">
                <div className="w-full h-6 rounded-t-md bg-kuning"></div>
                <div className="w-full bg-white px-2 md:px-36">
                    {testimonis.map((e, i) =>
                        <Testimoni key={i} text={e.text} author={e.author} position={e.position} />
                    )}
                </div>
            </div>
        </div>
    );
};
