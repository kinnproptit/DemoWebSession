import React from 'react'

export const Part = ({ sentences }) => {
  return sentences.length === 0 ? (
    <span>Không có nội dung phiên họp</span>
  ) : (
    sentences.map(({ text }) => text + ' ')
  )
}
