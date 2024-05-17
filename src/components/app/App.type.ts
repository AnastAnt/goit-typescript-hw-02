export interface Image {
  alt: string;
  id: string;
  small: string;
  regular: string;
}

export interface UnsplashImage {
  alt_description: string;
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}
export interface UnsplashImageResponse {
  results: {
    alt_description: string;
    id: string;
    urls: {
      small: string;
      regular: string;
    };
  }[];
}
export interface UnsplashImageResult {
  alt_description: string;
  id: string;
  urls: {
    small: string;
    regular: string;
  };
}
