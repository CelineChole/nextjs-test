import { useEffect, useState } from "react";
import useSWR from "swr";

const About = (props) => {
  const [elephantName, setElephantName] = useState("");

  useEffect(() => {
    const fetchElephant = async () => {
      const elephant = await fetch("/api/elephant");
      const res = await elephant.json();
      setElephantName(res.name);
    };
    fetchElephant();
  }, []);

  const { data, error } = useSWR("/api/elephant", (...args) => {
    return fetch(...args).then(res => res.json());
  });

  return (
    <>
      <div>Elephant from SWR {data ? data.name : ""} </div>
      {/* display error test */}
      {error && <div>Oups, error, {error.toString()}</div>}
      
      <div>Client side fetch {elephantName}</div>

      <div>Server side: {props.elephant.name}</div>
    </>
  );
};

export async function getServerSideProps(context) {
  console.log('run function')
  return {props: {elephant: {name: 'Colonnel'}}}
}

export default About;
