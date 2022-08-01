import { Icon, IconProps } from "@chakra-ui/react";

export const WarningIcon = (props: IconProps) => (
    <Icon data-testid="WarningIcon" viewBox="0 0 16 16" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.44442 1.1091C8.01781 0.39332 6.98121 0.39332 6.5546 1.1091L0.16069 11.8372C-0.276313 12.5704 0.252015 13.5003 1.10559 13.5003H13.8934C14.747 13.5003 15.2754 12.5704 14.8383 11.8372L8.44442 1.1091ZM7.41361 1.62107C7.45239 1.556 7.54663 1.556 7.58541 1.62107L13.9793 12.3491C14.0191 12.4158 13.971 12.5003 13.8934 12.5003H1.10559C1.028 12.5003 0.979966 12.4158 1.01969 12.3491L7.41361 1.62107ZM6.82641 4.98645C6.81173 4.60456 7.11734 4.28697 7.49951 4.28697C7.88168 4.28697 8.1873 4.60456 8.17261 4.98645L8.01873 8.98735C8.008 9.26634 7.77871 9.48698 7.49951 9.48698C7.22031 9.48698 6.99102 9.26634 6.98029 8.98735L6.82641 4.98645ZM8.2494 10.9763C8.2494 11.3905 7.91361 11.7263 7.4994 11.7263C7.08519 11.7263 6.7494 11.3905 6.7494 10.9763C6.7494 10.5621 7.08519 10.2263 7.4994 10.2263C7.91361 10.2263 8.2494 10.5621 8.2494 10.9763Z"
            fill="currentColor"
        />
    </Icon>
);

export default WarningIcon;