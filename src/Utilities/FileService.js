import { axiosBaseURL } from "../apis/aclApi";

const FileService = {
  uploadFiles,
};

function uploadFiles(file) {
  return axiosBaseURL
    .post(uri + "/api/file/UploadFiles", file)
    .then((res) => res)
    .catch((err) => err);
}

export default FileService;
