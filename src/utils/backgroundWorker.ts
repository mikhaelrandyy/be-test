export function processFileInBackground(filePath: string, fileId: string) {
  setTimeout(() => {
    console.log(`Processing file ${filePath}...`);
    
    const success = Math.random() > 0.5;

    console.log(`File ${fileId} processing ${success ? 'succeeded' : 'failed'}`);
  }, 3000); 
}
