'use strict';

import React from 'react';
import { Link } from 'react-router';

import URLs from '../../urls';


let jobFailBuildsWidgetTemplate = [
    (item, index) => {
        let link = URLs.build.link(item.job.name, item.name);

        return ( <Link to={link} key={`fail_build_title_${index}`}>{item.title}</Link> )
    },
    (item, index) => {
        return ( <small key={`fail_build_date_${index}`}>{item.date}</small> )
    }
];


export default jobFailBuildsWidgetTemplate