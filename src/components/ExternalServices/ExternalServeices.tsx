import { ExternalLink } from '../Link/ExternalLink';
import { BsGithub, BsTwitter } from 'react-icons/bs';
import { SiQiita } from 'react-icons/si';

export const ExternalServices: React.VFC = () => {
  return (
    <div className="flex gap-4 justify-center">
      <ExternalLink href="https://twitter.com/_wozitto_">
        <BsTwitter />
      </ExternalLink>

      <ExternalLink href="http://github.com/wozitto">
        <BsGithub />
      </ExternalLink>

      <ExternalLink href="https://qiita.com/wozitto">
        <SiQiita />
      </ExternalLink>
    </div>
  );
};
