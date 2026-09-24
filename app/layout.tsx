import "./globals.css";import type {Metadata} from "next";
export const metadata:Metadata={title:"NEXUS SF | Premium Gym & Personal Training in San Francisco",description:"A new generation of strength, performance and personal coaching in San Francisco."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}