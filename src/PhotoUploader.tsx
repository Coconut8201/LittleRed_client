import React, { useState } from 'react';
import { PostPhoto } from './utils/httpsReq';

const PhotoUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
  };

  const handleUpload = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // 阻止預設的表單提交行為

    if (selectedFiles && selectedFiles.length > 0) {
      try {
        const formData = new FormData();
        for (let i = 0; i < selectedFiles.length; i++) {
          formData.append('images', selectedFiles[i]);
        }
        await PostPhoto(formData).then(() => {
          console.log('照片上傳成功');
        });
      } catch (error) {
        console.error('照片上傳失敗', error);
      }
    }
  };

  return (
    <>
      <h1>你好，你看起來很想上傳照片</h1>
      <form>
        <input type="file" accept="image/*" multiple onChange={handleFileChange} style={{ fontSize: '40px' }}/>
        <br />
        <button onClick={handleUpload} style={{ marginTop: '10px',fontSize: '40px' }}>上傳圖片</button>
      </form>
    </>
  );
};

export default PhotoUploader;
