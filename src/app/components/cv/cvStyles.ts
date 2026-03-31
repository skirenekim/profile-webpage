import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1a1a1a',
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 56,
    paddingRight: 56,
  },
  // Header
  header: { marginBottom: 14 },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', marginBottom: 3 },
  title: { fontSize: 11, color: '#444', marginBottom: 6 },
  contactLine: { flexDirection: 'row', gap: 6, marginBottom: 14 },
  contactText: { fontSize: 9, color: '#555' },
  contactLink: { fontSize: 9, color: '#2563eb', textDecoration: 'none' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#cccccc', marginBottom: 4 },
  // Section
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    color: '#555555',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingBottom: 3,
    marginBottom: 8,
    marginTop: 16,
  },
  // Experience
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  jobCompany: { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  jobRole: { fontSize: 10, fontFamily: 'Helvetica-Oblique', color: '#444', marginBottom: 5 },
  period: { fontSize: 9, color: '#666666' },
  projectTitle: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  projectOutcome: { fontSize: 9, color: '#444444', marginLeft: 10, marginBottom: 5 },
  jobBlock: { marginBottom: 8 },
  // Education
  institution: { fontSize: 11, fontFamily: 'Helvetica-Bold' },
  degree: { fontSize: 10, fontFamily: 'Helvetica-Oblique', color: '#333333', marginBottom: 2 },
  location: { fontSize: 9, color: '#666666' },
  honor: { fontSize: 9, color: '#7a5c2e', marginLeft: 8, marginBottom: 4 },
  note: { fontSize: 9, color: '#555555', marginLeft: 8, marginBottom: 6 },
  eduBlock: { marginBottom: 8 },
  // Skills
  skillRow: { flexDirection: 'row', marginBottom: 4 },
  skillLabel: { fontFamily: 'Helvetica-Bold', fontSize: 9.5, minWidth: 100 },
  skillValue: { fontSize: 9.5, color: '#333333', flexShrink: 1 },
  // Presentations
  presentationTitle: { fontSize: 10, fontFamily: 'Helvetica-Bold', marginBottom: 1 },
  presentationMeta: { fontSize: 9, color: '#444444', marginBottom: 2 },
  presentationLink: { fontSize: 9, color: '#2563eb', textDecoration: 'none' },
});
