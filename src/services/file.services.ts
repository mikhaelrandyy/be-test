export const handleFileUpload = async (file: any) => {
  const fileRecord = {
    id: 'mock-id-' + Date.now(),
    filename: file.originalname,
    status: 'pending',
  };
  console.log('File uploaded:', fileRecord);
  return fileRecord;
};
