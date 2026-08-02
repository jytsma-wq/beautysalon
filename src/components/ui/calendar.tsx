"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLocale } from "next-intl"
import { DayPicker } from "react-day-picker"
import { ar, de, enUS, fr, he, ka, nl, ru, tr } from "react-day-picker/locale"

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
  nl: {
    months: [
      "JANUARI",
      "FEBRUARI",
      "MAART",
      "APRIL",
      "MEI",
      "JUNI",
      "JULI",
      "AUGUSTUS",
      "SEPTEMBER",
      "OKTOBER",
      "NOVEMBER",
      "DECEMBER",
    ],
    weekdays: ["ZO", "MA", "DI", "WO", "DO", "VR", "ZA"],
  },
  fr: {
    months: [
      "JANVIER",
      "FÉVRIER",
      "MARS",
      "AVRIL",
      "MAI",
      "JUIN",
      "JUILLET",
      "AOÛT",
      "SEPTEMBRE",
      "OCTOBRE",
      "NOVEMBRE",
      "DÉCEMBRE",
    ],
    weekdays: ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"],
  },
  de: {
    months: [
      "JANUAR",
      "FEBRUAR",
      "MÄRZ",
      "APRIL",
      "MAI",
      "JUNI",
      "JULI",
      "AUGUST",
      "SEPTEMBER",
      "OKTOBER",
      "NOVEMBER",
      "DEZEMBER",
    ],
    weekdays: ["SO", "MO", "DI", "MI", "DO", "FR", "SA"],
  },
} as const

const calendarLocales = {
  en: enUS,
  ka,
  ru,
  tr,
  ar,
  he,
  nl,
  fr,
  de,
} as const

function Calendar({
  className,
  classNames,
  components,
  formatters,
  labels,
  locale: datePickerLocale,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  const locale = useLocale()
  const localeLabels = calendarLabels[locale as keyof typeof calendarLabels] ?? calendarLabels.en
  const resolvedDatePickerLocale =
    datePickerLocale ?? calendarLocales[locale as keyof typeof calendarLocales] ?? calendarLocales.en

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={resolvedDatePickerLocale}
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
      labels={labels}
      formatters={{
        formatCaption: (date) => `${localeLabels.months[date.getMonth()]} ${date.getFullYear()}`,
        formatWeekdayName: (date) => localeLabels.weekdays[date.getDay()],
        ...formatters,
      }}
      components={{
        Chevron: ({ className, orientation, ...props }) => {
          const Icon = orientation === "left" ? ChevronLeft : ChevronRight
          return <Icon className={cn("h-4 w-4", className)} {...props} />
        },
        ...components,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
