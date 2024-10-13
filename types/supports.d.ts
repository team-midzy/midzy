interface Contents {
  entry: string;
  page: number;
  index?: number;
  hidden: boolean;
}

interface MessageBook {
  id: number;
  title: string;
  description: string;
  date: string;
  path: string;
  photos: number;
  pages?: number;
  textColor: string;
  bgColor: string;
  pdf?: string;
  contents?: Contents[];
}

// interface Supports {
//   type: "message-book" | "event" | "ad" | "support";
//   info: MessageBook | Event | Ad | Support;
// }
