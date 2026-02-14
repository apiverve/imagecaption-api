declare module '@apiverve/imagecaption' {
  export interface imagecaptionOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface imagecaptionResponse {
    status: string;
    error: string | null;
    data: ImageCaptionData;
    code?: number;
  }


  interface ImageCaptionData {
      caption: string;
  }

  export default class imagecaptionWrapper {
    constructor(options: imagecaptionOptions);

    execute(callback: (error: any, data: imagecaptionResponse | null) => void): Promise<imagecaptionResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: imagecaptionResponse | null) => void): Promise<imagecaptionResponse>;
    execute(query?: Record<string, any>): Promise<imagecaptionResponse>;
  }
}
