import {
    type ComponentPropsWithoutRef,
    type FormEvent,
    forwardRef,
    useImperativeHandle,
    useRef
} from 'react';

export type FormHandle = {
    clear: () => void;
};

type FormProps = {
    onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<'form'>;


const Form = forwardRef<FormHandle, FormProps>(({onSave, children, ...props}: FormProps, ref) => {
    const formRef = useRef<HTMLFormElement>(null)

    useImperativeHandle(ref, () => {
        return {
            clear() {
                formRef.current?.reset()
            }
        }
    })

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData)
        onSave(data)
    }

    return (
        <form onSubmit={handleSubmit} ref={formRef} {...props}>
            {children}
        </form>
    );
});

export default Form;