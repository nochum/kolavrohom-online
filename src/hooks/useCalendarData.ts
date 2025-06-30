import * as React from 'react';

interface DafYomiScheduleItem {
  date: string;
  daf: string;
  formatted_date: string;
  label: string;
}

interface CalendarData {
  daf_yomi_schedule: DafYomiScheduleItem[];
}

export const useCalendarData = () => {
  const [data, setData] = React.useState<CalendarData | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const [retryCount, setRetryCount] = React.useState(0);

  const fetchCalendar = React.useCallback(() => {
    setLoading(true);
    setError(null);
    fetch('https://dafcvwmmdhi2y.cloudfront.net/calendar/dafyomi-calendar.json')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch calendar data.');
        return response.json();
      })
      .then(setData)
      .catch(() => setError('Failed to load calendar data. Please check your connection and try again.'))
      .finally(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    fetchCalendar();
  }, [fetchCalendar, retryCount]);

  const retry = () => setRetryCount(c => c + 1);

  return { data, loading, error, retry };
}; 