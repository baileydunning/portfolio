import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Heart, Award, Calendar } from 'lucide-react';

const experience = [
  {
    title: 'Software Engineer',
    company: 'Harper',
    type: 'Full-time',
    period: 'Aug 2025 - Present',
    duration: '5 mos',
    location: 'Denver, Colorado',
  },
  {
    title: 'Associate Software Engineer → Software Engineer',
    company: 'Ibotta, Inc.',
    type: 'Full-time',
    period: 'May 2021 - Jul 2025',
    duration: '4 yrs 2 mos',
    location: 'Denver, Colorado',
  },
  {
    title: 'Web Designer',
    company: 'Running Wild Race',
    type: 'Contract',
    period: 'Aug 2018 - Dec 2021',
    duration: '3 yrs 5 mos',
    location: 'Denver, Colorado',
  },
  {
    title: 'Instructional Designer',
    company: 'The Random Acts of Kindness Foundation',
    type: 'Full-time',
    period: 'Nov 2016 - Jun 2018',
    duration: '1 yr 8 mos',
    location: 'Denver, Colorado',
  },
  {
    title: 'Hiker',
    company: 'Hike Doggie',
    type: 'Part-time',
    period: 'Oct 2016 - Jan 2018',
    duration: '1 yr 4 mos',
    location: 'Golden, Colorado',
  },
  {
    title: 'Design & Build Intern',
    company: 'MOA (Museum of Outdoor Arts)',
    type: 'Internship',
    period: 'Jun 2015 - Aug 2015',
    duration: '3 mos',
    location: 'Englewood, Colorado',
  },
];

const education = [
  {
    school: 'Turing School of Software & Design',
    degree: 'Frontend Engineering Diploma',
    period: '2020 - 2021',
    activities: 'Graduation Speaker, Student Leadership Committee, 1st & 2nd Place Demo Comp',
  },
  {
    school: 'University of Denver',
    degree: 'Bachelor of Arts (B.A.), Emergent Digital Practices',
    period: '2012 - 2016',
    activities: 'D1 Women\'s Lacrosse, DU Mobile Projections Club, Club Lacrosse, Tri Delta',
  },
  {
    school: 'NOLS',
    degree: 'Wilderness First Responder / CPR Certification',
    period: '2019 (Recertified 2022 & 2024)',
  },
];

const skills = ['TypeScript', 'React', 'Vite', 'Vue.js', 'Next.js', 'Nuxt.js', 'Node.js', 'REST APIs', 'GraphQL', 'Event-driven architecture', 'AWS', 'PostgreSQL', 'Tailwind CSS', 'Git'];

const volunteering = [
  {
    role: 'Volunteer',
    org: 'Tennyson Center for Children',
    period: 'Jun 2023 - Present',
  },
  {
    role: 'Therapy Dog Handler',
    org: 'Alliance of Therapy Dogs',
    period: 'Jun 2023 - Present',
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen pt-14">
      <div className="container-main py-12 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center gap-2 text-small link-subtle">
            <ArrowLeft size={14} />
            Back
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-h1 text-foreground">Bailey Dunning</h1>
              <p className="text-body text-muted-foreground mt-2">Software Engineer</p>
              <div className="flex items-center gap-2 text-small text-muted-foreground mt-2">
                <MapPin size={14} className="text-accent" />
                <span>Arvada, Colorado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Briefcase size={18} className="text-accent" />
            <h2 className="text-h2 text-foreground">Experience</h2>
          </div>
          
          <div className="space-y-1">
            {experience.map((job, i) => (
              <div 
                key={i} 
                className="relative pl-6 pb-6 border-l-2 border-border last:pb-0"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                    <div>
                      <h3 className="text-h3 text-foreground">{job.title}</h3>
                      <p className="text-body text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-small text-muted-foreground md:text-right">
                      <Calendar size={12} />
                      <span>{job.period}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2 text-small text-muted-foreground">
                    <span>{job.type}</span>
                    {job.duration && <span>· {job.duration}</span>}
                    <span>· {job.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-accent" />
            <h2 className="text-h2 text-foreground">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <div key={i} className="card-hover">
                <h3 className="text-h3 text-foreground">{edu.school}</h3>
                <p className="text-body text-muted-foreground mt-1">{edu.degree}</p>
                <p className="text-small text-muted-foreground mt-2">{edu.period}</p>
                {edu.activities && (
                  <p className="text-small text-muted-foreground/70 mt-2 italic">{edu.activities}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Award size={18} className="text-accent" />
            <h2 className="text-h2 text-foreground">Skills</h2>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* Volunteering */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <Heart size={18} className="text-accent" />
            <h2 className="text-h2 text-foreground">Volunteering</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {volunteering.map((vol, i) => (
              <div key={i} className="card-hover">
                <h3 className="text-h3 text-foreground">{vol.role}</h3>
                <p className="text-body text-muted-foreground mt-1">{vol.org}</p>
                <p className="text-small text-muted-foreground mt-2">{vol.period}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
