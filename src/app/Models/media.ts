export interface Media {
    Mid: number;
    Pid: number;
    Type: string;
    FileData: string | ArrayBuffer;  // For displaying the file data as base64, if needed
  }
  