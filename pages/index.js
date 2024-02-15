import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
        10 Things That Require Zero Talent
        </p>

<ul>
<li>Being on time</li>
<li>Work ethic</li> 
<li>Effort</li>
<li>Body language</li>
<li>Energy</li>
<li>Attitude</li>
<li>Passion</li>
<li>Being coachable</li>
<li>Doing extra</li>
<li>Being prepared</li>
</ul>




        <p>(This is a sample website - you’ll be building a site like this on our Next.js tutorial.)</p>
      </section>
    </Layout>
  );
}