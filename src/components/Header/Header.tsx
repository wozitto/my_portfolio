import Image from 'next/image';
import { ExternalServices } from '../ExternalServices';
import { ExternalLink } from '../Link';

export const Header: React.FC = () => (
  <header className="flex flex-col justify-center mt-24 mb-20">
    <div className="text-center">
      <ExternalLink href="/">
        <Image src="/logo.png" alt="logo" width={72} height={72} />
      </ExternalLink>
    </div>
    <div className="mt-4 text-3xl text-center">
      <ExternalLink href="/">wozitto</ExternalLink>
    </div>

    <div className="mt-4 text-sm text-center text-tertiary">
      Web Front-end Developer in Fukuoka, Japan
    </div>

    <div className="mt-4">
      <ExternalServices />
    </div>
  </header>
);
