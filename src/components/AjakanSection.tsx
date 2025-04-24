import Ajakan from "./Ajakan";

const ajakans = [
  {
    title: "Jasa Bikin Rumah",
    img: "assets/img/Bikin_Rumah_Assets_34.jpg"
  },
  {
    title: "Jasa Renovasi Rumah",
    img: "assets/img/Bikin_Rumah_Assets_25.jpg"
  },
  {
    title: "Bangun Rumah Mulai 2jt/m2",
    img: "assets/img/Bikin_Rumah_Assets_06.jpg"
  },
  {
    title: "Bangun Gedung Bertingkat Mulai 3jt/m2",
    img: "assets/img/Bikin_Rumah_Assets_27.jpg"
  },
]

export default function AjakanSection() {
  return (
    <div className="w-full flex flex-col items-center bg-merah px-5 py-12">
      <h3 className="w-full font-bold text-3xl tracking-wide mb-5 text-white text-center">
        Sekarang Saatnya Mewujudkan Rumah Impian Anda
      </h3>
      <h4 className="text-white text-center">
        Mungkin sudah terlalu lama Anda memendam impian ini. Dengan segala fasilitas yang kami berikan, rumah impian
        Anda siap menjadi nyata, bahkan sejak saat ini.
      </h4>
      <br />
      <div className="flex flex-row flex-wrap justify-center">
        {ajakans.map((e, i) => <Ajakan img={e.img} title={e.title} key={i} />)}
      </div>
    </div>
  );
};
