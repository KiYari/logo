import {FC, ReactNode} from 'react';
import './globals.css'
import Header from "@/layout/header/Header";
import React from 'react';
import StyledComponentsRegistry from '../lib/AntdRegistry';
import './globals.css';
import Footer from '@/layout/footer/Footer';

interface LayoutProps {
    children : ReactNode
}

const RootLayout : FC < LayoutProps > = ({children}) => {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                    <Header/>
                    <main>{children}</main>
                    <Footer/>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

export default RootLayout;
