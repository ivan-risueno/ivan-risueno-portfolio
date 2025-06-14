import { TechStackItem } from './TechStackItem.ts';

export type TechLayerProps = {
  id: string;
  title: string;
  technologies: TechStackItem[];
  baseColor: string;
};
