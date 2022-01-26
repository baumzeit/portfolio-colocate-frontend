import React from 'react'

type IntroProps = { title: string; text: string }
export const Intro = ({ text, title }: IntroProps) => (
  <div>
    <h1 className="mb-1 text-2xl font-bold">{title}</h1>
    <div className="text-secondary">{text}</div>
  </div>
)
