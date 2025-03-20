import { useState } from "react";

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // 파일 선택 핸들러
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // 이미지 미리보기
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div>
          <img src={preview} alt="미리보기" width="200" />
        </div>
      )}
    </div>
  );
}