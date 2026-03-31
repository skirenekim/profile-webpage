import { Document, Page, View, Text, Link } from '@react-pdf/renderer';
import { styles } from './cvStyles';
import { experienceData } from '../../../data/experienceData';
import { educationData, certifications } from '../../../data/educationData';

const PROFILE = {
  name: 'Seong Kyung Kim',
  title: 'Data Scientist',
  subtitle: 'User Behavior Analytics · Agentic AI · Applied ML',
  email: 'keks1208@naver.com',
  linkedin: 'linkedin.com/in/skirene',
  linkedinUrl: 'https://www.linkedin.com/in/skirene/',
  website: 'skirenekim.github.io/profile-webpage',
  websiteUrl: 'https://skirenekim.github.io/profile-webpage',
};

const SKILLS = {
  core: ['Agentic AI Systems', 'Anomaly Detection', 'Applied Machine Learning', 'Data-Driven Decision Making', 'User Behavior Analytics'],
  technical: ['Databricks', 'Docker', 'PyTorch', 'Python', 'S3', 'Spark', 'SQL', 'Tableau', 'TensorFlow'],
};

const PRESENTATIONS = [
  {
    title: 'Automating KPI Reasoning and Narrative Generation with Agent Bricks',
    venue: 'Databricks Data + AI Summit',
    date: 'June 2026',
    location: 'San Francisco, CA',
    url: 'https://www.databricks.com/dataaisummit/session/automating-kpi-reasoning-and-narrative-generation-agent-bricks-and',
  },
];

export function CVDocument() {
  return (
    <Document
      title={`${PROFILE.name} — CV`}
      author={PROFILE.name}
    >
      <Page size="A4" style={styles.page}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{PROFILE.name}</Text>
          <View style={styles.contactLine}>
            <Link src={`mailto:${PROFILE.email}`} style={styles.contactLabelLink}>Email</Link>
            <Text style={styles.contactSep}>  |  </Text>
            <Link src={PROFILE.linkedinUrl} style={styles.contactLabelLink}>LinkedIn</Link>
            <Text style={styles.contactSep}>  |  </Text>
            <Link src={PROFILE.websiteUrl} style={styles.contactLabelLink}>Web</Link>
          </View>
          <View style={styles.divider} />
        </View>

        {/* Areas of Interest */}
        <Text style={styles.sectionTitle}>Areas of Interest</Text>
        <View style={styles.skillRow}>
          <Text style={styles.skillValue}>
            Agentic AI · Applied Machine Learning · Human-Centered Computing · Responsible AI · Social Computing · User Behavior Analysis
          </Text>
        </View>

        {/* Professional Experience */}
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {experienceData.map((job) => (
          <View key={job.company} style={styles.jobBlock}>
            <View style={styles.row}>
              <Text style={styles.jobCompany}>{job.company}</Text>
              <Text style={styles.period}>{job.period}</Text>
            </View>
            <Text style={styles.jobRole}>{job.role}</Text>
            {job.projects.map((project) => (
              <View key={project.title}>
                <View style={styles.row}>
                  <Text style={styles.projectTitle}>{project.title}</Text>
                  <Text style={styles.period}>{project.period}</Text>
                </View>
                <Text style={styles.projectOutcome}>{project.outcome}</Text>
              </View>
            ))}
          </View>
        ))}

        {/* Education */}
        <Text style={styles.sectionTitle}>Education</Text>
        {educationData.map((edu) => (
          <View key={edu.institution} style={styles.eduBlock}>
            <View style={styles.row}>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.period}>{edu.period}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.degree}>{edu.degree} in {edu.field}</Text>
              <Text style={styles.location}>{edu.location}</Text>
            </View>
            {edu.honor && <Text style={styles.honor}>★ {edu.honor}</Text>}
            {edu.note && <Text style={styles.note}>{edu.note}</Text>}
          </View>
        ))}

        {/* Additional Qualifications */}
        <Text style={styles.sectionTitle}>Additional Qualifications</Text>
        {certifications.map((cert) => (
          <View key={cert.title} style={{ marginBottom: 8 }}>
            <View style={styles.row}>
              <Text style={styles.projectTitle}>{cert.title}</Text>
              <Text style={styles.period}>{cert.date}</Text>
            </View>
            <Text style={styles.note}>{cert.issuer}</Text>
          </View>
        ))}

        {/* Skills */}
        <Text style={styles.sectionTitle}>Skills</Text>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Core Expertise</Text>
          <Text style={styles.skillValue}>{SKILLS.core.join(' · ')}</Text>
        </View>
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Technical</Text>
          <Text style={styles.skillValue}>{SKILLS.technical.join(' · ')}</Text>
        </View>

        {/* Conference Presentations */}
        <Text style={styles.sectionTitle}>Conference Presentations</Text>
        {PRESENTATIONS.map((p) => (
          <View key={p.title} style={{ marginBottom: 9 }}>
            <Text style={styles.presentationTitle}>{p.title}</Text>
            <View style={styles.row}>
              <Text style={styles.presentationMeta}>{p.venue} · {p.date} · {p.location}</Text>
              <Link src={p.url} style={styles.presentationLink}>View Session</Link>
            </View>
          </View>
        ))}

      </Page>
    </Document>
  );
}
