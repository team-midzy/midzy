interface Channel {
  name: string;
  link: string;
  IconComponent: ReactNode;
  twBgClassName?: string;
}

interface OfficialChannelsProps {
  title: string;
  channels: Channel[];
}
