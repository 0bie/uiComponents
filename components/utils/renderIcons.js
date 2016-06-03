import React from 'react';
import Icon from '../Icon';

const renderIcons = (icons) => {
    if (icons && icons.length) {
        return icons.map((props, i) => {
            return <button key={i}>
                <Icon {...props} />
            </button>;
        });
    }
};
export default renderIcons;