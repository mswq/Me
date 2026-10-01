// Thin line icons, drawn on a 24px grid and sized by the text around them
const Icon = ({ children }) => (
    <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
)

export const AllIcon = () => (
    <Icon>
        <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
        <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
    </Icon>
)

export const HardwareIcon = () => (
    <Icon>
        <rect x="7" y="7" width="10" height="10" rx="1.5" />
        <path d="M10 3.5V7M14 3.5V7M10 17v3.5M14 17v3.5M3.5 10H7M3.5 14H7M17 10h3.5M17 14h3.5" />
    </Icon>
)

export const SoftwareIcon = () => (
    <Icon>
        <path d="M8.5 7.5 4 12l4.5 4.5M15.5 7.5 20 12l-4.5 4.5" />
    </Icon>
)

export const MailIcon = () => (
    <Icon>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="m4 7 8 6 8-6" />
    </Icon>
)

export const InstagramIcon = () => (
    <Icon>
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M16.6 7.4h.01" />
    </Icon>
)
