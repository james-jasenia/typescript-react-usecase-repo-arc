import React from 'react';
import HelloViewModel from './HelloViewModel';

type HelloProps = {
    viewModel: HelloViewModel;
};

const Hello: React.FC<HelloProps> = ({ viewModel }) => {
    return (
        <div>
            <h1>Hello, {viewModel.getName()}!</h1>
            <p>Welcome to TypeScript React.</p>
        </div>
    );
};

export default Hello;
