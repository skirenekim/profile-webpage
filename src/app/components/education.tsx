import { Award } from 'lucide-react';
import georgiaLogo from '../../../img/georgia_institute_of_technology_logo.jpeg';
import lseLogo from '../../../img/london_school_of_economics_logo.jpeg';
import cauLogo from '../../../img/chung_ang_university_logo.jpeg';
import { educationData, certifications } from '../../data/educationData';
import { Section, Row, Meta, Label } from './primitives';

const logoMap: Record<string, string> = {
  'Georgia Institute of Technology': georgiaLogo,
  'London School of Economics and Political Science': lseLogo,
  'Chung-Ang University': cauLogo,
};

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="divide-y divide-line border-y border-line">
        {educationData.map((edu) => (
          <li key={edu.institution} className="py-6">
            <Row left={<Meta items={[edu.period, edu.location]} />}>
              <div className="flex gap-4">
                <img
                  src={logoMap[edu.institution]}
                  alt=""
                  className="h-10 w-10 shrink-0 rounded-md border border-line bg-white object-contain p-1"
                />
                <div className="min-w-0">
                  <h3 className="text-xl text-ink">{edu.institution}</h3>
                  <p className="mt-0.5 text-ink-soft">
                    {edu.degree} in {edu.field}
                  </p>
                  {edu.honor && (
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-amber">
                      <Award className="h-3.5 w-3.5" aria-hidden="true" />
                      {edu.honor}
                    </p>
                  )}
                  {edu.note && <p className="mt-2 text-sm text-ink-muted">{edu.note}</p>}
                </div>
              </div>
            </Row>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <Label className="mb-3">Additional qualifications</Label>
        <ul className="divide-y divide-line border-y border-line">
          {certifications.map((cert) => (
            <li key={cert.title} className="py-4">
              <Row left={<Meta items={[cert.date]} />}>
                <h4 className="text-base font-medium text-ink">{cert.title}</h4>
                <p className="mt-0.5 text-sm text-ink-soft">{cert.issuer}</p>
              </Row>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
