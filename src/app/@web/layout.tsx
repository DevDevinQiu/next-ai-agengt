import Link from "next/link";

type IProps = {
  about: React.ReactNode;
  home: React.ReactNode;
  children: React.ReactNode;
};

const WebLayout = (props: IProps) => {
  const { about, home, children } = props;

  return (
    <>
      {about}
      {home}
      <Link className="mt-8 mb-8 p-8 border-2" href="/info/M000020684">
        跳转到Info页, 传递id
      </Link>
      {children}
    </>
  );
};

export default WebLayout;
