import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavigationContextType {
  canGoBack: boolean;
  setCanGoBack: (canGoBack: boolean) => void;
  toRoute: string | null;
  setToRoute: (toRoute: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [canGoBack, setCanGoBack] = useState<boolean>(true);
  const [toRoute, setToRoute] = useState<string | null>(null);
  return (
    <NavigationContext.Provider
      value={{ canGoBack, setCanGoBack, toRoute, setToRoute }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useCustomNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error(
      "useCustomNavigation must be used within a NavigationProvider",
    );
  }
  return context;
};
