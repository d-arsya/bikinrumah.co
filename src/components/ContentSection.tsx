import Content from "./Content";

const contents = [
    {
        img: 'assets/logo-1.png',
        title: 'GRATIS KONSULTASI DESAIN',
        desc: 'Tak perlu bayar mahal jasa konsultan desain. Kami sediakan Gratis.'
    },
    {
        img: 'assets/logo-2.png',
        title: 'DESAIN SUKA-SUKA',
        desc: 'Ceritakan rumah impian Anda. Kami desainkan untuk mewujudkannya.'
    },
    {
        img: 'assets/logo-3.png',
        title: 'HARGA BERSAHABAT',
        desc: 'Bisa menyesuaikan anggaran Anda atau bisa juga bayar diangsur.'
    },
    {
        img: 'assets/logo-4.png',
        title: 'PENGURUSAN IMB',
        desc: 'Tidak perlu capek-capek mengurus IMB kami siap membantu.'
    },
    {
        img: 'assets/logo-5.png',
        title: 'BERKUALITAS',
        desc: 'Dikerjakan oleh tukang-tukang berpengalaman dan ahli dalam bidangnya.'
    },
    {
        img: 'assets/logo-6.png',
        title: 'BERPENGALAMAN',
        desc: 'Sejak 2011, lebih dari 100 rumah telah kami bangun & renovasi.'
    }
]

export default function ContentSection() {
    return (
        <div className="w-full bg-gray-100 mx-auto px-12 lg:px-48">
            <div className="relative -top-14 bg-white rounded-lg flex flex-col justify-between">
                <div className="w-full rounded-t-lg h-5 bg-merah-muda"></div>

                <div className="p-5 flex-1">
                    <div className="text-2xl mb-12">
                        Bikin atau Renovasi Rumah dengan <span className="text-merah-muda font-extrabold">Desain Suka-Suka</span> Sesuai Keinginan dan Anggaran Anda.
                    </div>

                    <div className="text-gray-400 mt-5">
                        <p>
                            Tim arsitek berpengalaman telah dihadirkan untuk membantu Anda mewujudkan rumah impian Anda.
                            <br /><br />
                            Daya rekat tim kami sudah terbentuk kuat menjadi pendorong untuk selalu bekerja secara maksimal dan profesional.
                            <br /><br />
                            Terbuka dalam hal spesifikasi material, baik itu jenis maupun merek yang Kami gunakan. Dan kami pastikan bahan berstandar SNI untuk bangunan rumah yang kokoh dan aman.
                        </p>
                    </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center p-5">
                    <img src="assets/logo.png" className="scale-90" alt="Logo" />
                    <div className="flex items-center justify-center text-gray-400 text-sm mt-5">
                        <img src="assets/gedung.png" alt="Gedung" className="w-12 mr-2" />
                        <p>Sejak 2011, lebih dari 100++ rumah telah kami bangun & renovasi.</p>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-100 text-center flex flex-col items-center px-2">
                <h2 className="mt-8 font-extrabold text-2xl">Kenapa Memilih Kami?</h2>
                <h3 className="text-gray-400">Berikut alasan Anda harus memilih kami sebagai jasa bikin rumah dan renovasi rumah impian.</h3>

                <div className="flex flex-wrap flex-row justify-evenly w-full">
                    {contents.map((item, index) =>
                        <Content
                            key={index}
                            img={item.img}
                            desc={item.desc}
                            title={item.title}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
