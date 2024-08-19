import React from 'react'
import jsonFile from '@/dict.json'
import parser from "html-react-parser"



export default function page() {
  return (
    <div>
        {jsonFile.map(item => (
            <div key={item.createdAt} className=''>{parser(item.body)}</div>
        ))}
    </div>
  )
}
