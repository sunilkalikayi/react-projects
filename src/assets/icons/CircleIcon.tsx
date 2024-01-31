import { IconPropTypes } from "../../types/IconTypes";

const CircleIcon = ({ height = 14, width = 14, fill = "#4847C4" }: IconPropTypes) => {
    return (
        <svg width={height} height={width} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5097" cy="6.98064" r="6.50323" fill={fill} />
        </svg>
    );
};

export default CircleIcon;
