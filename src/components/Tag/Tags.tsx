type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Tags: React.VFC<Props> = ({ className, ...rest }) => {
  return <ul className={`flex flex-wrap gap-2 ${className}`} {...rest} />;
};
