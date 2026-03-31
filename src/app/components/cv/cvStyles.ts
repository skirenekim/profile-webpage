import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#1a1a1a',
    lineHeight: 1.4,
    paddingTop: 48,
    paddingBottom: 48,
    paddingLeft: 44,
    paddingRight: 44,
  },
  // Header
  header: { marginBottom: 16 },
  name: { fontSize: 22, fontFamily: 'Helvetica-Bold', lineHeight: 1.2, marginBottom: 6 },
  title: { fontSize: 11, color: '#666', lineHeight: 1.25, marginBottom: 6 },
  contactLine: { flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginBottom: 14 },
  contactLabel: { fontSize: 8.5, color: '#999999', fontFamily: 'Helvetica-Bold', textTransform: 'uppercase', letterSpacing: 0.5 },
  contactSep: { fontSize: 9, color: '#cccccc' },
  contactText: { fontSize: 9, color: '#555' },
  contactLink: { fontSize: 9, color: '#2563eb', textDecoration: 'none' },
  divider: { borderBottomWidth: 1, borderBottomColor: '#cccccc', marginBottom: 4 },
  // Section
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 1.2,
    color: '#1a1a1a',
    textTransform: 'uppercase',
    lineHeight: 1.3,
    borderBottomWidth: 1.5,
    borderBottomColor: '#cccccc',
    paddingBottom: 4,
    marginBottom: 9,
    marginTop: 16,
  },
  // Experience
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  jobCompany: { fontSize: 11, fontFamily: 'Helvetica-Bold', lineHeight: 1.2, marginBottom: 3 },
  jobRole: { fontSize: 10, fontFamily: 'Helvetica-Oblique', color: '#555', lineHeight: 1.25, marginBottom: 7 },
  period: { fontSize: 9, color: '#666666', flexShrink: 0 },
  projectTitle: { fontSize: 9.5, fontFamily: 'Helvetica', lineHeight: 1.2, marginBottom: 2, flex: 1, marginRight: 8 },
  projectOutcome: { fontSize: 9, color: '#555555', lineHeight: 1.4, marginLeft: 8, marginBottom: 8 },
  jobBlock: { marginTop: 3, marginBottom: 12 },
  // Education
  institution: { fontSize: 11, fontFamily: 'Helvetica-Bold', lineHeight: 1.2, marginBottom: 2 },
  degree: { fontSize: 10, fontFamily: 'Helvetica-Oblique', color: '#555555', lineHeight: 1.25, marginBottom: 2 },
  location: { fontSize: 9, color: '#666666' },
  honor: { fontSize: 9, color: '#7a5c2e', lineHeight: 1.2, marginLeft: 8, marginBottom: 4 },
  note: { fontSize: 9, color: '#555555', lineHeight: 1.35, marginLeft: 8, marginBottom: 7 },
  eduBlock: { marginTop: 3, marginBottom: 12 },
  // Skills
  skillRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 9 },
  skillLabel: { fontFamily: 'Helvetica-Bold', fontSize: 9.5, lineHeight: 1.2, minWidth: 115, marginRight: 12 },
  skillValue: { fontSize: 9.5, color: '#444444', lineHeight: 1.3, flex: 1 },
  // Presentations
  presentationTitle: { fontSize: 10, fontFamily: 'Helvetica', lineHeight: 1.3, marginBottom: 2 },
  presentationMeta: { fontSize: 9, color: '#444444', lineHeight: 1.3, marginBottom: 3 },
  presentationLink: { fontSize: 9, color: '#2563eb', lineHeight: 1.2, textDecoration: 'underline' },
});
