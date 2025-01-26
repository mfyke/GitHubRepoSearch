import Repo from "../Repo/Repo";

export default function RepoList(props) {

  const { repos } = props;
  const sortedRepos = repos.sort((a,b) => (a.updated_at > b.updated_at) ? -1 : 1);

  return (
    <>
      <div className="col-10 mx-auto">
        <h1 className="text-center my-5">RepoList</h1>
        {sortedRepos.map((repo) => <Repo repo={repo} key={repo.id} />)}
      </div>
    </>
  )
}