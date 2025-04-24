import Video from "/assets/video/vid.mp4"
import Logo from "/assets/logo.png"
export default function VideoSection() {
    return (
        <div className="relative flex flex-col items-center w-screen min-h-screen pb-12 overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
                <source src={Video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="z-10 mt-16">
                <img src={Logo} />
            </div>

            <h2 className="text-xl text-merah z-10 mt-4 text-center">
                BikinRumah.co
                <strong className="text-kuning"> #AhlinyaBangunan</strong>
            </h2>
        </div>
    );
};
