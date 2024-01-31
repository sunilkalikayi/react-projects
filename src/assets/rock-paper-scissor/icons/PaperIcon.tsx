import { IconPropTypes } from "../../../types/IconTypes";

const PaperIcon = ({ height = 98, width = 88, fill = "black" }: IconPropTypes) => {
    return (
        <svg width={width} height={height} viewBox="0 0 94 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M46.082 0.621048C44.7539 1.10933 43.6211 1.91011 42.3711 3.2187C41.082 4.60542 40.3203 5.79683 38.6992 9.03902C37.0391 12.3789 35.9844 13.8437 34.4609 14.996C32.9961 16.0898 32.3906 16.4218 27.6055 18.6484C23.1328 20.7187 21.1602 21.871 19.5781 23.3164L18.3672 24.4296L17.8008 23.9609C13.4648 20.4843 6.60937 23.2382 4.20703 29.4296C2.99609 32.5546 1.51172 38.8828 0.808593 43.9023C-0.207032 51.2656 -0.0898447 58.6679 1.10156 62.2812C2.01953 65.0351 3.99219 67.3984 6.33594 68.5507C7.625 69.1953 7.9375 69.2734 9.30469 69.2734C10.6719 69.2734 11.0039 69.1953 12.2734 68.5507L13.7188 67.8476L15.418 69.4882C18.2695 72.2421 21.7852 74.3515 25.6523 75.621C28.1523 76.4609 29.9492 76.7734 33.0352 76.9296C37.5469 77.1445 38.6992 77.5546 43.9141 80.8359C49.4023 84.2539 55.1055 86.7148 59.3828 87.457C61.668 87.8476 65.0664 87.8476 66.707 87.4375C69.4219 86.7539 71.4141 85.3671 72.3125 83.5312C72.7812 82.5742 72.8203 82.3007 72.7422 80.8554C72.6641 79.332 72.332 78.3554 71.2773 76.4023C71.2383 76.3437 72.1172 76.2265 73.2109 76.1679C78.582 75.8359 82.4492 73.8632 84.0312 70.6406C84.5195 69.6445 84.5977 69.2539 84.5977 67.8281C84.5977 66.4023 84.5195 66.0117 84.0312 65.0156C83.4062 63.746 81.9023 62.1445 80.3789 61.1093L79.3828 60.4453L79.9492 60.3476C80.2422 60.289 81.0234 60.1718 81.668 60.1132C83.582 59.8984 86.2969 59.1171 87.9375 58.3164C89.8516 57.3984 92 55.3671 92.7617 53.7656C93.875 51.4609 94.207 48.375 93.5625 46.3828C92.625 43.4921 89.3242 41.2461 84.0312 39.9179L81.9023 39.3711L82.7617 38.7656C83.25 38.4531 83.9727 37.8086 84.3828 37.3593C86.8242 34.6445 87.0391 29.7812 84.8711 26.3828C83.4844 24.2343 80.8281 22.496 77.918 21.8515C75.6914 21.3632 72.8203 21.4804 63.9336 22.4179C54.793 23.375 51.4336 23.6875 51.3359 23.6093C51.3164 23.5703 52 22.5937 52.8789 21.4218C57.1562 15.6796 58.1914 10.2304 55.9258 5.42574C55.0273 3.5312 53.3867 1.79292 51.7266 0.992142C50.6133 0.445267 50.1836 0.34761 48.7578 0.289017C47.5078 0.249954 46.8437 0.328079 46.082 0.621048ZM50.2812 4.17574C51.9023 4.97652 53.3281 7.39839 53.5625 9.80074C53.7187 11.5 53.1914 13.9609 52.2734 15.8359C51.8242 16.7343 50.5156 18.7265 49.3437 20.2695C48.1719 21.8125 46.9023 23.6484 46.5117 24.3711C45.5156 26.1289 44.6172 28.7656 43.8945 31.9296C43.1133 35.4453 42.5078 36.6171 40.4766 38.6289C37.9375 41.1484 35.6523 42.0468 31.6484 42.0468C29.7539 42.0468 29.4414 42.0859 29.0703 42.4375C28.1328 43.3164 28.3867 44.8007 29.5391 45.289C30.418 45.6601 33.5625 45.6406 35.4375 45.25C39.4023 44.4492 42.8203 42.1054 45.125 38.6484C46.1211 37.125 46.7461 35.5429 47.2148 33.2968C47.6836 30.9726 48.0547 29.5664 48.6016 28.2187L48.9922 27.2031H50.2031C51.7266 27.2031 56.043 26.7929 64.1875 25.8945C72.1367 25.0156 76.5312 24.8984 78.2891 25.5625C81.3359 26.7343 82.8203 28.7656 82.8203 31.8125C82.8008 35.2109 80.6914 36.7734 74.4023 38.0234C72.3711 38.4336 71.3164 38.5312 68.7383 38.5312C64.1875 38.5312 59.3633 39.0976 58.3281 39.7617C57.4687 40.289 57.3125 41.5586 57.9961 42.3593C58.5625 43.0234 59.0898 43.0429 61.6484 42.5351C63.25 42.2031 64.4023 42.1445 69.9492 42.1445C76.5508 42.1445 78.0742 42.2617 81.9219 43.0429C86.2578 43.9218 89.1484 45.3867 90.0859 47.164C90.457 47.8671 90.4375 49.7421 90.0469 51.0312C89.4414 53.0429 88.2695 54.2929 86.0039 55.3281C83.3867 56.5 80.5938 56.8906 74.8906 56.8906C70.9844 56.8906 70.75 56.871 68.7578 56.3046C64.793 55.1914 59.3828 54.332 54.7148 54.039C52.5664 53.9218 52.5469 53.9218 51.9219 54.4492C51.4336 54.8593 51.2969 55.1132 51.2969 55.6796C51.3164 57.0664 51.8828 57.3789 54.6172 57.5546C65.6914 58.2773 76.8047 61.7734 80.1836 65.6015C82.4102 68.1406 80.6914 70.9726 76.1797 72.2226C74.7148 72.6328 70.3398 72.8281 68.6797 72.5546C67.6445 72.3789 66.9805 72.0859 65.0664 70.9335C62.0977 69.1367 58.8164 67.5546 54.6562 65.9335C50.8867 64.4687 50.1055 64.3515 49.4219 65.1523C48.8555 65.8164 48.7969 66.832 49.3047 67.3984C49.4805 67.6328 51.082 68.3554 52.9961 69.0976C59.8125 71.6953 64.6562 74.3515 66.9023 76.7148C69.2461 79.1953 69.9102 81.4023 68.6797 82.6523C67.7031 83.6093 66.1602 84.0976 63.6602 84.1953C58.8164 84.371 52.8398 82.2617 45.8477 77.8867C40.1836 74.332 38.6602 73.7851 33.8555 73.4726C32.1562 73.375 30.1445 73.1601 29.3828 73.0039C23.1719 71.6953 17.0977 67.5351 14.832 63.0429C14.1484 61.7148 13.8359 60.5429 13.6211 58.6093C13.4258 56.8515 13.4648 56.1289 13.9141 53.2382C14.0312 52.496 13.9727 52.3593 13.4453 51.8125C13.0156 51.3828 12.6641 51.2265 12.1953 51.2265C10.9062 51.246 10.418 52.1054 10.1055 54.9765C9.8125 57.5351 10.1055 60.3476 10.8867 62.5546C11.668 64.7812 11.668 64.8984 10.8867 65.3671C8.875 66.5585 6.29687 65.1523 4.8125 62.0664C2.64453 57.5546 3.5625 43.414 6.6875 33.1015C7.52734 30.3476 8.11328 29.1757 9.24609 27.9648C11.375 25.6796 14.5391 25.3281 16.2188 27.1836C16.5312 27.5351 16.5508 27.6914 16.3555 28.4531C15.8477 30.4843 16.375 31.6953 17.7422 31.6953C18.7578 31.6953 19.207 31.2461 19.6562 29.7812C20.7305 26.1679 22.1367 25.0546 30.2031 21.3632C37.1953 18.1406 39.0898 16.3437 42.2344 9.97652C43.7578 6.85152 44.9297 5.28902 46.4141 4.39058C47.7031 3.62886 48.9727 3.55074 50.2812 4.17574Z"
                fill={fill}
            />
        </svg>
    );
};

export default PaperIcon;