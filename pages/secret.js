import BaseLayout from "@/components/layouts/BaseLayout";
import BasePage from "@/components/BasePage";
import withAuth from "@/hoc/withAuth";
import { ImageGallery } from "@/components/ImageGallery";
import { VideoGallery } from "@/components/VideoGallery";

const Secret = ({ user, loading }) => {
  return (
    <BaseLayout>
      <BasePage header="Videos Show">
        <div className="mediaContainer">
          {/* <ImageGallery /> */}
          <VideoGallery />
        </div>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(Secret)();
