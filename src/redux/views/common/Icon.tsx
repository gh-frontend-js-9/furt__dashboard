import React from "react";

export const Icon = () => {
    const icons = [
        'fa-bars',
        'fa-line-chart',
        'fa-envelope',
        'fa-users',
    ];
    let renderIcon = icons.map((icon: string, n: number) => {
        return <span key={n} className="sidebar__item">
            <a href="#">
                <i className={`${icon} fa fa--color fa--hovered fa-2x`} aria-hidden="true"> </i>
            </a>
        </span>
    });
    return (
            <>{renderIcon}</>
    )
};

