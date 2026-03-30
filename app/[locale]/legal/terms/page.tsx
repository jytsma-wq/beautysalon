import LegalPage from '../TermsPage';

export default function TermsOfUse(props: { params: Promise<{ locale: string }> }) {
  return <LegalPage {...props} pageType="terms" />;
}
