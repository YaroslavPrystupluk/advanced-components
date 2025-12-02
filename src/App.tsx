import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";
import {useRef} from "react";
import Form, {type FormHandle} from "./components/Form.tsx";

function App() {
    const inputRef = useRef<HTMLInputElement>(null);
    const customForm = useRef<FormHandle>(null);


    function handleSave(data: unknown) {
        const extractedData = data as { name: string; age: string };
        customForm.current?.clear();

        console.log(extractedData);
        return extractedData;
    }

    return (
        <main>
            <h1>Let's get started!</h1>
            <Input id='name' label='Your name' type='text' ref={inputRef} />
            <Input id='age' label='Your age' type='number'/>
            <Input id='password' label='Your pasword' type='password'/>

            <div className='flex'>
                <Button type='button'>A Button</Button>
                <Button href='https://google.com'>A Link</Button>
            </div>
            <Form onSave={handleSave} ref={customForm}>
                <Input id='name' label='Your name' type='text'/>
                <Input id='age' label='Your age' type='number'/>
                <Button>Save</Button>
            </Form>
        </main>
    );
}

export default App
