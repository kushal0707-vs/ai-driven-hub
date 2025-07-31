import { Campaign, MetricCard, ChartData, ChannelData, PerformanceData } from '@/types/dashboard';
import { add } from 'date-fns';

export function generateMetricCards(): MetricCard[] {
  return [
    {
      title: 'Total Views',
      value: 2347891,
      change: 12.3,
      trend: 'up',
    },
    {
      title: 'Click Rate',
      value: '2.4%',
      change: -0.4,
      trend: 'down',
    },
    {
      title: 'Conversions',
      value: 48291,
      change: 8.1,
      trend: 'up',
    },
    {
      title: 'Cost per Click',
      value: '$0.42',
      change: -0.1,
      trend: 'down',
    },
  ];
}

export function generateChartData(days: number): ChartData[] {
  const data: ChartData[] = [];
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = add(now, { days: -i });
    data.push({
      date: date.toISOString().split('T')[0],
      views: Math.floor(Math.random() * 100000) + 50000,
      clicks: Math.floor(Math.random() * 5000) + 2500,
      conversions: Math.floor(Math.random() * 500) + 100,
    });
  }

  return data;
}

export function generateCampaigns(): Campaign[] {
  return [
    {
      id: '1',
      name: 'Summer Sale 2025',
      status: 'active',
      budget: 50000,
      spent: 32451,
      impressions: 1234567,
      clicks: 45678,
      conversions: 2345,
      startDate: '2025-06-01',
    },
    {
      id: '2',
      name: 'Back to School',
      status: 'paused',
      budget: 30000,
      spent: 12789,
      impressions: 567890,
      clicks: 23456,
      conversions: 1234,
      startDate: '2025-07-15',
    },
    {
      id: '3',
      name: 'Holiday Special',
      status: 'completed',
      budget: 75000,
      spent: 75000,
      impressions: 2345678,
      clicks: 89012,
      conversions: 4567,
      startDate: '2024-11-25',
    },
  ];
}

export function generateChannelData(): ChannelData[] {
  return [
    { name: 'Social Media', value: 35 },
    { name: 'Search', value: 25 },
    { name: 'Email', value: 20 },
    { name: 'Direct', value: 15 },
    { name: 'Other', value: 5 },
  ];
}

export function generatePerformanceData(): PerformanceData[] {
  return [
    { category: 'Views', organic: 45000, paid: 55000 },
    { category: 'Clicks', organic: 20000, paid: 25000 },
    { category: 'Conversions', organic: 1200, paid: 1800 },
    { category: 'Revenue', organic: 25000, paid: 35000 },
  ];
}
