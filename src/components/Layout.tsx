import Head from "next/head";

interface Props {
  title: string;
  children: JSX.Element;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  );
};
