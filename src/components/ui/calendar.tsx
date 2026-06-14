"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const calendarLabels = {
  en: {
    months: [
      "JANUARY",
      "FEBRUARY",
      "MARCH",
      "APRIL",
      "MAY",
      "JUNE",
      "JULY",
      "AUGUST",
      "SEPTEMBER",
      "OCTOBER",
      "NOVEMBER",
      "DECEMBER",
    ],
    weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
  },
  ka: {
    months: [
      "იანვარი",
      "თებერვალი",
      "მარტი",
      "აპრილი",
      "მაისი",
      "ივნისი",
      "ივლისი",
      "აგვისტო",
      "სექტემბერი",
      "ოქტომბერი",
      "ნოემბერი",
      "დეკემბერი",
    ],
    weekdays: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  },
  ru: {
    months: [
      "ЯНВАРЬ",
      "ФЕВРАЛЬ",
      "МАРТ",
      "АПРЕЛЬ",
      "МАЙ",
      "ИЮНЬ",
      "ИЮЛЬ",
      "АВГУСТ",
      "СЕНТЯБРЬ",
      "ОКТЯБРЬ",
      "НОЯБРЬ",
      "ДЕКАБРЬ",
    ],
    weekdays: ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"],
  },
  tr: {
    months: [
      "OCAK",
      "ŞUBAT",
      "MART",
      "NİSAN",
      "MAYIS",
      "HAZİRAN",
      "TEMMUZ",
      "AĞUSTOS",
      "EYLÜL",
      "EKİM",
      "KASIM",
      "ARALIK",
    ],
    weekdays: ["PAZ", "PZT", "SAL", "ÇAR", "PER", "CUM", "CMT"],
  },
  ar: {
    months: [
      "يناير",
      "فبراير",
      "مارس",
      "أبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ],
    weekdays: ["أحد", "اثن", "ثلا", "أرب", "خمي", "جمع", "سبت"],
  },
  he: {
    months: [
      "ינואר",
      "פברואר",
      "מרץ",
      "אפריל",
      "מאי",
      "יוני",
      "יולי",
      "אוגוסט",
      "ספטמבר",
      "אוקטובר",
      "נובמבר",
      "דצמבר",
    ],
    weekdays: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
  },
} as const

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const locale = useLocale()
  const labels = calendarLabels[locale as keyof typeof calendarLabels] ?? calendarLabels.en

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-full p-3", className)}
      classNames={{
        root: "relative w-full",
        months: "flex flex-col",
        month: "w-full space-y-4",
        month_caption: "relative flex items-center justify-center pb-2 pt-10",
        caption_label: "text-[1.1rem] font-semibold uppercase tracking-[0.08em] text-[#241f1b]",
        nav: "absolute left-0 right-0 top-0 z-10 flex items-center justify-between",
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 text-[#241f1b] hover:bg-[#f3ece3] hover:text-[#8d6f58]"
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 text-[#241f1b] hover:bg-[#f3ece3] hover:text-[#8d6f58]"
        ),
        month_grid: "w-full table-fixed border-separate border-spacing-y-2",
        weekdays: "table-row",
        weekday:
          "table-cell pb-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#7b7269]",
        weeks: "",
        week: "table-row",
        day: "table-cell p-0 text-center align-middle",
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "mx-auto h-10 w-10 rounded-md p-0 text-base font-medium text-[#2d2925] hover:bg-[#f3ece3] hover:text-[#241f1b]"
        ),
        selected:
          "bg-[#241f1b] text-white hover:bg-[#241f1b] hover:text-white focus:bg-[#241f1b] focus:text-white",
        today: "bg-[#f3ece3] text-[#241f1b]",
        outside: "text-[#b1aaa3]",
        disabled: "text-[#c9c3bd] opacity-50",
        hidden: "invisible",
        ...classNames,
      }}
      formatters={{
        formatCaption: (date) => `${labels.months[date.getMonth()]} ${date.getFullYear()}`,
        formatWeekdayName: (date) => labels.weekdays[date.getDay()],
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon className={cn("h-4 w-4", className)} {...props} />
        },
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
