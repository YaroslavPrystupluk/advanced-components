import type {ComponentPropsWithoutRef, ComponentType, ElementType, FC, ReactNode} from 'react';

type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<ComponentType>
const Container: FC<ContainerProps<ElementType>> = <C extends ElementType>(
    {as, children, ...props}: ContainerProps<C>
) => {
    let Component = as || 'div';
    return (

        <Component {...props} >
            {children}
        </Component>
    );
};

export default Container;