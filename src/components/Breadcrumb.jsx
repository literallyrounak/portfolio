import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean).slice(0, 4);

  return (
    <nav aria-label="Breadcrumbs" className="min-w-0 font-heading">
      <ul className="flex items-center text-sm font-semibold sm:text-base tracking-tight">
        <li className="inline-flex items-center">
          <Link to="/" className="text-accent hover:text-accent/80 transition-colors duration-200">
            ~
          </Link>
        </li>

        {segments.map((segment, i) => {
          const href = '/' + segments.slice(0, i + 1).join('/');
          const isLast = i === segments.length - 1;
          return (
            <li key={href} className="mx-0.5 inline-flex items-center">
              <span className="mx-1 text-subtext0/50">/</span>
              {isLast ? (
                <span className="text-text font-bold">{segment}</span>
              ) : (
                <Link to={href} className="text-subtext0 hover:text-text transition-colors duration-200">
                  {segment}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};


export default Breadcrumb;

