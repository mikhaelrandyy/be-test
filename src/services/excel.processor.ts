import * as XLSX from 'xlsx';

export const processExcel = async (filePath: string) => {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(sheet);
  // Save to DB (mocked)
  console.log("Excel data:", data);
};
