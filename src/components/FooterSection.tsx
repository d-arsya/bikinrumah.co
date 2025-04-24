export default function FooterSection() {
    return (
        <>
            <div className="w-full flex flex-col items-center text-center bg-gray-100 py-24 px-6">
                <img src="assets/logo.png" alt="Logo" />
                <br />
                <p className="md:w-1/2 w-10/12 text-gray-300">
                    BikinRumah.co adalah perusahaan yang bergerak di bidang properti khususnya pembangunan rumah maupun renovasi
                    yang mencakup desain, gambar kerja, perencanaan, penghitungan biaya (RAB), pengurusan IMB sampai dengan
                    pembangunan konstruksi.
                </p>
            </div>

            <div
                className="w-full text-white text-center bg-cover bg-center bg-no-repeat py-20"
                style={{ backgroundImage: "url('assets/img/Bikin_Rumah_Assets_29.jpg')" }}
            >
                <h2 className="font-bold text-2xl">Segera Wujudkan Rumah Impian Anda</h2>
                <br />
                <h4>Hubungi kami sekarang, ada penawaran menarik untuk Anda :</h4>
                <div className="mt-12 flex flex-wrap justify-center">
                    <div className="flex flex-col items-center">
                        <img src="assets/chat.svg" className="rounded-full w-12" alt="WhatsApp" />
                        <h3 className="font-bold">Whatsapp</h3>
                        <br />
                        <h4 className="">
                            Konsultasi melalui whatsapp<br />+6281329067107
                        </h4>
                        <br />
                        <a
                            href="https://api.whatsapp.com/send/?phone=6281329067107&text=Halo%20bikinrumah.co%20bisa%20konsultasi%20tentang%20desain%20dan%20pembangunan%20rumah%3F%0AIni%20dengan%2C%0A%0ANama%3A%0AAlamat%3A"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <p className="bg-hijau text-white font-bold flex items-center justify-center p-1 rounded-md text-sm">
                                CHAT WHATSAPP
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
