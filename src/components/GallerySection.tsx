const galleries = [
    "assets/img/Bikin_Rumah_Assets_01.jpg",
    "assets/img/Bikin_Rumah_Assets_02.jpg",
    "assets/img/Bikin_Rumah_Assets_11.jpg",
    "assets/img/Bikin_Rumah_Assets_12.jpg",
    "assets/img/Bikin_Rumah_Assets_16.jpg",
    "assets/img/Bikin_Rumah_Assets_23.jpg",
]
export default function GallerySection() {
    return (
        <div className="bg-gray-100 w-full text-center pb-8">
            <i className="text-lg block">Inilah Sebagian Karya Kami:</i>
            <div className="flex justify-center flex-wrap mt-4">
                {galleries.map((e, i) => {
                    return <img
                        key={i}
                        src={e}
                        className="w-80 aspect-[4/3] rounded-lg m-5"
                    />
                })}
            </div>
        </div>
    );
};
