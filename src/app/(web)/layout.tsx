type IProps = {
  children: React.ReactNode;
};

const WebLayout = (props: IProps) => {
  const { children } = props;
  return <>{children}</>;
};

export default WebLayout;
