import { Request, Response } from 'express';
import multer from 'multer';
import { processFileInBackground } from '../utils/backgroundWorker';

const upload = multer({ dest: 'uploads/' });

export const uploadFile = (req: Request, res: Response) => {
  const file = req.file;

  if (!file) return res.status(400).send('No file uploaded');

  const fileId = Date.now().toString();  

  processFileInBackground(file.path, fileId);

  return res.status(200).json({ message: 'File uploaded successfully', fileId });
};
