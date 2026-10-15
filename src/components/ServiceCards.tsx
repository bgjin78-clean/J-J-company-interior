import type { ServiceItem } from '../data/services'

export function ServiceCards({ items }: { items: ServiceItem[] }) {
  return (
    <div className="svc-grid">
      {items.map((item, index) => (
        <article key={item.id} id={item.id} className="svc-card">
          <img src={item.image} alt={item.imageAlt} />
          <div className="svc-body">
            <span className="svc-no">{String(index + 1).padStart(2, '0')}</span>
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
