import EmailIcon from '../icon/email';
import LocationIcon from '../icon/location';
import PhoneIcon from '../icon/phone';
import WaIcon from '../icon/wa';

export default function Sosmed() {
  const color = 'text-primary';
  const width = 'w-5';
  const height = width;
  const sosmedList = [
    {
      id: '1',
      title: 'Contact via Whatsapp',
      link: 'https://wa.me/6281770584158',
      target: '_blank',
      icon: <WaIcon color={color} width={width} height={height} />
    },
    {
      id: '2',
      title: 'Contact via Phone',
      link: 'tel:6281770584158',
      target: '_blank',
      icon: <PhoneIcon color={color} width={width} height={height} />
    },
    {
      id: '3',
      title: 'Contact via Email',
      link: 'mailto:info@asrimedicare.com',
      target: '_blank',
      icon: <EmailIcon color={color} width={width} height={height} />
    },
    {
      id: '4',
      title: 'See location',
      target: '_blank',
      link: 'https://maps.app.goo.gl/REvzkBC9GBhhqVat6',
      icon: <LocationIcon color={color} width={width} height={height} />
    }
  ];
  return (
    <div className="flex items-center gap-5 mt-5">
      {sosmedList.map((list) => (
        <a
          key={list.id}
          href={list.link}
          target={list.target}
          title={list.title}
        >
          {/* Wa */}
          {list.icon}
        </a>
      ))}
    </div>
  );
}
