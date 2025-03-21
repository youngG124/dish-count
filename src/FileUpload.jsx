import { useState } from "react";
import "./FileUpload.css"; // 스타일 파일 분리

function FileUpload() {
  const [image, setImage] = useState(null); // 업로드된 이미지 상태 저장

  // 파일 선택 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // 선택한 이미지 미리보기
    }
  };

  // 드롭존 클릭 시 파일 선택창 열기
  const handleBoxClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="upload-box" onClick={handleBoxClick}>
      {image ? (
        <img src={image} alt="미리보기" className="preview-image" />
      ) : (
        <p className="upload-text">click to upload image</p>
      )}
      <input
        type="file"
        id="fileInput"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />
    </div>
  );
}

export default FileUpload;
