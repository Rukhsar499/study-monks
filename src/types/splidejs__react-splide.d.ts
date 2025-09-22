declare module '@splidejs/react-splide' {
  import * as React from 'react';
  import type { Options } from '@splidejs/splide';

  export interface SplideProps {
    options?: Options;
    hasTrack?: boolean;
    tag?: string;
    className?: string;
    id?: string;
    children?: React.ReactNode;
  }

  export class Splide extends React.Component<SplideProps> {}

  export interface SplideSlideProps {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
  }

  export class SplideSlide extends React.Component<SplideSlideProps> {}
}
