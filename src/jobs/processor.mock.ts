import { processExcel } from '../services/excel.processor';
import { updateFileStatus } from '../services/file.services';

export const processInBackground = async (filePath: string, fileId: string) => {
  setTimeout(async () => {
    try {
      await processExcel(filePath);
      await updateFileStatus(fileId, 'success');
    } catch (error) {
      await updateFileStatus(fileId, 'failed');
    }
  }, 1000); // simulate async job
};
