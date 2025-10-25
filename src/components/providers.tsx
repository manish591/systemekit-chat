import { ThemeProvider } from "@mui/material";
import { useTheme } from "@/hooks/useTheme";

export function Providers({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const theme = useTheme();
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
