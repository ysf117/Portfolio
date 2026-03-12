import { SwissLayout } from '@/components/templates';
import {
    HeroSection,
    WorkCarousel,
    ExperienceTimeline,
    EducationGrid,
    CertificationGrid,
    Footer,
} from '@/components/organisms';

export default function HomePage() {
    return (
        <SwissLayout>
            <HeroSection />
            <WorkCarousel />
            <ExperienceTimeline />
            <EducationGrid />
            <CertificationGrid />
            <Footer />
        </SwissLayout>
    );
}
