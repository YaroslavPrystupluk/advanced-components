import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";

function App() {
    return (
        <main>
            <h1>Let's get started!</h1>
            <Input id='name' label='Your name' type='text'/>
            <Input id='age' label='Your age' type='number'/>
            <Input id='password' label='Your pasword' type='password'/>

            <div className='flex'>
                <Button type='button' onClick={() => {
                    console.log('clicked')}}>A Button</Button>
                <Button href='https://google.com'>A Link</Button>
            </div>
        </main>
    );
}

export default App
