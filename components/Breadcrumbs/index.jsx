import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const convertBreadcrumb = (string) => {
  return string
    .split(/[?#]/)[0]
    .replace(/-/g, ' ')
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

const Breadcrumbs = () => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState(null);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav aria-label="breadcrumbs">
      <ol className="breadcrumb">
        <li>
          <a href="/">HOME</a>
        </li>
        {breadcrumbs.map((breadcrumb, i) => {
          console.log(
            'last',
            breadcrumb.breadcrumb,
            i === breadcrumbs.length - 1
          );

          return (
            <>
              {i >= 0 ? <div>{'/'}</div> : null}
              <li key={breadcrumb.href}>
                <Link href={breadcrumb.href}>
                  <a> {convertBreadcrumb(breadcrumb.breadcrumb)}</a>
                </Link>
              </li>
              {/* check last crumb */}
              {i === breadcrumbs.length - 1 && <p>{breadcrumb.breadcrumb}</p>}
            </>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
