import {
    SectionLabel,
    Badge,
    IconButton,
    SwissBorder,
    ProfileImage,
    GlitchText,
} from '@/components/atoms';

export default function TestAtomsPage() {
    return (
        <div className="min-h-screen bg-background-dark p-12 text-silver">
            {/* Config Check */}
            <div className="text-primary text-4xl mb-8">
                Config Check
            </div>
            <p className="text-gray-500 text-sm mb-12">
                If the text above is NOT Electric Blue (#3b82f6) or NOT Space Grotesk, the Tailwind config is broken.
            </p>

            <SwissBorder className="mb-12" />

            {/* Atoms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* SectionLabel */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">SectionLabel</h2>
                    <SectionLabel number="01" title="Selected Works" />
                </div>

                {/* Badge */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">Badge</h2>
                    <div className="flex flex-wrap gap-2">
                        <Badge label="Outline" variant="outline" />
                        <Badge label="Filled" variant="filled" />
                        <Badge label="Next.js" variant="outline" />
                        <Badge label="AWS" variant="outline" />
                    </div>
                </div>

                {/* IconButton */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">IconButton</h2>
                    <div className="flex gap-4">
                        <IconButton icon="home" label="Intro" />
                        <IconButton icon="grid_view" label="Projects" isActive />
                        <IconButton icon="mail" label="Contact" />
                    </div>
                </div>

                {/* SwissBorder */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">SwissBorder</h2>
                    <div className="flex items-center gap-4">
                        <SwissBorder orientation="horizontal" className="w-32" />
                        <SwissBorder orientation="vertical" className="h-12" />
                    </div>
                </div>

                {/* ProfileImage */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">ProfileImage</h2>
                    <ProfileImage
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG3VCuYdVbOpgcNivSNHrh9UWAFwb00si_udEbWfifIBBPp7oxVCHolwffdBMk2d3i5-RbSmv-mONPTsvTdxK8ks_ylmfpHi5DPhplvPCFUfRTOk46o81zCWewZ1XoLJumzEQ5HlTE3sprTLY2ecOiqkHAtKaxOoQefM4KBft1R6SfdVOz1nAAdkaaQd_XVVszDUitK1oRIhRFxMYAGFA42M6oEVSqm763ZCQ_8UCbmDlIq4yOZ_fJc20BTMh6JWQEEDhPf7j_qTs"
                        alt="Profile"
                    />
                </div>

                {/* GlitchText */}
                <div className="space-y-4">
                    <h2 className="text-white text-lg font-bold uppercase tracking-widest">GlitchText</h2>
                    <GlitchText text="YUSUF MINHAS" />
                </div>
            </div>
        </div>
    );
}
