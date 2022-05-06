import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | NextJS</title>
    </Head>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
};
