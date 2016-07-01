import React from 'react';

export const renderItems = (items) => {
    if (items && items.length) {
        return items.map((item, i) => {
            return <li styleName="item" key={i}>
              {item.title}
              {item.children}
            </li>;
        });
    }
};