interface DafYomiScheduleItem {
  date: string;
  daf: string;
  formatted_date: string;
  label: string;
}

interface CalendarData {
  daf_yomi_schedule: DafYomiScheduleItem[];
}

export const useDafNavigation = (calendarData: CalendarData | null) => {
  const today = new Date().toISOString().split('T')[0];

  const findDafByDate = (date: string) => {
    return calendarData?.daf_yomi_schedule.find(item => item.date === date);
  };

  const getTodayDaf = () => findDafByDate(today);
  const getYesterdayDaf = () => {
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    return findDafByDate(yesterday);
  };
  const getTomorrowDaf = () => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    return findDafByDate(tomorrow);
  };

  return { getTodayDaf, getYesterdayDaf, getTomorrowDaf };
}; 