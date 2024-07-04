import { lazy } from 'react';

import Template from "./app/template/template";

let routes: any = [
{ path: "", component: Template },
]
export let userRoutes: any;
    if (sessionStorage.getItem("screens")) {
     
      userRoutes = JSON.parse(sessionStorage.getItem("screens") || " ");
    } else {
      userRoutes = [];
    }
    
export default routes;