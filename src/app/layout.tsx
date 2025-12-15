import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: "Chez Zhang - Restaurant Asiatique | Bereldange, Luxembourg",
    description: "Restaurant asiatique à Bereldange. Sushi, sashimi, spécialités asiatiques fraîches. Livraison et à emporter. Ouvert tous les jours sauf mardi.",
    keywords: "restaurant asiatique, Bereldange, Luxembourg, sushi, sashimi, livraison, Chez Zhang, cuisine asiatique",
    openGraph: {
        title: "Chez Zhang - Restaurant Asiatique",
        description: "Cuisine asiatique authentique à Bereldange, Luxembourg",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
