import LegalPage from '../TermsPage';

export default function CookieNotice(props: { params: Promise<{ locale: string }> }) {
  return <LegalPage {...props} pageType="cookies" />;
}
