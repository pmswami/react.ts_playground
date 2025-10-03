
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  // const personName={
  //   first:"Bruce",
  //   last: "Wayne"
  // }

  // const nameList = [
  //   {
  //     first:"Bruce",
  //     last:"Wayne"
  //   },
  //   {
  //     first:"Clark",
  //     last:"Kent"
  //   },
  //   {
  //     first:"Princess",
  //     last:"Diana"
  //   }
  // ]
  return (
    <div className="App">
      {/* <Greet name="Swamfire" messageCount={20} isLoggedIn={false} /> */}
      {/* <Person name={personName}/> */}
      {/* <PersonList names={nameList}/> */}
      {/* <Status status="loading"/> */}
      {/* <Status status="error"/> */}
      {/* <Status status="success"/>   */}
      {/* <Heading>Placeholder Text</Heading> */}
      {/* <Oscar><Heading>Oscar Goes to Decaprio</Heading></Oscar> */}
      {/* <Greet name='Swam' isLoggedIn={true}/> */}
      <Button handleClick={(event, id)=>{
        console.log("Button Clicked", event,id)
      }}/>
      <Input value="" handleChange={(event)=>console.log(event)}/>
    </div>
     
  );
}

export default App;
