"use client";

import { useEffect, useRef, type PointerEvent, type MouseEvent } from "react";
import type { NeuroAtlasLayer } from "@/components/native-neuro-atlas";

type Props = {
  layer: NeuroAtlasLayer;
  pathwayId?: string;
  selectedId?: string;
  hoveredId?: string;
  onSelect: (id: string) => void;
  onHover: (id?: string) => void;
};

const VIEW_WIDTH = 1440;
const VIEW_HEIGHT = 1080;
const STRUCTURE_ID = "cingulate-gyrus";

/**
 * Pixel-aligned calibration trial: the mask was extracted from this exact
 * raster illustration. The highlight and hit-testing bitmap therefore share
 * the source image's coordinate system instead of approximating it with SVG.
 */
export function MidsagittalMaskAtlas({ selectedId, hoveredId, onSelect, onHover }: Props) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const hitCanvas = useRef<HTMLCanvasElement | null>(null);
  const hitAsset = basePath + "/neuro-atlas/masks/brain-midsagittal-cingulate-gyrus-hit.png";
  const highlightAsset = basePath + "/neuro-atlas/masks/brain-midsagittal-cingulate-gyrus-highlight.png";
  const active = selectedId === STRUCTURE_ID || hoveredId === STRUCTURE_ID;

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = VIEW_WIDTH;
      canvas.height = VIEW_HEIGHT;
      canvas.getContext("2d", { willReadFrequently: true })?.drawImage(image, 0, 0, VIEW_WIDTH, VIEW_HEIGHT);
      hitCanvas.current = canvas;
    };
    image.src = hitAsset;
    return () => { hitCanvas.current = null; };
  }, [hitAsset]);

  const isMaskPixel = (event: PointerEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>) => {
    const canvas = hitCanvas.current;
    if (!canvas) return false;
    const rect = event.currentTarget.getBoundingClientRect();
    const scale = Math.min(rect.width / VIEW_WIDTH, rect.height / VIEW_HEIGHT);
    const offsetX = (rect.width - VIEW_WIDTH * scale) / 2;
    const offsetY = (rect.height - VIEW_HEIGHT * scale) / 2;
    const x = Math.floor((event.clientX - rect.left - offsetX) / scale);
    const y = Math.floor((event.clientY - rect.top - offsetY) / scale);
    if (x < 0 || y < 0 || x >= VIEW_WIDTH || y >= VIEW_HEIGHT) return false;
    return canvas.getContext("2d", { willReadFrequently: true })?.getImageData(x, y, 1, 1).data[3] === 255;
  };

  return <div className="relative h-full w-full select-none" role="img" aria-label="Cerebrum midsagittal interactive atlas">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src={basePath + "/neuro-atlas/illustrations/brain-midsagittal.png"} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    {active ? <img src={highlightAsset} alt="" draggable={false} className="pointer-events-none absolute inset-0 h-full w-full object-contain" /> : null}
    <div className="absolute inset-0" onPointerMove={(event) => onHover(isMaskPixel(event) ? STRUCTURE_ID : undefined)} onPointerLeave={() => onHover()} onClick={(event) => { if (isMaskPixel(event)) onSelect(STRUCTURE_ID); }} />
  </div>;
}
