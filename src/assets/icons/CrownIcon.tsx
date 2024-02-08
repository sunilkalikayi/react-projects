const CrownIcon = () => {
    return (
        <svg width="112" height="70" viewBox="0 0 112 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_86)">
                <path d="M106 60H6V15.4012L23 32L56 2L89 31.8323L106 15.4012V60Z" fill="url(#paint0_linear_1_86)" />
                <path
                    d="M106 60H6V15.4012L23 32L56 2L89 31.8323L106 15.4012V60Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linejoin="round"
                />
            </g>
            <defs>
                <filter
                    id="filter0_d_1_86"
                    x="0"
                    y="0"
                    width="112"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_86" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_86" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_1_86" x1="6" y1="2" x2="106" y2="2" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFFF64" />
                    <stop offset="1" stop-color="#FF5475" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default CrownIcon;
