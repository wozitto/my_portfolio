import Link from 'next/link';

type Props = {
  href: string;
  underline?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const ExternalLink: React.VFC<Props> = ({
  href,
  underline,
  className = '',
  ...rest
}) => {
  return (
    <Link href={href}>
      <a
        target="_blank"
        rel="noreferrer"
        className={`${
          underline ? 'underline decoration-1 underline-offset-2' : ''
        } ${className}`.trim()}
        {...rest}
      />
    </Link>
  );
};
