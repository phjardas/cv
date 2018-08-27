import React from 'react'
import Markdown from 'react-markdown'

export default ({ experience }) => (
  <div>
    {experience.map(exp => (
      <Experience key={exp.id} job={exp} />
    ))}
  </div>
)

const Experience = ({
  job: { position, company, from, until, location, description, technologies },
}) => (
  <div>
    <h3>
      {position} <small>at</small> {company}
    </h3>
    <p>
      <small>
        {new Date(from.split('+')[0]).toLocaleDateString(undefined, {
          month: 'long',
          year: 'numeric',
        })}
        {' – '}
        {until
          ? new Date(until.split('+')[0]).toLocaleDateString(undefined, {
              month: 'long',
              year: 'numeric',
            })
          : 'today'}{' '}
        in {location}
      </small>
    </p>
    <Markdown source={description} />
    {technologies && (
      <small>
        <Markdown source={technologies} />
      </small>
    )}
  </div>
)
