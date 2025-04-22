import React, {useState} from "react"

const NameLetter: React.FC<{letter: string, show: boolean}> = ({letter, show}) => {
  const [displayChar, setDisplayChar] = useState<string>("?")
  const showLetter = () => {
    setDisplayChar(letter)
  }
  if(show || letter === " ") return <span>{letter}</span>
  return <>
    <span onClick={showLetter}>{displayChar}</span>
  </>
}

export default NameLetter