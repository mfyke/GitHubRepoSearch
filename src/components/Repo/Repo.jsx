export default function Repo(props) {

  const { name, updated_at, language } = props.repo;

  console.log(props);

  return (
    <>
      <div className="card my-2">
        <h2>Title: {name}</h2>
        <h5>Primary Language Used: {language ? language : "None Identified"}</h5>
        <p>Last Updated at {updated_at}</p>
      </div>
    </>
  );
}