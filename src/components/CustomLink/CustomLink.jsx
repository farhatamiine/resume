import { Link } from '@chakra-ui/layout';
import { useMatch, useResolvedPath } from 'react-router';

export default function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);

  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ textDecoration: match ? 'underline' : 'none' }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
