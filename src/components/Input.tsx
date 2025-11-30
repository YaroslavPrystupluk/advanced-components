import type { ComponentPropsWithoutRef, FC} from "react";

type Props={
    id: string,
    label: string,
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<Props> = ({id, label, ...props}) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
                <input name={id} {...props}/>

        </p>
    );
};

export default Input;