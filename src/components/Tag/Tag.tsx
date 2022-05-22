type Props = {
  children: string;
};

export const Tag: React.VFC<Props> = (props) => {
  return (
    <li
      className="py-1 px-2 text-sm text-white bg-neutral rounded-lg"
      {...props}
    />
  );
};
