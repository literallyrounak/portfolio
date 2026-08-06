import Section from './Section';
import { aboutParagraphs } from '../data/site';

const About = () => {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 px-4 py-4 text-[15px] leading-relaxed text-[color:var(--text-secondary)]">
        {aboutParagraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </Section>
  );
};

export default About;
