import Layout from "../components/Layout";
import Link from "next/dist/client/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>Error 404</h1>
      <hr />
      <p>
        Woops! Seems this page does not exist. Please return{" "}
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
