export const androidApkFileName = 'silk-beauty-salon.apk';

export const androidApkSourceDefaultUrl =
  'https://github.com/jytsma-wq/beautysalon/releases/download/mobile-artifacts-2026-06-12/silk-beauty-salon.apk';

export const androidApkDefaultUrl = androidApkSourceDefaultUrl;

export const androidApkDownloadPath = '/api/download/android';

export const androidApkSourceUrl =
  process.env.ANDROID_APK_SOURCE_URL ||
  process.env.NEXT_PUBLIC_ANDROID_APK_SOURCE_URL ||
  process.env.NEXT_PUBLIC_ANDROID_APK_URL ||
  androidApkSourceDefaultUrl;

export const androidApkUrl = androidApkDownloadPath;

export const androidInstallSteps = [
  'Download the APK on your Android phone.',
  'When Android asks, allow your browser or file manager to install unknown apps.',
  'Open the downloaded file and tap Install.',
];
