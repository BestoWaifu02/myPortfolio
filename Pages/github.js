import Layout from "../components/Layout";
import Error from "./_error";

const github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode}></Error>;
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url}></img>
            <p>{user.bio}</p>

            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/BestoWaifu02");
  const data = await res.json();
  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default github;
