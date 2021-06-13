import React, { useState, useEffect } from "react";

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

    return (
        <a
            className="cursor-pointer2"
            onClick={() =>
                setMode(mode => (mode === "light" ? "dark" : "light"))
            }
        >
            <small> {mode === "light" ? "Dark" : "Light"} Mode</small>
        </a>
    );
}

export default useThemeSwitcher;