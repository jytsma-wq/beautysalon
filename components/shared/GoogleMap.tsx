import { SALON_INFO } from '@/lib/constants';

interface GoogleMapProps {
  className?: string;
  height?: string;
}

export default function GoogleMap({ className = '', height = '300px' }: GoogleMapProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-stone-800 ${className}`}
      style={{ height }}
    >
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.3!2d${SALON_INFO.coordinates.lng}!3d${SALON_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM4JzQ4LjUiTiA0McKwMzgnMTIuMSJF!5e0!3m2!1sen!2sge!4v1`}
        width="100%"
        height="100%"
        style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Silk Beauty Salon — 28 Rustaveli Avenue, Batumi"
      />
    </div>
  );
}
