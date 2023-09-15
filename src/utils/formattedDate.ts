import { format, isSameDay, parseISO, subHours } from "date-fns";

export function formattedDate(date: string): string {
  const dateParsed = parseISO(date);
  if (isSameDay(subHours(new Date(), 3), dateParsed)) {
    return format(dateParsed, "'Hoje,' HH:mm")
  }
  return format(dateParsed, "dd'.'MM HH:mm")
}