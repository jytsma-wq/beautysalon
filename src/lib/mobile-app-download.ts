export const androidApkFileName = 'silk-beauty-salon.apk';

export const androidApkDefaultUrl =
  'https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk';

export const androidApkUrl =
  process.env.NEXT_PUBLIC_ANDROID_APK_URL || androidApkDefaultUrl;

export const androidInstallSteps = [
  'Download the APK on your Android phone.',
  'When Android asks, allow your browser or file manager to install unknown apps.',
  'Open the downloaded file and tap Install.',
];
