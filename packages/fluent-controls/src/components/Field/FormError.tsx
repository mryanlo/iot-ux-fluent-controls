import * as React from 'react';
import * as classNames from 'classnames/bind';
import {DivProps, Elements as Attr} from '../../Attributes';
const css = classNames.bind(require('./Field.scss'));

export interface FormErrorType {}

export interface FormErrorAttributes {
    container?: DivProps;
}

export interface FormErrorProps extends React.Props<FormErrorType> {
    /** Hide error */
    hidden?: boolean;

    /** Classname to append to top level element */
    className?: string;

    attr?: FormErrorAttributes;
}

/**
 * Form Error
 * 
 * @param props Control properties (defined in `FormErrorProps` interface)
 */
export const FormError: React.StatelessComponent<FormErrorProps> = (props: FormErrorProps) => {
    return (
        <Attr.div 
            className={css('field-error', {
                'hidden': props.hidden
            }, props.className)}
            attr={props.attr.container}
        >
            {props.children}
        </Attr.div>
    );
};

FormError.defaultProps = {
    attr: {
        container: {}
    }
};

export default FormError;