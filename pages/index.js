import Container from "../components/Container";
import Users from "../components/Users";
import fetch from "isomorphic-unfetch";
import Head from "next/head";

const Index = (props) => (
  <Container>
    <Head>
      <title>Next - Home Page</title>
    </Head>
    <div>
      <h1>Next</h1>
      <Users users={props.users} />
    </div>
  </Container>
);

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const resJSON = await res.json();
  return {
    users: resJSON.data,
  };
};

export default Index;
