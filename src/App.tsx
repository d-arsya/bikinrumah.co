import ContentSection from "./components/ContentSection";
import GallerySection from "./components/GallerySection";
import VideoSection from "./components/VideoSection";
import JumbotronSection from "./components/JumbotronSection";
import TestimoniSection from "./components/TestimoniSection";
import AjakanSection from "./components/AjakanSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      <VideoSection></VideoSection>
      <JumbotronSection></JumbotronSection>
      <ContentSection></ContentSection>
      <GallerySection></GallerySection>
      <TestimoniSection></TestimoniSection>
      <AjakanSection></AjakanSection>
      <FooterSection></FooterSection>

    </>
  );
};

export default App;