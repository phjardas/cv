import React from 'react'
import Markdown from 'react-markdown'

export default ({ profile: { profile } }) => <Markdown source={profile} />
