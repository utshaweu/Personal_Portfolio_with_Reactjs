import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function useThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        };
    }, []);

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode) {
            setMode(_mode);
        } else {
            setMode("dark");
        }
    };

    useEffect(() => {
        if (mode === "light") {
            document.body.classList.add("light-mode");
            localStorage.setItem("mode", "light");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("mode", "dark");
        }
    }, [mode]);

    const nextModeLabel = mode === "light" ? "Switch to dark mode" : "Switch to light mode";

    return (
        <button
            type="button"
            className="cursor-pointer2"
            aria-label={nextModeLabel}
            title={nextModeLabel}
            onClick={() =>
                setMode(mode => (mode === "light" ? "dark" : "light"))
            }
        >
            <FontAwesomeIcon icon={mode === "light" ? faMoon : faSun} />
        </button>
    );
}

export default useThemeSwitcher;