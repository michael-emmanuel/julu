import Thumbnail from "./Thumbnail";

function Results({ results }) {
  // NextJS lazy loads images out the box
  return (
    <div>
      {results.map(result => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Results;