export type Datum = any;
export type ID = number | string;
type NumberValue = number | {valueOf(): number};
export type TickProps = React.CSSProperties & {size?: number};
export type VerticalAnchorType = 'start' | 'middle' | 'end';
export type ForAxes<T> = T | {x?: T; y?: T};
export type ValueOrAxes<T> = T | ForAxes<T>;
export type PaddingType = number | Tuple<number>;
export type Tuple<T> = [T, T];
export type StringOrNumberOrList = string | number | (string | number)[];
export type OriginType = {x: number; y: number};
export type RangeTuple = number[];
export type ScaleName = 'linear' | 'time' | 'log' | 'sqrt';
export type SortOrderPropType = 'ascending' | 'descending';
export type AnimationStyle = {[key: string]: string | number};
export type OrientationTypes = 'top' | 'bottom' | 'left' | 'right';

export type ColorScalePropType =
  | 'grayscale'
  | 'qualitative'
  | 'heatmap'
  | 'warm'
  | 'cool'
  | 'red'
  | 'green'
  | 'blue'
  | string[];

export type AnimationEasing =
  | 'back'
  | 'backIn'
  | 'backOut'
  | 'backInOut'
  | 'bounce'
  | 'bounceIn'
  | 'bounceOut'
  | 'bounceInOut'
  | 'circle'
  | 'circleIn'
  | 'circleOut'
  | 'circleInOut'
  | 'linear'
  | 'linearIn'
  | 'linearOut'
  | 'linearInOut'
  | 'cubic'
  | 'cubicIn'
  | 'cubicOut'
  | 'cubicInOut'
  | 'elastic'
  | 'elasticIn'
  | 'elasticOut'
  | 'elasticInOut'
  | 'exp'
  | 'expIn'
  | 'expOut'
  | 'expInOut'
  | 'poly'
  | 'polyIn'
  | 'polyOut'
  | 'polyInOut'
  | 'quad'
  | 'quadIn'
  | 'quadOut'
  | 'quadInOut'
  | 'sin'
  | 'sinIn'
  | 'sinOut'
  | 'sinInOut';

export type BlockProps = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type CategoryPropType =
  | string[]
  | {x: string[]}
  | {y: string[]}
  | {
      x: string[];
      y: string[];
    };

export type DomainPaddingPropType = ValueOrAxes<PaddingType>;

export interface D3Scale<TRange = any> {
  (numberValue: NumberValue): number;
  base?: () => number;
  ticks: (count?: number) => number[];
  tickFormat: (count?: number) => (d: number) => string;
  domain: {
    (): number[];
    (domain: NumberValue[]): D3Scale<TRange>;
  };
  range: {
    (): TRange[];
    (range: TRange): D3Scale<TRange>;
  };
  copy: () => this;
  invert: (value: number) => number;
}

export type ScalePropType = ScaleName;

export interface CallbackArgs {
  active?: boolean;
  data?: Datum[];
  datum?: Datum;
  horizontal?: boolean;
  index?: ID;
  x?: number;
  y?: number;
  scale?: {
    x?: D3Scale;
    y?: D3Scale;
  };
  tick?: any;
  ticks?: any;
  text?: any;
}

export type VictoryStringOrNumberCallback = (
  args: CallbackArgs,
) => string | number;

export type LabelProps = React.CSSProperties & {
  angle?: number;
  verticalAnchor?: VerticalAnchorType;
};

export type VictoryLabelStyleObject = {
  [K in keyof LabelProps]: StringOrNumberOrCallback;
};

export type StringOrNumberOrCallback =
  | string
  | number
  | VictoryStringOrNumberCallback;

export type VictoryStyleObject = {
  [K in keyof React.CSSProperties]: StringOrNumberOrCallback;
};

export type VictoryTickStyleObject = {
  [K in keyof TickProps]: StringOrNumberOrCallback;
};

export type DomainTuple = Tuple<number> | Tuple<Date>;

export type DomainPropType = ValueOrAxes<DomainTuple>;

export type ValueOrAccessor<ValueType, PropsType = CallbackArgs> =
  | ValueType
  | ((props: PropsType) => ValueType);

export type DataGetterPropType = ValueOrAccessor<
  string | string[] | number | number[],
  any
>;

export type VictoryNumberCallback = (args: CallbackArgs) => number;

export type NumberOrCallback = number | VictoryNumberCallback;

export type VictoryPaddingCallback = (
  args: CallbackArgs,
) => number | BlockProps;

export type PaddingOrCallback = number | BlockProps | VictoryPaddingCallback;

export type VictoryOrientationCallback = (
  args: CallbackArgs,
) => OrientationTypes;

export type OrientationOrCallback =
  | OrientationTypes
  | VictoryOrientationCallback;

export interface AnimatePropTypeInterface {
  duration?: number;
  onEnd?: () => void;
  onExit?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  onEnter?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
    after?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  onLoad?: {
    duration?: number;
    before?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
    after?: (datum: Datum, index: number, data: Datum[]) => AnimationStyle;
  };
  easing?: AnimationEasing;
  animationWhitelist?: string[];
}

export interface VictoryDatableProps {
  categories?: CategoryPropType;
  data?: readonly any[];
  dataComponent?: React.ReactElement;
  domain?: DomainPropType;
  domainPadding?: DomainPaddingPropType;
  samples?: number;
  sortKey?: DataGetterPropType;
  sortOrder?: SortOrderPropType;
  x?: DataGetterPropType;
  y?: DataGetterPropType;
  y0?: DataGetterPropType;
}

export interface EventCallbackInterface<TTarget, TEventKey> {
  childName?: string | string[];
  target?: TTarget;
  eventKey?: TEventKey;
  mutation: (props: any) => any;
  callback?: (props: any) => any;
}
export type PaddingProps = number | BlockProps;

export interface VictoryCommonThemeProps {
  animate?: boolean | AnimatePropTypeInterface;
  colorScale?: ColorScalePropType;
  containerComponent?: React.ReactElement;
  domainPadding?: DomainPaddingPropType;
  externalEventMutations?: EventCallbackInterface<
    string | string[],
    StringOrNumberOrList
  >[];
  groupComponent?: React.ReactElement;
  height?: number;
  horizontal?: boolean;
  maxDomain?: number | {x?: number; y?: number};
  minDomain?: number | {x?: number; y?: number};
  name?: string;
  origin?: OriginType;
  padding?: PaddingProps;
  polar?: boolean;
  range?: RangePropType;
  scale?:
    | ScalePropType
    | D3Scale
    | {
        x?: ScalePropType | D3Scale;
        y?: ScalePropType | D3Scale;
      };
  // eslint-disable-next-line @typescript-eslint/ban-types
  sharedEvents?: {events: any[]; getEventState: Function};
  singleQuadrantDomainPadding?: boolean | {x?: boolean; y?: boolean};
  standalone?: boolean;
  width?: number;
}

export type RangePropType = ValueOrAxes<RangeTuple>;

export interface VictoryThemeDefinition {
  area?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
  axis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
    offsetX?: number;
    offsetY?: number;
  } & VictoryCommonThemeProps;
  bar?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
  boxplot?: {
    style?: {
      max?: VictoryStyleObject;
      maxLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      median?: VictoryStyleObject;
      medianLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      min?: VictoryStyleObject;
      minLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      q1?: VictoryStyleObject;
      q1Labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      q3?: VictoryStyleObject;
      q3Labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
    boxWidth?: number;
  } & VictoryCommonThemeProps;
  candlestick?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
    candleColors?: {
      positive?: string;
      negative?: string;
    };
  } & VictoryCommonThemeProps;
  chart?: VictoryCommonThemeProps;
  dependentAxis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
    offsetX?: number;
    offsetY?: number;
    orientation?: OrientationTypes;
  } & VictoryCommonThemeProps;
  errorbar?: {
    borderWidth?: number;
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  group?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  histogram?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  independentAxis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
    offsetX?: number;
    offsetY?: number;
    orientation?: OrientationTypes;
  } & VictoryCommonThemeProps;
  legend?: {
    gutter?: number | BlockProps;
    rowGutter?: number | BlockProps;
    orientation?: string;
    titleOrientation?: string;
    style?: {
      data?: VictoryStyleObject & {
        type?: string;
      };
      border?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      title?: VictoryLabelStyleObject;
    };
    itemsPerRow?: number;
    x?: number;
    y?: number;
    centerTitle?: boolean;
    borderPadding?: number | BlockProps;
  } & VictoryCommonThemeProps;
  line?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
  pie?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
  polarAxis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  polarDependentAxis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  polarIndependentAxis?: {
    style?: {
      axis?: VictoryStyleObject;
      axisLabel?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      grid?: VictoryStyleObject;
      ticks?: VictoryTickStyleObject;
      tickLabels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps;
  scatter?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
  stack?: VictoryCommonThemeProps;
  tooltip?: {
    style?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
    flyoutStyle?: VictoryStyleObject;
    cornerRadius?: NumberOrCallback;
    pointerLength?: NumberOrCallback;
    flyoutPadding?: PaddingOrCallback;
    flyoutWidth?: NumberOrCallback;
    flyoutHeight?: NumberOrCallback;
    orientation?: OrientationOrCallback;
    pointerOrientation?: OrientationOrCallback;
  };
  voronoi?: {
    style?: {
      data?: VictoryStyleObject;
      labels?: VictoryLabelStyleObject | VictoryLabelStyleObject[];
      flyout?: VictoryStyleObject;
    };
  } & VictoryCommonThemeProps &
    VictoryDatableProps;
}
