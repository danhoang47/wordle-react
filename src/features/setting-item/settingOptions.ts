
import type { SettingOption } from "@/core/types";

const settingOptions: SettingOption[] = [
    {
        type: "switch",
        stateKey: "hardMode",
        description: "Any revealed hints must be used in subsequent guesses",
        ariaLabel: 'Hard Mode Switch',
        title: "Hard Mode"
    },
    {
        type: "switch",
        stateKey: "darkTheme",
        title: "Dark Theme",
        ariaLabel: 'Dark Theme Switch',
    },
    {
        type: "switch",
        stateKey: "highContrastMode",
        title: "High Contrast Mode",
        description: "For improved color vision",
        ariaLabel: 'High Contrast Mode Switch',
    }, 
    {
        type: "link",
        href: "https://www.google.com",
        title: "Feedback",
        label: "Email",
        ariaLabel: 'Feedback Link'
    },
    {
        type: "link",
        href: "https://www.google.com",
        title: "Report a Bug",
        label: "Email",
        ariaLabel: 'Report Link'
    },
    {
        type: "link",
        href: "https://www.google.com",
        title: "Community",
        label: "Wordle Review",
        ariaLabel: 'Community Link'
    },
    {
        type: "link",
        href: "https://www.google.com",
        title: "Questions?",
        label: "FAQ",
        ariaLabel: 'FAQ Link'
    }
]

export default settingOptions;