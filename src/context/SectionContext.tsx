"use client";

import React, { createContext, useContext, useState } from "react";

const SectionContext = createContext<{
    section: string;
    setSection: (id: string) => void;
}>({
    section: "",
    setSection: () => { },
});

export const useSection = () => useContext(SectionContext);

export const SectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [section, setSection] = useState("");
    return (
        <SectionContext.Provider value={{ section, setSection }}>
            {children}
        </SectionContext.Provider>
    );
};
