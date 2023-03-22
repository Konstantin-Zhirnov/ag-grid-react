import React from 'react';


export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => {
        return {
            onParentModeChanged(parentModel: any) {
                console.log('onParentModeChanged', parentModel)
            }
        }
    });
    return (<>Hello</>)
});
