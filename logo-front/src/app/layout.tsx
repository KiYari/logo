import {FC, ReactNode} from 'react';
import './globals.css'
import Header from "@/layout/header/Header";
import React from 'react';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css';

interface LayoutProps {
    children : ReactNode
}

const RootLayout : FC < LayoutProps > = ({children}) => {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Header/>
                    <body>{children}</body>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

export default RootLayout;
