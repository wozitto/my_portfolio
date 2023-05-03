import Image from 'next/image';
import { ExternalLink } from '../Link/ExternalLink';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { SiZenn } from 'react-icons/si';

export const ExternalServices: React.VFC = () => {
  return (
    <div className="flex gap-4 justify-center">
      <ExternalLink href="https://twitter.com/_wozitto_">
        <BsTwitter size={24} />
      </ExternalLink>

      <ExternalLink href="http://github.com/wozitto">
        <BsGithub size={24} />
      </ExternalLink>

      <ExternalLink href="https://zenn.dev/wozitto">
        <SiZenn size={24} />
      </ExternalLink>

      <ExternalLink href="https://qiita.com/wozitto">
        <Image src="/qiita-icon.png" alt="qiita logo" width={24} height={24} />
      </ExternalLink>

      <ExternalLink href="https://note.com/wozitto">
        <Image src="/note-icon.png" alt="zenn logo" width={24} height={24} />
      </ExternalLink>
    </div>
  );
};
