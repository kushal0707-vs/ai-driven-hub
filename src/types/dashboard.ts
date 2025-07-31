export interface DashboardData {
  metrics: MetricCard[];
  chartData: ChartData[];
  campaigns: Campaign[];
  channelData: ChannelData[];
  performanceData: PerformanceData[];
}

export interface MetricCard {
  title: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
}

export interface ChartData {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  startDate: string;
}

export interface ChannelData {
  name: string;
  value: number;
}

export interface PerformanceData {
  category: string;
  organic: number;
  paid: number;
}

export interface ChartData {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface ChannelData {
  name: string;
  value: number;
}

export interface PerformanceData {
  category: string;
  organic: number;
  paid: number;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'active' | 'paused' | 'completed';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  startDate: string;
}

export type TimeRange = '24h' | '7d' | '30d' | '90d';
