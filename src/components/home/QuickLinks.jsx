const links = [
  { label: 'Academics', detail: 'Subjects, ICT and co-curricular life', to: '/#academics' },
  { label: 'Admissions', detail: 'Who we admit, and how to apply', to: '/admissions' },
  { label: 'School Calendar', detail: 'Terms, exams and holidays', to: '/#news' },
  { label: 'Clubs & Activities', detail: 'Debate, quiz and sports', to: '/#academics' },
];

export default function QuickLinks() {
  return (
    <nav aria-label="Quick links" className="quick-links">
      {links.map((link) => (
        <a href={link.to} key={link.label}>
          <span className="quick-links__mark" aria-hidden="true" />
          <strong>{link.label}</strong>
          <span className="detail">{link.detail}</span>
        </a>
      ))}
    </nav>
  );
}
