// MyComponent.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import {Button} from "@/app/Components/UI/Button";

test('renders the component', () => {
    render(<Button message="Hello, TypeScript!" />);
    expect(screen.getByText('Hello, TypeScript!')).toBeInTheDocument();
});