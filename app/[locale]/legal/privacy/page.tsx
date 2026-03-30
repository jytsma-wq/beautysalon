import LegalPage from '../TermsPage';

export default function PrivacyPolicy(props: { params: Promise<{ locale: string }> }) {
  return <LegalPage {...props} pageType="privacy" />;
}
