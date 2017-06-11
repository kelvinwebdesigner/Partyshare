import { h } from 'preact';
import styles from './IconFolder.css';

const IconFolder = ({
    className,
    children,
    filled = false,
    ...props
}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 125"
      class={`${styles.this} ${className ? className : ''}`}
      {...props}
    >
        { filled ?
            <path d="M13 18c-2.77 0-5 2.23-5 5v54c0 2.77 2.23 5 5 5h74c2.77 0 5-2.23 5-5V39c0-2.77-2.23-5-5-5H51l-6-11c-1.326-2.432-3.23-5-6-5zm36.5 8l3.5 6h35.75c1.076.068 2.81.753 3.25 1 0-3.74-3.26-7-7-7z" overflow="visible" />
        :
            <path d="M13 16c-3.843 0-7 3.157-7 7v54c0 3.843 3.157 7 7 7h74c3.843 0 7-3.157 7-7V33c0-4.902-4.098-9-9-9H47.812l-1.062-1.969c-.714-1.309-1.582-2.728-2.813-3.906C42.708 16.947 41.004 16 39 16zm0 4h26c.767 0 1.41.317 2.156 1.031.746.714 1.482 1.784 2.094 2.906l6 11A2.043 2.043 0 0 0 51 36h36c1.697 0 3 1.303 3 3v38c0 1.697-1.303 3-3 3H13c-1.697 0-3-1.303-3-3V23c0-1.697 1.303-3 3-3zm37 8h35c2.47 0 4.779 2.234 4.969 4.687A6.886 6.886 0 0 0 87 32H52.187z" style="text-indent:0;text-transform:none;block-progression:tb" overflow="visible" />
        }
    </svg>
);

export default IconFolder;
