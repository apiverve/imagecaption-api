declare module '@apiverve/imagecaption' {
  export interface imagecaptionOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface imagecaptionResponse {
    status: string;
    error: string | null;
    data: ImageCaptionData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ImageCaptionData {
      caption: null | string;
  }

  export default class imagecaptionWrapper {
    constructor(options: imagecaptionOptions);

    execute(callback: (error: any, data: imagecaptionResponse | null) => void): Promise<imagecaptionResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: imagecaptionResponse | null) => void): Promise<imagecaptionResponse>;
    execute(query?: Record<string, any>): Promise<imagecaptionResponse>;
  }
}
