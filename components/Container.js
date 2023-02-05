import Navigation from "./Navigation";
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;
