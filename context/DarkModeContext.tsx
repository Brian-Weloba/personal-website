import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useMemo,
	useCallback,
} from "react";

// Define the initial context value
const initialContextValue = {
	darkMode: false,
	toggleDarkMode: () => {},
};

interface DarkModeProviderProps {
	children: React.ReactNode; // Specify the type of children
}

const DarkModeContext = createContext(initialContextValue);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
	const [darkMode, setDarkMode] = useState(() => {
		if (typeof window !== "undefined") {
			// Check local storage for the user's preference
			const userDarkModePreference = localStorage.getItem(
				"userDarkModePreference"
			);
			// If a preference is stored, use it; otherwise, use the system's preference
			if (userDarkModePreference === "dark") {
				return true;
			} else if (userDarkModePreference === "light") {
				return false;
			}
		}
		return false; // Default to false if window or localStorage is not available
	});

	useEffect(() => {
		const detectAndStoreUserPreference = () => {
			if (typeof window !== "undefined") {
				// Check for window here to ensure it's only executed in the browser
				const userDarkModePreference = localStorage.getItem(
					"userDarkModePreference"
				);

				if (userDarkModePreference === "dark") {
					setDarkMode(true);
				} else if (userDarkModePreference === "light") {
					setDarkMode(false);
				} else {
					const prefersDarkMode = window.matchMedia(
						"(prefers-color-scheme: dark)"
					).matches;
					setDarkMode(prefersDarkMode);
					localStorage.setItem(
						"userDarkModePreference",
						prefersDarkMode ? "dark" : "light"
					);
				}
			}
		};

		detectAndStoreUserPreference();
	}, []);

	const toggleDarkMode = useCallback(() => {
		setDarkMode((prevDarkMode) => !prevDarkMode);
		if (typeof window !== "undefined") {
			// Check for window here to ensure it's only executed in the browser
			localStorage.setItem(
				"userDarkModePreference",
				!darkMode ? "dark" : "light"
			);
		}
	}, [darkMode]);

	const contextValue = useMemo(
		() => ({
			darkMode,
			toggleDarkMode,
		}),
		[darkMode, toggleDarkMode]
	);

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
}

export function useDarkMode() {
	return useContext(DarkModeContext);
}
