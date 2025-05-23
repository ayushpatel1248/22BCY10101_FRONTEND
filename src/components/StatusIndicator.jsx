export default function StatusIndicator({ status }) {
  if (status === "loading") {
    return (
      <div className='loading-container w-full mt-20 items-center'>
        <div className='loading-spinner'></div>
      </div>
    );
  }

  if (status === "no-results") return <p>No results found.</p>;
  return null;
}