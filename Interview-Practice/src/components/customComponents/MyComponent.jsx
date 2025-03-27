import React from 'react';
import useFetch from './useFetch';

export default function MyComponent() {
  const {data,loading} = useFetch("https://fake-json-api.mock.beeceptor.com/users");

  if (loading) return <p>Loading...</p>
  return (
    
    <div>
      <ul>
        {data.map((person)=>(
          <li key={person.id}>
            <h2>{person.name}</h2>
            <p>{person.email}</p>
          </li>
          
        ))}
      </ul>
    </div>
  )
}
