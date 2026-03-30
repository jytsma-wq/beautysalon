import { TreatmentsClient } from './TreatmentsClient';

export default async function TreatmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <TreatmentsClient locale={locale} />;
}
