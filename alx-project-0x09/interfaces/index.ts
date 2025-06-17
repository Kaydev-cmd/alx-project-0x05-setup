import * as React from "react";

export interface ReactComponentProps {
  children: React.ReactNode;
}

export interface GenerateImageProps {
  imageUrl: string;
  prompt: string;
  width?: string;
  height?: string;
  action: (imagePath: string) => void;
}

export type ImageProps = Pick<GenerateImageProps, "imageUrl" | "prompt">;

export type RequestProps = {
  prompt: string;
}
