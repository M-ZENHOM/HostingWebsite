import { AlignJustify, CheckIcon, ChevronLeft, ChevronRight, DeleteIcon, EyeIcon, Globe, LayoutGrid, LinkedinIcon, MoonStarIcon, ShoppingCartIcon, Sun, TrashIcon } from "lucide-react";

type IconProps = React.HTMLAttributes<SVGElement>

export const Icons = {
    sun: Sun,
    moon: MoonStarIcon,
    logo: Globe,
    MobileNavIcon: AlignJustify,
    Check: CheckIcon,
    Eye: EyeIcon,
    Delete: TrashIcon,
    Cart: ShoppingCartIcon,
    linkedIn: LinkedinIcon,
    leftArrow: ChevronLeft,
    rightArrow: ChevronRight,
    twitter: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z" />
        </svg>
    ),
    gitHub: (props: IconProps) => (
        <svg viewBox="0 0 438.549 438.549" {...props}>
            <path
                fill="currentColor"
                d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
            ></path>
        </svg>
    ),
    grid: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 1500" {...props}>
            <path fill="currentColor" d="M0 0h2000v1500H0z" />
            <defs>
                <pattern
                    id="b"
                    width={3}
                    height={3}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <use y={2} fill="#fcfcfc" href="#a" />
                    <use x={1} y={2} fill="#fcfcfc" href="#a" />
                    <use x={2} y={2} fill="#fafafa" href="#a" />
                    <use fill="#fafafa" href="#a" />
                    <use x={2} fill="#f7f7f7" href="#a" />
                    <use x={1} y={1} fill="#f7f7f7" href="#a" />
                </pattern>
                <pattern
                    id="c"
                    width={7}
                    height={11}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#f5f5f5">
                        <use href="#a" />
                        <use y={5} href="#a" />
                        <use x={1} y={10} href="#a" />
                        <use x={2} y={1} href="#a" />
                        <use x={2} y={4} href="#a" />
                        <use x={3} y={8} href="#a" />
                        <use x={4} y={3} href="#a" />
                        <use x={4} y={7} href="#a" />
                        <use x={5} y={2} href="#a" />
                        <use x={5} y={6} href="#a" />
                        <use x={6} y={9} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="d"
                    width={5}
                    height={13}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#f5f5f5">
                        <use y={5} href="#a" />
                        <use y={8} href="#a" />
                        <use x={1} y={1} href="#a" />
                        <use x={1} y={9} href="#a" />
                        <use x={1} y={12} href="#a" />
                        <use x={2} href="#a" />
                        <use x={2} y={4} href="#a" />
                        <use x={3} y={2} href="#a" />
                        <use x={3} y={6} href="#a" />
                        <use x={3} y={11} href="#a" />
                        <use x={4} y={3} href="#a" />
                        <use x={4} y={7} href="#a" />
                        <use x={4} y={10} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="e"
                    width={17}
                    height={13}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#f2f2f2">
                        <use y={11} href="#a" />
                        <use x={2} y={9} href="#a" />
                        <use x={5} y={12} href="#a" />
                        <use x={9} y={4} href="#a" />
                        <use x={12} y={1} href="#a" />
                        <use x={16} y={6} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="f"
                    width={19}
                    height={17}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#fff">
                        <use y={9} href="#a" />
                        <use x={16} y={5} href="#a" />
                        <use x={14} y={2} href="#a" />
                        <use x={11} y={11} href="#a" />
                        <use x={6} y={14} href="#a" />
                    </g>
                    <g fill="#efefef">
                        <use x={3} y={13} href="#a" />
                        <use x={9} y={7} href="#a" />
                        <use x={13} y={10} href="#a" />
                        <use x={15} y={4} href="#a" />
                        <use x={18} y={1} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="g"
                    width={47}
                    height={53}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#F60">
                        <use x={2} y={5} href="#a" />
                        <use x={16} y={38} href="#a" />
                        <use x={46} y={42} href="#a" />
                        <use x={29} y={20} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="h"
                    width={59}
                    height={71}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#F60">
                        <use x={33} y={13} href="#a" />
                        <use x={27} y={54} href="#a" />
                        <use x={55} y={55} href="#a" />
                    </g>
                </pattern>
                <pattern
                    id="i"
                    width={139}
                    height={97}
                    patternTransform="matrix(50 0 0 50 -49000 -36750)"
                    patternUnits="userSpaceOnUse"
                >
                    <g fill="#F60">
                        <use x={11} y={8} href="#a" />
                        <use x={51} y={13} href="#a" />
                        <use x={17} y={73} href="#a" />
                        <use x={99} y={57} href="#a" />
                    </g>
                </pattern>
                <path id="a" stroke="#fff" strokeWidth={0.5} d="M0 0h1v1H0z" />
            </defs>
            <rect width="100%" height="100%" fill="url(#b)" />
            <rect width="100%" height="100%" fill="url(#c)" />
            <rect width="100%" height="100%" fill="url(#d)" />
            <rect width="100%" height="100%" fill="url(#e)" />
            <rect width="100%" height="100%" fill="url(#f)" />
            <rect width="100%" height="100%" fill="url(#g)" />
            <rect width="100%" height="100%" fill="url(#h)" />
            <rect width="100%" height="100%" fill="url(#i)" />
        </svg>
    )
}