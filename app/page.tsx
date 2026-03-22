import HeroSection from "@/components/sections/HeroSection";
import StatusSection from "@/components/sections/StatusSection";
import VaultSection from "@/components/sections/VaultSection";
import FrequencySection from "@/components/sections/FrequencySection";
import TerminalSection from "@/components/sections/TerminalSection";
import NavDock from "@/components/NavDock";
import ReticleCursor from "@/components/ReticleCursor";
import LenisProvider from "@/components/LenisProvider";

export default function Home() {
    return (
        <LenisProvider>
            <ReticleCursor />
            <NavDock />
            <main>
                <HeroSection />
                <StatusSection />
                <VaultSection />
                {/*<FrequencySection />*/}
                <TerminalSection />
            </main>
        </LenisProvider>
    );
}
