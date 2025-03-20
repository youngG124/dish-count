import FileUpload from "./FileUpload";
import bannerImage from "./assets/banner.png"; // 배너 이미지 가져오기
import "./index.css"; // CSS 파일 불러오기

function App() {
  return (
    <div className="app-container">
      {/* 배너 이미지 */}
      <img src={bannerImage} alt="배너" className="banner" />

      {/* 파일 업로드 컨테이너 */}
      <div className="upload-container">
        <FileUpload />
      </div>
    </div>
  );
}

export default App;
