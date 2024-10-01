import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'

function Education({ education }: { education: ArticleWithSlug }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="mb-4 md:col-span-3">
        <Card.Title>{education.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={education.date}
          className="md:hidden"
          decorate
        >
          {education.date}
        </Card.Eyebrow>
        <Card.Description>{education.description}</Card.Description>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={education.date}
        className="mt-1 hidden md:block"
      >
        {education.date}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Education',
  description:
    'A journey through my academic achievements in science and technology, shaping my path to software development.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="From academic excellence to a career in software development."
      intro="A journey through my academic achievements in science and technology, shaping my path to software development."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Education key={article.slug} education={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
