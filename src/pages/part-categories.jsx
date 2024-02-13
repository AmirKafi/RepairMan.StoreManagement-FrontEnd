import { Helmet } from 'react-helmet-async';

import { PartCategories } from 'src/sections/part-categories/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Part Categories | Repair Man </title>
      </Helmet>

      <PartCategories />
    </>
  );
}
