'use client';

import { useState, useEffect } from 'react';
import { generateMetricCards, generateChartData, generateCampaigns, generateChannelData, generatePerformanceData } from '@/lib/mock-data';
import type { MetricCard, Campaign, ChartData, ChannelData, PerformanceData } from '@/types/dashboard';

export interface RealTimeData {
  metrics: MetricCard[];
  campaigns: Campaign[];
  chartData: ChartData[];
  channelData: ChannelData[];
  performanceData: PerformanceData[];
  lastUpdated: Date;
}

function randomizeMetric(value: number): number {
  return Math.random() > 0.5
    ? Math.floor(value * (0.98 + Math.random() * 0.04))
    : value;
}

function updateMetricCards(metrics: MetricCard[]): MetricCard[] {
  return metrics.map(metric => {
    const currentValue = typeof metric.value === 'number' ? metric.value : parseFloat(metric.value);
    if (isNaN(currentValue)) return metric;

    const newValue = randomizeMetric(currentValue);
    const change = ((newValue - currentValue) / currentValue) * 100;
    
    return {
      ...metric,
      value: metric.value.toString().includes('%') || metric.value.toString().includes('$')
        ? metric.value // Don't update percentage or currency strings
        : newValue,
      change: Math.round(change * 10) / 10,
      trend: change >= 0 ? 'up' : 'down'
    };
  });
}

export function useRealTimeData(interval = 5000): RealTimeData {
  const [data, setData] = useState<RealTimeData>(() => ({
    metrics: generateMetricCards(),
    campaigns: generateCampaigns(),
    chartData: generateChartData(30),
    channelData: generateChannelData(),
    performanceData: generatePerformanceData(),
    lastUpdated: new Date()
  }));

  useEffect(() => {
    const timer = setInterval(() => {
      setData(prev => ({
        ...prev,
        metrics: updateMetricCards(prev.metrics),
        chartData: generateChartData(30), // Generate new chart data for real-time updates
        lastUpdated: new Date()
      }));
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return data;
}
