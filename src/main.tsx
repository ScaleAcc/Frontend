import ReactDOM from 'react-dom/client'
// Redux
// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/global.css"
import { NextUIProvider } from '@nextui-org/react';
import {Input} from "@nextui-org/react";
const placements = [
    "inside",
    "outside",
    "outside-left",
  ];
ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
        <p>SS</p>
    </NextUIProvider>
);
