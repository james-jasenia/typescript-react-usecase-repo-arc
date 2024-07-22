import React from 'react';
import HelloViewModel from './HelloViewModel';

type HelloProps = {
    viewModel: HelloViewModel;
};

const Hello: React.FC<HelloProps> = ({ viewModel }) => {
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Hello;
