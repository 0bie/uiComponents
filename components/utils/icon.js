import React from 'react';
import Icon from '../Icon';

export const renderIcons = (icons) => {
    if (icons && icons.length) {
        return icons.map((props, i) => {
            return <button key={i}>
                <Icon {...props} />
            </button>;
        });
    }
};

export const renderIcon = (icon, size) => {
    if (icon && icon.length) {
        return <Icon name={icon} size={size} title={icon}/>;
    }
    return icon && <Icon {...icon} />;
};