import { Ref, inject } from "vue";
import { darkModeKey } from "../contexts/ThemeInjectionKeys";
export function useDarkMode(): {darkMode: Ref<boolean>, setDarkMode: (value: boolean) => void} {
    const darkMode = inject(darkModeKey);
    if(!darkMode){
        throw new Error("useDarkMode must be used within a ThemeProvider");
    }
    return darkMode 
}
