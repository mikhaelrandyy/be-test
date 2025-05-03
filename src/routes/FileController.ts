import { Request, Response } from 'express';
import { handleFileUpload } from '../services/file.services';

export const uploadFile = async (req: Request, res: Response) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: "No file uploaded" });

  const fileRecord = await handleFileUpload(file); // Save info to DB, status: pending
  res.status(200).json({ message: "Upload received", id: fileRecord.id });
};
