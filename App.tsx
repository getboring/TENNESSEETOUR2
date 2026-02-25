import React from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { OpportunitySection } from './components/OpportunitySection';
import { CampusSection } from './components/CampusSection';
import { VisionSection } from './components/VisionSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { PartnershipSection } from './components/PartnershipSection';
import { ImpactSection } from './components/ImpactSection';
import { TimelineSection } from './components/TimelineSection';
import { AskSection } from './components/AskSection';
import { SafetySection } from './components/SafetySection';
import { UrgencySection } from './components/UrgencySection';
import { StrategySection } from './components/StrategySection';
import { EducationSection } from './components/EducationSection';
import { LegalSection } from './components/LegalSection';
import { BudgetSection } from './components/BudgetSection';
import { TeamSection } from './components/TeamSection';

/**
 * EXECUTIVE SUMMARY & CONFIRMATION
 * 
 * I confirm understanding of the "Tennessee Frontier Gateway" project architecture:
 * 1. Facility: 4,800 sq. ft. L-Shaped Discovery Center.
 *    - 1,600 sq. ft. Event Hall.
 *    - 1,200 sq. ft. Overlook Deck.
 *    - Modern Dogtrot glass entry.
 *    - Materials: Timber, Glass, Stone, Charcoal Standing Seam Roof.
 * 
 * 2. Tri-Party Agreement (MOU):
 *    - RMHA: Landowner (50-yr lease).
 *    - Sullivan County: Funder ($3.5M) & Owner.
 *    - Johnson City: Infrastructure (Road Closure/Utilities).
 * 
 * This application is scaffolded using:
 * - React 18+ (SPA structure mimicking Next.js Layout/Page pattern)
 * - Tailwind CSS for 'Modern Frontier' styling
 * - Lucide React for iconography
 */

const App: React.FC = () => {
  return (
    <Layout>
      <HeroSection />
      <OpportunitySection />
      <CampusSection />
      <SafetySection />
      <VisionSection />
      <ArchitectureSection />
      <UrgencySection />
      <StrategySection />
      <EducationSection />
      <PartnershipSection />
      <LegalSection />
      <BudgetSection />
      <ImpactSection />
      <TeamSection />
      <TimelineSection />
      <AskSection />
    </Layout>
  );
};

export default App;