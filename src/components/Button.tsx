import {type ComponentPropsWithoutRef, type FC} from 'react';

type PropsButton = ComponentPropsWithoutRef<'button'> & {
    href?: never
};
type PropsAnchor = ComponentPropsWithoutRef<'a'> & {
    href?: string
}

const isAnchorProps = (props: PropsAnchor | PropsButton): props is PropsAnchor => {
    return 'href' in props;
}
const Button: FC<PropsButton | PropsAnchor> = ({...props}) => {

    if(isAnchorProps(props)) {
        return <a className='button' {...props}/>
    }

    return <button className='button' {...props}></button>

};

export default Button;