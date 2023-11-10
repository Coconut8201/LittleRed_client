import { apis } from "./api";

export async function PostPhoto(photoData: any): Promise<any> {
   const response = await fetch(apis.savephoto, {
      method: 'POST',
      // headers: {
      //    'Content-Type': 'multipart/form-data'
      // },
      body: photoData
   });
   console.log(`response = ${response}`);
   //return response; // 返回回應或其他所需的數據
}
