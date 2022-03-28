import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/atoms/Button';
// import { type } from '@testing-library/user-event/dist/type';
import Form from "./components/molecules/Form"

type DataState = [string[], any];
type FormData = [{ name: string; job: string}, any];

const fields = [
  {
      label: "name",
      placeholder: "input your name",
  },
  {
      label: "job",
      placeholder: "input your job"
  }
];
const App: React.FC = () => {
  const [data, setData]: dataState = useState([]);

const App: React.FC = () => {
  const [data, setData]: DataState = useState([]);
  const [formData, setFormData]: FormData = useState([]);
  const handleButtonPress = (payload: string[]) => {
    setData([...data, ...payload]);
  };
  return (
    <div>
      <h1>Hello World</h1>
      <Button 
        buttonText="Small Button"
        onPress={(payload: string []) => handleButtonPress(payload)}/>
        {data.length > 0 &&
          data.map((el: string, idx: number) -> {
            return <h5 key={idx}>{el}</h5>
          })}
    </div>
  );
};

export default App;
