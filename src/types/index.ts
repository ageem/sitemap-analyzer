export interface MetaData {
  title: string;
  description: string;
  keywords: string;
  newsKeywords: string;
  ogSiteName: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

export interface TechnicalSpecs {
  loadSpeed: string; // Store as string to ensure serialization
  pageSize: string; // Store as string to ensure serialization
}

export interface DebugInfo {
  xmlParsingStatus: string;
  httpStatus: string; // Store as string to ensure serialization
  networkErrors: string[];
  parsingErrors: string[];
  rateLimitingIssues: string[];
  memoryUsage: {
    heapUsed: string;
    heapTotal: string;
    rss: string;
    external: string;
    arrayBuffers: string;
  };
  processingTime: string; // Store as string to ensure serialization
  stackTrace?: string;
  requestLogs: Array<{
    url: string;
    status: string; // Store as string to ensure serialization
    duration: string; // Store as string to ensure serialization
  }>;
}

export interface AnalysisResult {
  url: string;
  status: 'pass' | 'fail';
  issues: string[];
  metadata: MetaData;
  technicalSpecs: TechnicalSpecs;
  debugInfo?: DebugInfo;
}

// Ensure all data stored in Prisma is serializable
export type SerializableData = {
  [key: string]: string | number | boolean | null | SerializableData | Array<string | number | boolean | null | SerializableData>;
}
