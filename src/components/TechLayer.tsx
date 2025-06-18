import '/src/styles/techLayer.scss';
import type { TechLayerProps } from '../types/TechLayerProps';

export default function TechLayer({ id, title, technologies, baseColor }: TechLayerProps) {
  return (
    <div
      className="stack-layer"
      id={id}
      style={{ "--base-color": baseColor } as React.CSSProperties}
      data-icons={JSON.stringify(technologies)}
    >
      {title}
    </div>
  );
}

