export default function ProductCard({ type, gradient, description, prices, onLoginClick }) {
  return (
    <div className="product-card">
      <div className={`product-banner ${gradient}`}>{type}</div>
      <div className="description">
        {description.split('\n').map((line, i) => <div key={i}>{line}</div>)}
      </div>
      <div className="price-select">
        <select>
          {prices.map((p, i) => <option key={i}>{p}</option>)}
        </select>
        <div className="btns">
          <button className="btn info">소개</button>
          <button className="btn login" onClick={onLoginClick}>로그인</button>
        </div>
      </div>
    </div>
  )
}
