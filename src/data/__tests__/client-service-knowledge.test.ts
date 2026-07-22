import { describe, expect, it } from 'vitest';
import {
  appointmentPolicies,
  getTreatmentAnswerOrHandoff,
  treatmentPlanningKnowledge,
  unsupportedTreatmentHandoff,
} from '../client-service-knowledge';
import { indexableTreatmentSlugs } from '@/lib/search-index-policy';

describe('client service knowledge', () => {
  it('only automates answers for owner-supported treatment pages', () => {
    expect(Object.keys(treatmentPlanningKnowledge)).toEqual([...indexableTreatmentSlugs]);
  });

  it('covers the questions clients need before requesting an appointment', () => {
    for (const slug of indexableTreatmentSlugs) {
      const knowledge = treatmentPlanningKnowledge[slug];

      expect(knowledge.results.length).toBeGreaterThan(20);
      expect(knowledge.downtime.length).toBeGreaterThan(20);
      expect(knowledge.sessions.length).toBeGreaterThan(20);
      expect(knowledge.preparation.length).toBeGreaterThan(20);
      expect(knowledge.comfort.length).toBeGreaterThan(20);
      expect(knowledge.safety.length).toBeGreaterThan(20);
    }
  });

  it('hands unverified services to the salon instead of inventing an answer', () => {
    expect(getTreatmentAnswerOrHandoff('migraine-treatment')).toEqual({
      kind: 'handoff',
      message: unsupportedTreatmentHandoff,
    });
  });

  it('keeps the confirmed appointment notice periods consistent', () => {
    expect(appointmentPolicies).toEqual({
      bookingRequestConfirmationHours: 24,
      cancellationNoticeHours: 48,
      rescheduleNoticeHours: 24,
    });
  });
});
