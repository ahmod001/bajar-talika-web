// hero.ts
import { heroui } from "@heroui/react";
export default heroui({
    themes: {
        light: {
            colors: {
                // Background/Foreground
                background: "#FFFFFF",
                foreground: "#11181C",

                // Primary Colors (Green)
                primary: {
                    DEFAULT: "#1F6B38",
                    foreground: "#FFFFFF",  // Text color on primary
                },

                // Secondary Colors (Gray)
                secondary: {
                    DEFAULT: "#6B7280",
                    foreground: "#FFFFFF",  // Text color on secondary
                },
            }

        }
    }
});