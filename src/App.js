// import logo from './logo.svg';
import './App.css';
import './style/index.css'
import Test1 from './components/test1';
import Test2 from './components/test2';
import Hello from './components/test3';
import Counter from './components/test4';
import Counter2 from './components/test5';
import Counter3 from './components/test6';
import Counter4 from './components/test7';
import Converter from './components/test8';
import ContactManager from './components/test9';
import ContactManager2 from './components/test10';
import Counter5 from './components/test11';
import ContactManager3 from './components/ContactManager3';

function App() {
  return (
    <div>
      <ContactManager3/>
      <Counter5/>
      <ContactManager2/>
      <ContactManager/>
      <Converter/>
      <Counter4/>
      <Counter3/>
      <Counter2/>
      <Counter/>
      <Test1 name="Nam"/>
      <Test2 name="Kien Nam" isNew={false}/>
      <Test2 name="Kien Nam" isNew={true}/>
      <Hello another={false}/>
      <Hello another={true}/>
      <Hello another={'okok'}/>
    </div>
  );
}

export default App;
