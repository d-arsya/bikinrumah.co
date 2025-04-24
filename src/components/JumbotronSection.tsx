import Logo from "/assets/logo.png"
import Chat from "/assets/chat.svg"
export default function JumbotronSection() {
    return (
        <div
            className="flex flex-col items-center w-screen min-h-screen bg-cover bg-center bg-no-repeat pb-12 px-12"
            style={{ backgroundImage: 'url("assets/img/Bikin_Rumah_Assets_33.jpg")' }}
        >
            <div className="mt-1 text-center w-full">
                <img src={Logo} className="scale-60 inline-block" />
            </div>

            <h2 className="text-merah text-center mt-2">
                BikinRumah.co
                <strong className="text-kuning font-extrabold"> #AhlinyaBangunan</strong>
            </h2>

            <h1 className="bg-white text-merah font-extrabold text-2xl mt-4 py-2 px-4 rounded-lg text-center tracking-wide">
                Ingin Membangun Rumah Impian atau Merenovasi Rumah Kesayangan?
            </h1>

            <h3 className="bg-white text-kuning font-semibold text-lg mt-10 py-2 px-4 rounded-lg text-center">
                Kami telah berpengalaman sejak tahun 2011, serta lebih dari 100 rumah yang telah kami bangun dan renovasi.
            </h3>

            <div className="flex justify-center w-screen mt-6">
                <a
                    href="https://api.whatsapp.com/send/?phone=6281329067107&text=Halo%20bikinrumah.co%20bisa%20konsultasi%20tentang%20desain%20dan%20pembangunan%20rumah%3F%0AIni%20dengan%2C%0A%0ANama%3A%0AAlamat%3A"
                >
                    <div className="flex items-center bg-hijau text-white rounded-md mb-5 active:scale-110 transition-transform duration-150 p-2">
                        <img src={Chat} className="w-8 mr-2 ml-3" />
                        Ya, Saya Mau Bangun / Renovasi Rumah!
                    </div>
                </a>
            </div>
        </div>
    );
};
