import { Link } from 'react-router-dom'
import type { Story } from '../data/stories'

export function StoryList({
  stories,
  linked = false,
  compact = false,
}: {
  stories: Story[]
  linked?: boolean
  compact?: boolean
}) {
  return (
    <div className={compact ? 'review-list is-compact' : 'review-list'}>
      {stories.map((story) => (
        <article key={story.id}>
          <p>
            {story.area} · {story.category}
          </p>
          <h2>{story.title}</h2>
          <p>{story.body}</p>
          {linked ? (
            <Link className="text-link" to={`/areas/${story.slug}`}>
              {story.area} 글 더 보기
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  )
}
