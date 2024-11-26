// react-input-mask.d.ts
declare module 'react-input-mask' {
    import { ComponentType } from 'react';

    interface InputMaskProps {
        mask: string;
        value: string;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        [key: string]: any;
    }

    const InputMask: ComponentType<InputMaskProps>;
    export default InputMask;
}
