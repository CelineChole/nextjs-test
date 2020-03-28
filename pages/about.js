import { useEffect, useState } from 'react';

const About = () => {

  const [elephantName, setElephantName] = useState('');

  useEffect(() => {
    const fetchElephant = async () => {
      const elephant = await fetch('/api/elephant')
      const res = await elephant.json()
      console.log(res)
      setElephantName(res.name)
    }
    fetchElephant()
  }, [])

  return (
    <div>Client side fetch: {elephantName}</div>
  )
}

export default About