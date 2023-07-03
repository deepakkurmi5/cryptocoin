import type {ImageSourcePropType} from 'react-native';

export interface TrendingListProps {
  id: string;
  currency: string;
  image: ImageSourcePropType;
  symbol: string;
  amount: string;
  changes: string;
  type: string;
  chartData: {x: number; y: number}[];
}
