import { Footer, NavBar } from '@/components';
import React from 'react';


type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <div>
            <NavBar />
            {children} 
            <Footer />
        </div>
    );
}