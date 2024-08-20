
import { useAppSelector } from '../../libs/redux/hooks'

export default function JupiterButton() {

    const theme = useAppSelector(state => state.theme.current.styles)

    return (
        
            //<IconButton style={{ border: 'solid thin red', borderColor: theme.bgColor == '#0000FF' ? theme.bgColor:theme.bgColor }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1920_1741)">
                    <path d="M20.5333 1.52635C20.5074 1.46849 20.4653 1.41942 20.412 1.38509C20.3588 1.35076 20.2967 1.33267 20.2333 1.33301H10.9466C10.8909 1.33311 10.836 1.34719 10.7871 1.37398C10.7382 1.40077 10.6968 1.4394 10.6666 1.48635L3.52663 12.8197C3.49226 12.869 3.47218 12.9269 3.4686 12.9869C3.46502 13.047 3.47808 13.1068 3.50635 13.1599C3.53461 13.213 3.57698 13.2573 3.62879 13.2878C3.6806 13.3183 3.73983 13.334 3.79997 13.333H8.9133L4.39997 22.1663C4.37406 22.2189 4.36188 22.2771 4.36457 22.3356C4.36726 22.3941 4.38473 22.451 4.41536 22.501C4.44598 22.5509 4.48876 22.5922 4.53969 22.6212C4.59063 22.6501 4.64806 22.6656 4.70663 22.6663H6.70663C6.7529 22.6667 6.79873 22.6573 6.84119 22.639C6.88366 22.6206 6.92184 22.5936 6.9533 22.5597L18.6666 9.89968C18.7131 9.85228 18.7444 9.79208 18.7565 9.72678C18.7685 9.66148 18.7608 9.59407 18.7343 9.53319C18.7078 9.47231 18.6637 9.42073 18.6077 9.38506C18.5517 9.3494 18.4863 9.33127 18.42 9.33301H13.9266L20.48 1.87968C20.5222 1.83233 20.5498 1.7737 20.5592 1.71095C20.5687 1.6482 20.5597 1.58406 20.5333 1.52635Z" fill={theme.bgColor == '#0000FF' ? theme.text_color:theme.text_color}/>
                    </g>
                    <defs>
                    <clipPath id="clip0_1920_1741">
                    <rect width="24" height="24" fill={theme.bgColor == '#0000FF' ? theme.text_color:theme.text_color}/>
                    </clipPath>
                    </defs>
                    </svg>

            
        
    )
}