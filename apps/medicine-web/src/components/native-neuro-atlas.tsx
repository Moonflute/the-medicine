"use client";

import { ImageNeuroAtlas, imageAtlasViewIds, type ImageAtlasViewId } from "@/components/image-neuro-atlas";

export type NeuroAtlasLayer = "anatomy" | "motor" | "sensory" | "cranial" | "reflex" | "dermatome" | "myotome" | "peripheral" | "autonomic";

type Props = {
  viewId: string;
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

/** Public atlas rendering is image-first: a project-owned anatomy illustration plus a separate SVG interaction layer. */
export function NativeNeuroAtlas({ viewId, ...props }: Props) {
  if (!imageAtlasViewIds.has(viewId)) return null;
  return <ImageNeuroAtlas viewId={viewId as ImageAtlasViewId} {...props} />;
}

export const nativeNeuroViewIds = imageAtlasViewIds;
