export default function DisplaySimpson({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
        <img src={quote.image} alt={quote.character} />
        <div>
          <h3>{quote.character}</h3>
          <q>{quote.quote}</q>
        </div>
      </div>
    )
  );
}
