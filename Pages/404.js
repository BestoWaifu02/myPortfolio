import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>Error 404 not found</h1>
      <p>
        This page does not exists.Please return to:
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
