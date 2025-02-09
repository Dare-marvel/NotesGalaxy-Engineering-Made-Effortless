import { createUploadthing } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  documentUploader: f({
    "application/pdf": { maxFileSize: "4MB" },
    "application/msword": { maxFileSize: "4MB" },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { maxFileSize: "4MB" },
    "application/vnd.ms-powerpoint": { maxFileSize: "4MB" },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": { maxFileSize: "4MB" }
  })
    .middleware(() => ({ userId: "guest" }))
    .onUploadComplete((res) => {
      console.log("Upload complete:", res);
      return { message: "Upload completed" };
    })
};