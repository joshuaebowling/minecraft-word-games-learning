import React from "react"
import { useParams, Link } from "react-router-dom"
const Navigator: React.FC = () => {
  const getLink = (pageNumber:number) => `/ShowNames/${pageNumber}/start`
  const { current } = useParams()
  //@ts-ignore    
  const backLink = () => getLink(parseInt(current)-1)
  //@ts-ignore    
  const nextLink = () => getLink(parseInt(current)+1)
  return <>
    <div>
      <Link to={backLink()}>back</Link>
      <Link to={nextLink()}>next</Link>
    </div>
  </>
}

export default Navigator