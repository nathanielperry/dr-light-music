import 'normalize.css'
import React from 'react';
import './src/styles/global.css';
import Layout from './src/components/Layout';

export function wrapRootElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>
}