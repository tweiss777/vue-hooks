import type { InjectionKey, Ref } from "vue";

export const darkModeKey: InjectionKey<{
    darkMode: Ref<boolean>;
    setDarkMode: (value: boolean) => void;
}> = Symbol("darkModeKey")
