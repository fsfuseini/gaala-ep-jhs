export default function SectionHeading({ kicker, title, lede }) {
  return (
    <>
      <div className="section-head">
        <h2>{title}</h2>
        {kicker && <span className="section-kicker">{kicker}</span>}
      </div>
      {lede && <p className="section-lede">{lede}</p>}
    </>
  );
}
